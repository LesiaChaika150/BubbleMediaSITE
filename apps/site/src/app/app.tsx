import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import Recommendations from "./pages/Recommendations";
import Create from "./pages/Create";
import Saved from "./pages/Saved";
import Subscriptions from "./pages/Subscriptions";
import Profile from "./pages/Profile";
import ProfileSettings from "./pages/ProfileSettings";
import Authentication from "./pages/Authentication";
import MainLayout from "./components/MainLayout";
import { JSX } from "react";

// Компонент захищеного маршруту
const PrivateRoute = ({ element }: { element: JSX.Element }) => {
  const isAuthenticated = !!localStorage.getItem("authenticatedUser");
  return isAuthenticated ? element : <Navigate to="/" replace />;
};

export function App() {
  return (
    <BrowserRouter>
      <Routes>
        {/* Сторінка авторизації без лейаута */}
        <Route path="/" element={<Authentication />} />

        {/* Усі інші сторінки з MainLayout */}
        <Route element={<MainLayout />}>
          <Route path="/demo" element={<PrivateRoute element={<Recommendations />} />} />
          <Route path="/home" element={<PrivateRoute element={<Recommendations />} />} />
          <Route path="/recommendations" element={<PrivateRoute element={<Recommendations />} />} />
          <Route path="/create" element={<PrivateRoute element={<Create />} />} />
          <Route path="/saved" element={<PrivateRoute element={<Saved />} />} />
          <Route path="/subscriptions" element={<PrivateRoute element={<Subscriptions />} />} />
          <Route path="/profile" element={<PrivateRoute element={<Profile />} />} />
          <Route path="/profile/settings" element={<PrivateRoute element={<ProfileSettings />} />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
