import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Index from "./components/Index.jsx";
import Stats from "./components/Stats.jsx";
import logo from "../public/logo-no-background.svg";

const App = () => {
  return (
    <>
      <div className="w-full ps-10 pt-4 bg-[#252525] backdrop-blur-md pb-3">
        <img
          src={logo}
          alt="Shortifi logo"
          className="transition-all w-[24svw] md:w-[16svw] lg:w-[12svw]"
        />
      </div>
      <div className="text-xl font-bold w-full min-h-[90svh] flex items-start justify-center md:items-center  bg-[#252525] py-6">
        <div>
          <Router>
            <Routes>
              <Route path="/" element={<Index />} />
              <Route path="/stats" element={<Stats />} />
            </Routes>
          </Router>
        </div>
      </div>
    </>
  );
};

export default App;
