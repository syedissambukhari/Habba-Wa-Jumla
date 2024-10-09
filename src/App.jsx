import "./App.css";
import Breadcrumb from "./homecomponents/BreadCrumbs";
import Header from "./homecomponents/MultiRangeSlider";
import ShopPage from "./pages/ShopPage";

import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Shoping from "./pages/Shoping";
import Footer from "./homecomponents/Footer";
import ShoppingCard from "./pages/ShoppingCard";
function App() {
  return (
    <>
      <div>
        <Header />
        {/* <Breadcrumb/> */}
        {/* <HeroSection /> */}
        {/* <ShopPage/> */}
        <Routes>
          <Route path="/" element={<Home />} />
        </Routes>
        <Routes>
          <Route path="/shop" element={<><Breadcrumb/><ShopPage/></>} />
        </Routes>
        <Routes>
          <Route path="/shopping-card" element={<><Breadcrumb/><ShoppingCard/></>} />
        </Routes>
        <Footer/>
        </div>
    </>
  );
}

export default App;
