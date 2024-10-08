import "./App.css";
import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Shoping from "./pages/Shoping";
function App() {
  return (
    <>
      <div>
        <Routes>
          <Route path="/" element={<Home />} />
        </Routes>
        <Routes>
          <Route path="/shopping" element={<Shoping />} />
        </Routes>
      </div>
    </>
  );
}

export default App;
