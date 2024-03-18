import { Route, Routes } from "react-router-dom";
import "./App.css";
import QueryPage from "./pages/query/QueryPage";
import AuthGate from "./spotify/components/AuthGate";
import PlaygroundPage from "./pages/PlaygroundPage";
import QueryPageV2 from "./pages/query-v2/QueryPage";

const App = () => (
  <div className="w-screen h-screen flex flex-col items-center gap-4 justify-center bg-black">
    <AuthGate>
      <Routes>
        <Route path="/" element={<QueryPage />} />
        <Route path="/playground" element={<PlaygroundPage />} />
        <Route path="/v2" element={<QueryPageV2 />} />
      </Routes>
    </AuthGate>
  </div>
);

export default App;
