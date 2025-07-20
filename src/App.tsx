import { BrowserRouter, Routes, Route } from "react-router-dom";
import HomePage from "./pages/HomePage.tsx";
import RenderedResume from "./pages/RenderedResume.tsx";
import "./App.scss";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path={"/"} element={<HomePage />} />
        <Route path={"/resume"} element={<RenderedResume />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
