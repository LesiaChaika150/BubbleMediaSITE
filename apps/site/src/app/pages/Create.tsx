import { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function Create() {
  const navigate = useNavigate();
  const [type, setType] = useState("photo"); // 'video' | 'audio' | 'photo'
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [tags, setTags] = useState("");
  const [file, setFile] = useState<File | null>(null);
  const [cover, setCover] = useState<File | null>(null); // тільки для відео та аудіо
  const [loading, setLoading] = useState(false);

  const handleCreatePost = async () => {
    if (!title.trim() || !file) {
      alert("Назва та файл обов'язкові");
      return;
    }

    const operations = {
      query: getMutationByType(type),
      variables: {
        [getInputNameByType(type)]: {
          publicationName: title.trim(),
          about: description.trim(),
          tegs: tags.split(",").map((t) => t.trim()).filter(Boolean),
          ...(type === "photo"
            ? { photo: null }
            : { [type]: null, cover: null }),
        },
      },
    };

    const map: Record<string, string[]> = { 0: [`variables.${getInputNameByType(type)}.${type}`] };
    if ((type === "video" || type === "audio") && cover) {
      map["1"] = [`variables.${getInputNameByType(type)}.cover`];
    }

    const formData = new FormData();
    formData.append("operations", JSON.stringify(operations));
    formData.append("map", JSON.stringify(map));
    formData.append("0", file);
    if ((type === "video" || type === "audio") && cover) {
      formData.append("1", cover);
    }

    try {
      setLoading(true);
      const res = await fetch("http://localhost:4000/graphql", {
        method: "POST",
        body: formData,
        headers: {
          Authorization: `Bearer ${localStorage.getItem("token") || ""}`,
        },
      });

      const result = await res.json();
      if (result.errors) throw new Error(result.errors[0].message);

      navigate("/profile");
    } catch (error: any) {
      alert(error.message || "Помилка при створенні публікації");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div style={{ padding: "20px", maxWidth: "800px", margin: "0 auto" }}>
      <h2 style={{ fontSize: "18px", marginBottom: "10px" }}>Створити публікацію</h2>

      <select
        value={type}
        onChange={(e) => setType(e.target.value)}
        style={{ padding: "10px", width: "100%", marginBottom: "10px" }}
      >
        <option value="photo">Фото</option>
        <option value="video">Відео</option>
        <option value="audio">Аудіо</option>
      </select>

      <input
        type="text"
        placeholder="Назва"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        style={{ padding: "10px", width: "100%", marginBottom: "10px" }}
      />

      <textarea
        placeholder="Опис"
        value={description}
        onChange={(e) => setDescription(e.target.value)}
        style={{ padding: "10px", width: "100%", height: "80px", marginBottom: "10px" }}
      />

      <input
        type="text"
        placeholder="Теги (через кому)"
        value={tags}
        onChange={(e) => setTags(e.target.value)}
        style={{ padding: "10px", width: "100%", marginBottom: "10px" }}
      />

      <input
        type="file"
        accept={type === "photo" ? "image/*" : type === "video" ? "video/*" : "audio/*"}
        onChange={(e) => setFile(e.target.files?.[0] || null)}
        style={{ marginBottom: "10px" }}
      />

      {(type === "video" || type === "audio") && (
        <input
          type="file"
          accept="image/*"
          onChange={(e) => setCover(e.target.files?.[0] || null)}
          style={{ marginBottom: "10px" }}
          placeholder="Обкладинка"
        />
      )}

      <button
        onClick={handleCreatePost}
        disabled={loading}
        style={{
          padding: "10px 20px",
          backgroundColor: "#2563eb",
          color: "white",
          border: "none",
          borderRadius: "6px",
        }}
      >
        {loading ? "Завантаження..." : "Опублікувати"}
      </button>
    </div>
  );
}

// Хелпери
function getMutationByType(type: string): string {
  switch (type) {
    case "video":
      return `mutation UploadVideo($uploadVideoInput: UploadVideoInput!) {
        uploadVideo(uploadVideoInput: $uploadVideoInput)
      }`;
    case "audio":
      return `mutation UploadAudio($uploadAudioInput: UploadAudioInput!) {
        uploadAudio(uploadAudioInput: $uploadAudioInput)
      }`;
    case "photo":
    default:
      return `mutation UploadPhoto($uploadPhotoInput: UploadPhotoInput!) {
        uploadPhoto(uploadPhotoInput: $uploadPhotoInput)
      }`;
  }
}

function getInputNameByType(type: string): string {
  return type === "video"
    ? "uploadVideoInput"
    : type === "audio"
    ? "uploadAudioInput"
    : "uploadPhotoInput";
}
