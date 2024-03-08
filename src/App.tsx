import { Navigate, Route, Routes } from "react-router-dom";
import { SpotifyProfile } from "./pages/SpotifyProfile";
import { SpotifyAppSecrets } from "./pages/SpotifyAppSecrets";
import "./App.css";

export const App = () => (
  <div className="w-screen h-screen flex items-center justify-center bg-black">
    <div className="w-5/6 max-w-4xl max-h-5/6 p-4 rounded-xl bg-dark-grey">
      <Routes>
        <Route path="/" element={<Navigate to="/profile" />} />
        <Route path="/profile" element={<SpotifyProfile />} />
        <Route path="/secrets" element={<SpotifyAppSecrets />} />
      </Routes>
    </div>
  </div>
);
