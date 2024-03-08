import { Navigate, Route, Routes } from "react-router-dom";
import { SpotifyProfile } from "./pages/SpotifyProfile";
import { SpotifyAppSecrets } from "./pages/SpotifyAppSecrets";

export const App = () => (
  <div className="w-full h-full flex justify-center items-center">
    <div className="w-2/3">
      <Routes>
        <Route path="/" element={<Navigate to="/profile" />} />
        <Route path="/profile" element={<SpotifyProfile />} />
        <Route path="/secrets" element={<SpotifyAppSecrets />} />
      </Routes>
    </div>
  </div>
);
