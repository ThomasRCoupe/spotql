import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./index.css";
import { SpotifyAppSecrets } from "./pages/SpotifyAppSecrets";
import { AppContainer } from "./components/AppContainer";
import { SpotifyProfile } from "./pages/SpotifyProfile";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <BrowserRouter>
    <AppContainer>
      <Routes>
        <Route path="/" element={<SpotifyProfile />} />
        <Route path="/secrets" element={<SpotifyAppSecrets />} />
      </Routes>
    </AppContainer>
  </BrowserRouter>
);
