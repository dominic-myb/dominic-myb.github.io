import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import "@/assets/styles/global.css";
import "@/assets/styles/variables.css";
import "@/assets/styles/responsive.css";
import "@/assets/styles/animations.css";

export default function App() {
  return (
    <div>
      <Routes>
        <Route path={"/"} element={<Home />}></Route>
      </Routes>
    </div>
  );
}
