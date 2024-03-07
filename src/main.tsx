import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./index.css";
import { SpotifyAppSecrets } from "./pages/SpotifyAppSecrets";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<SpotifyAppSecrets />} />
    </Routes>
  </BrowserRouter>
);
