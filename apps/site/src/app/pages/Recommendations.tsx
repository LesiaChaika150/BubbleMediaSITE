import { gql, useQuery } from "@apollo/client";
import { useState } from "react";

// Імпортуємо функцію форматування
import { formatGoogleDriveUrl } from "../utils/formatGoogleDriveUrl";

const GET_RANDOM_PUBLICATIONS = gql`
  query {
    GetRandomPublications(input: {
      photoCount: 5,
      videoCount: 5,
      audioCount: 5,
      tegs: [],
      author: ""
    }) {
      publications {
        publicationId
        publicationName
        login
        avatarUrl
        coverUrl
        type
      }
    }
  }
`;

export default function Recommendations() {
  const { data, loading, error } = useQuery(GET_RANDOM_PUBLICATIONS);
  const [search, setSearch] = useState("");

  if (loading) return <p>Завантаження...</p>;
  if (error) return <p>Помилка: {error.message}</p>;

  const filteredPublications = data.GetRandomPublications.publications.filter(
    (pub: any) =>
      pub.publicationName.toLowerCase().includes(search.toLowerCase()) ||
      pub.login.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div style={{ maxWidth: "800px", margin: "0 auto" }}>
      <h2 style={{ fontSize: "18px", marginBottom: "10px" }}>Рекомендовані публікації</h2>

      <div style={{ marginBottom: "20px" }}>
        <input
          type="text"
          placeholder="Пошук за назвою або автором"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          style={{ padding: "10px", width: "100%" }}
        />
      </div>

      {filteredPublications.map((pub: any) => (
        <div
          key={pub.publicationId}
          style={{
            border: "1px solid #ccc",
            padding: "15px",
            marginBottom: "10px",
            borderRadius: "8px",
          }}
        >
          <h3 style={{ marginBottom: "5px" }}>{pub.publicationName}</h3>
          <p style={{ fontSize: "14px", color: "#666" }}>Автор: {pub.login}</p>
          <p>Тип: {pub.type}</p>
          {pub.coverUrl && (
            <img
              src={formatGoogleDriveUrl(pub.coverUrl)}
              alt="cover"
              style={{ maxWidth: "100%", marginTop: "10px" }}
            />
          )}
        </div>
      ))}
    </div>
  );
}
