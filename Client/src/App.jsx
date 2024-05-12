import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Index from "./components/Index.jsx";
import Stats from "./components/Stats.jsx";

const App = () => {
  return (
    <div className="text-xl font-bold w-full min-h-screen flex items-start justify-center md:items-center  bg-[#252525] relative pb-8">
      <Router>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/stats" element={<Stats />} />
        </Routes>
      </Router>
    </div>
  );
};

export default App;
