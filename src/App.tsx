import { Navigate, Route, Routes } from "react-router-dom";
import { ProfilePage } from "./pages/ProfilePage";
import { SecretPage } from "./pages/SecretsPage";
import "./App.css";
import { QueryPage } from "./pages/QueryPage";

export const App = () => (
  <div className="w-screen h-screen flex items-center justify-center bg-black">
    <div className="w-5/6 max-w-4xl max-h-5/6 p-4 rounded-xl bg-dark-grey">
      <Routes>
        <Route path="/" element={<Navigate to="/query" />} />
        <Route path="/profile" element={<ProfilePage />} />
        <Route path="/query" element={<QueryPage />} />
        <Route path="/secrets" element={<SecretPage />} />
      </Routes>
    </div>
  </div>
);
