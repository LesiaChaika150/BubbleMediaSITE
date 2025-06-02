import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Outlet } from "react-router-dom";
import { PlusCircle, Star, Bookmark, Bell, User } from "lucide-react";

const MainLayout: React.FC = () => {
  const navigate = useNavigate();
  const [search, setSearch] = useState("");

  return (
    <div style={{ display: "flex", height: "100vh", fontFamily: "sans-serif" }}>
      {/* Статичне ліве меню */}
      <aside style={{
        width: "80px",
        background: "#3fd2e2",
        padding: "20px 0",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "space-between"
      }}>
        <div style={{ display: "flex", flexDirection: "column", alignItems: "center", gap: "24px" }}>
          <div onClick={() => navigate("/home")} style={{ cursor: "pointer" }}>
            <img
              src="/images/logo2.png"
              alt="logo"
              style={{ width: 40, height: 40, objectFit: "contain" }}
            />
          </div>
          <div onClick={() => navigate("/create")} style={{ cursor: "pointer" }}><PlusCircle size={32} color="white" /></div>
          <div onClick={() => navigate("/recommendations")} style={{ cursor: "pointer" }}><Star size={32} color="white" /></div>
          <div onClick={() => navigate("/saved")} style={{ cursor: "pointer" }}><Bookmark size={32} color="white" /></div>
          <div onClick={() => navigate("/subscriptions")} style={{ cursor: "pointer" }}><Bell size={32} color="white" /></div>
        </div>
        <div onClick={() => navigate("/profile")} style={{ cursor: "pointer" }}>
          <User size={32} color="white" />
        </div>
      </aside>

      {/* Основна частина з верхньою панеллю і Outlet */}
      <main style={{ flexGrow: 1, display: "flex", flexDirection: "column" }}>
        {/* Шапка сайту */}
        <header style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          padding: "10px 20px",
          background: "#c4f1f5"
        }}>
          <input
            type="text"
            placeholder="🔍︎ Пошук..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            style={{ padding: "10px", width: "300px" }}
          />
          <div
            onClick={() => navigate("/profile")}
            style={{
              cursor: "pointer",
              width: "40px",
              height: "40px",
              borderRadius: "50%",
              background: "#ddd",
              display: "flex",
              alignItems: "center",
              justifyContent: "center"
            }}
          >
            <User size={24} />
          </div>
        </header>

        {/* Контент сторінки */}
        <div style={{ padding: "20px", flexGrow: 1, overflowY: "auto" }}>
          <Outlet />
        </div>
      </main>
    </div>
  );
};

export default MainLayout;
