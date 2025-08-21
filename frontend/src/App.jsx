import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import "@/assets/styles/global.css";
import "@/assets/styles/responsive.css";

const App = () => (
  <Routes>
    <Route path={"/"} element={<Home />}></Route>
  </Routes>
);

export default App;
