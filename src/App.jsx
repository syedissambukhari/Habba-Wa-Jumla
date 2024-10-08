import "./App.css";
<<<<<<< HEAD
import Breadcrumb from "./components/BreadCrumbs";
import Header from "./components/MultiRangeSlider";
import HeroSection from "./components/HeroSection";
import ShopPage from "./pages/ShopPage";

=======
import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Shoping from "./pages/Shoping";
>>>>>>> f2168960beef802f9bb63e500f4bb1dd889b85fd
function App() {
  return (
    <>
      <div>
<<<<<<< HEAD
        <Header />
        <Breadcrumb/>
        {/* <HeroSection /> */}
        <ShopPage/>
=======
        <Routes>
          <Route path="/" element={<Home />} />
        </Routes>
        <Routes>
          <Route path="/shopping" element={<Shoping />} />
        </Routes>
>>>>>>> f2168960beef802f9bb63e500f4bb1dd889b85fd
      </div>
    </>
  );
}

export default App;
