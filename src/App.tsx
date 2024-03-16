import { Route, Routes } from "react-router-dom";
import "./App.css";
import QueryPage from "./pages/query/QueryPage";
import AuthGate from "./spotify/components/AuthGate";
import PlaygroundPage from "./pages/PlaygroundPage";

const App = () => (
  <div className="w-screen h-screen flex flex-col items-center gap-4 justify-center bg-black">
    <AuthGate>
      <Routes>
        <Route path="/" element={<QueryPage />} />
        <Route path="/playground" element={<PlaygroundPage />} />
      </Routes>
    </AuthGate>
  </div>
);

export default App;
