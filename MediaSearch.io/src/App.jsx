import { Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import HomePage from "./pages/HomePage";
import CollectionPage from "./pages/CollectionPages";

const App = () => {
  return (
    <div className="min-h-screen bg-[#030405] selection:bg-emerald-500/30 selection:text-emerald-500">
      <Navbar />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/collection" element={<CollectionPage />} />
      </Routes>
    </div>
  );
};

export default App;
