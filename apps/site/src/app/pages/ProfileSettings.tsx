import { gql, useMutation } from "@apollo/client";
import { useNavigate } from "react-router-dom";
import { useState } from "react";

const CHANGE_LOGIN = gql`
  mutation ChangeLogin($newLogin: String!) {
    changeLogin(data: { newLogin: $newLogin })
  }
`;

const CHANGE_PASSWORD = gql`
  mutation ChangePassword($currentPassword: String!, $newPassword: String!) {
    changePassword(data: { currentPassword: $currentPassword, newPassword: $newPassword })
  }
`;

const UPDATE_ABOUT = gql`
  mutation UpdateAbout($about: String!) {
    updateAbout(data: { about: $about })
  }
`;

const UPDATE_AVATAR = gql`
  mutation UpdateAvatar($file: Upload!) {
    updateAvatar(data: { file: $file })
  }
`;

export default function ProfileSettings() {
  const navigate = useNavigate();

  const [login, setLogin] = useState("");
  const [currentPassword, setCurrentPassword] = useState("");
  const [newPassword, setNewPassword] = useState("");
  const [about, setAbout] = useState("");
  const [avatar, setAvatar] = useState<File | null>(null);

  const [changeLogin] = useMutation(CHANGE_LOGIN);
  const [changePassword] = useMutation(CHANGE_PASSWORD);
  const [updateAbout] = useMutation(UPDATE_ABOUT);
  const [updateAvatar] = useMutation(UPDATE_AVATAR);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    try {
      if (login.trim()) await changeLogin({ variables: { newLogin: login } });
      if (currentPassword && newPassword)
        await changePassword({ variables: { currentPassword, newPassword } });
      if (about.trim()) await updateAbout({ variables: { about } });
      if (avatar instanceof File) {
        console.log("Передається файл:", avatar);
        await updateAvatar({ variables: { file: avatar } });
      }

      alert("Зміни збережено!");
      navigate("/profile");
    } catch (err: any) {
      console.error("Помилка при збереженні:", err);
      alert("Помилка: " + err.message);
    }
  };

  return (
    <div style={{ maxWidth: 600, margin: "0 auto", padding: 20, fontFamily: "sans-serif" }}>
      <h2>Редагування профілю</h2>
      <form onSubmit={handleSubmit}>
        <label>Новий логін:</label>
        <input value={login} onChange={(e) => setLogin(e.target.value)} />

        <label>Поточний пароль:</label>
        <input type="password" value={currentPassword} onChange={(e) => setCurrentPassword(e.target.value)} />

        <label>Новий пароль:</label>
        <input type="password" value={newPassword} onChange={(e) => setNewPassword(e.target.value)} />

        <label>Про себе:</label>
        <textarea value={about} onChange={(e) => setAbout(e.target.value)} />

        <label>Аватарка:</label>
        <input
          type="file"
          accept="image/*"
          onChange={(e) => {
            const file = e.target.files?.[0];
            if (file) {
              setAvatar(file);
            }
          }}
        />

        <div style={{ marginTop: 20 }}>
          <button type="submit" style={{ background: "#2563eb", color: "white", padding: "10px 20px", borderRadius: 6, border: "none" }}>
             Зберегти
          </button>
          <button
            type="button"
            onClick={() => navigate("/profile")}
            style={{ marginLeft: 10, background: "#ccc", padding: "10px 20px", borderRadius: 6, border: "none" }}
          >
             Назад
          </button>
        </div>
      </form>
    </div>
  );
}
