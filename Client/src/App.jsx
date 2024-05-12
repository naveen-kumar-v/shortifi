import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Index from "./components/Index.jsx";
import Stats from "./components/Stats.jsx";
import logo from "../public/logo-no-background.svg";

const App = () => {
  return (
    <div className="text-xl font-bold w-full h-[100svh] flex items-start justify-center md:items-center  bg-[#252525] relative">
      <img
        src={logo}
        alt="Shortifi logo"
        className="transition-all w-[20svw] md:w-[16svw] lg:w-[12svw] h-fit absolute top-4 left-4"
      />
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
