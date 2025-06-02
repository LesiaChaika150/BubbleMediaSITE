import { useQuery, gql } from "@apollo/client";
import { useEffect, useState } from "react";
import { formatGoogleDriveUrl } from "../utils/formatGoogleDriveUrl";

const GET_PROFILE = gql`
  query GetProfile($userId: String!) {
    getProfile(userId: $userId) {
      about
      avatarUrl
      subscriptions
      subscribersCount
    }
  }
`;

const GET_LOGIN = gql`
  query GetLogin($data: GetLoginInput!) {
    getLogin(data: $data) {
      login
    }
  }
`;

const GET_USER_PUBLICATIONS = gql`
  query GetUserPublications($input: GetUserPublicationsInput!) {
    GetUserPublications(input: $input) {
      publications {
        publicationId
        publicationName
        coverUrl
        type
      }
    }
  }
`;

export default function Profile() {
  const [userId, setUserId] = useState<string | null>(null);

  useEffect(() => {
    const profileStr = localStorage.getItem("userProfile");
    try {
      const parsed = JSON.parse(profileStr || "{}");
      if (parsed?.userId) {
        setUserId(parsed.userId);
      }
    } catch (error) {
      console.error("Неправильний формат userProfile у localStorage");
    }
  }, []);

  const { data: profileData, loading: profileLoading } = useQuery(GET_PROFILE, {
    variables: { userId: userId || "" },
    skip: !userId,
    fetchPolicy: "no-cache",
  });

  const { data: loginData, loading: loginLoading } = useQuery(GET_LOGIN, {
    variables: { data: { userId: userId || "" } },
    skip: !userId,
    fetchPolicy: "no-cache",
  });

  const { data: publicationsData, loading: publicationsLoading } = useQuery(
    GET_USER_PUBLICATIONS,
    {
      variables: {
        input: {
          userId: userId || "",
          postsRequest: { start: 0, end: 20 },
        },
      },
      skip: !userId,
      fetchPolicy: "no-cache",
    }
  );

  const profile = profileData?.getProfile;
  const login = loginData?.getLogin?.login;
  const publications = publicationsData?.GetUserPublications?.publications || [];

  if (!userId) {
    return <p style={{ textAlign: "center" }}>Не вдалося знайти ID користувача.</p>;
  }

  if (profileLoading || loginLoading) {
    return <p style={{ textAlign: "center" }}>Завантаження профілю...</p>;
  }

  const avatarSrc = profile?.avatarUrl?.startsWith("http")
    ? formatGoogleDriveUrl(profile.avatarUrl)
    : "/images/default-avatar.png";

  return (
    <div style={{ maxWidth: 600, margin: "0 auto", fontFamily: "sans-serif" }}>
      <h2>Профіль</h2>

      <div style={{ display: "flex", alignItems: "center", marginBottom: 20 }}>
        <img
          src={avatarSrc}
          alt="avatar"
          style={{
            width: 100,
            height: 100,
            borderRadius: "50%",
            marginRight: 20,
            objectFit: "cover",
          }}
        />
        <div>
          <p>
            <strong>Ім’я користувача:</strong> {login || "Невідомо"}
          </p>
          <p>
            <strong>Підписники:</strong> {profile?.subscribersCount ?? 0}
          </p>
          <p>
            <strong>Підписки:</strong>{" "}
            {Array.isArray(profile?.subscriptions) ? profile.subscriptions.length : 0}
          </p>
        </div>
      </div>

      <div>
        <h3>Про себе:</h3>
        <p>{profile?.about?.trim() ? profile.about : "Опис відсутній."}</p>
      </div>

      <button
        onClick={() => (window.location.href = "/profile/settings")}
        style={{
          marginTop: 20,
          padding: "10px 20px",
          backgroundColor: "#2563eb",
          color: "white",
          border: "none",
          borderRadius: 6,
          cursor: "pointer",
        }}
      >
        Редагувати профіль
      </button>

      <div style={{ marginTop: 40 }}>
        <h3>Мої публікації</h3>
        {publicationsLoading ? (
          <p>Завантаження публікацій...</p>
        ) : publications.length === 0 ? (
          <p>Поки публікацій немає</p>
        ) : (
          <div style={{ display: "flex", flexWrap: "wrap", gap: 10 }}>
            {publications.map((pub: any) => {
              const normalizedUrl = formatGoogleDriveUrl(pub.coverUrl);
              console.log("Original:", pub.coverUrl, "Normalized:", normalizedUrl);

              return (
                <div
                  key={pub.publicationId}
                  style={{
                    width: 150,
                    height: 150,
                    borderRadius: 8,
                    position: "relative",
                    overflow: "hidden",
                  }}
                >
                  <img
                    src={normalizedUrl}
                    alt={pub.publicationName}
                    style={{
                      width: "100%",
                      height: "100%",
                      objectFit: "cover",
                      borderRadius: 8,
                    }}
                  />
                  <span
                    style={{
                      position: "absolute",
                      top: "5px",
                      right: "5px",
                      background: "rgba(0, 0, 0, 0.5)",
                      color: "white",
                      padding: "2px 6px",
                      borderRadius: "4px",
                      fontSize: "12px",
                    }}
                  >
                    {pub.type}
                  </span>
                </div>
              );
            })}
          </div>
        )}
      </div>
    </div>
  );
}
