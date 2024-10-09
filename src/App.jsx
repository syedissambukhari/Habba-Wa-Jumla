import "./App.css";
import Breadcrumb from "./homecomponents/BreadCrumbs";
import Header from "./homecomponents/MultiRangeSlider";
import ShopPage from "./pages/ShopPage";

import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Shoping from "./pages/Shoping";
import Footer from "./homecomponents/Footer";
import FAQPage from "./pages/FAQPage";
function App() {
  return (
    <>
      <div>
        <Header />
         {/*<Breadcrumb/>*/}
        {/* <HeroSection /> */}
        {/* <ShopPage/> */}
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/shop" element={<><Breadcrumb/><ShopPage/></>} />
          <Route path="/faq" element={<FAQPage />} />
        </Routes>
        <Footer/>
        </div>
    </>
  );
}

export default App;
