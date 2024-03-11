import { Navigate, Route, Routes } from "react-router-dom";
import { ProfilePage } from "./pages/ProfilePage";
import { SecretPage } from "./pages/SecretsPage";
import "./App.css";
import QueryPage from "./pages/query/QueryPage";
import { PlaylistsPage } from "./pages/PlaylistsPage";

const App = () => (
  <div className="w-screen h-screen flex flex-col items-center gap-4 justify-center bg-black">
    <Routes>
      <Route path="/" element={<Navigate to="/query" />} />
      <Route path="/profile" element={<ProfilePage />} />
      <Route path="/playlists" element={<PlaylistsPage />} />
      <Route path="/query" element={<QueryPage />} />
      <Route path="/secrets" element={<SecretPage />} />
    </Routes>
  </div>
);

export default App;
