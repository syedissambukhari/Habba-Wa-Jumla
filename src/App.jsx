import "./App.css";
import Breadcrumb from "./homecomponents/BreadCrumbs";
import Header from "./homecomponents/Header";
import ShopPage from "./pages/ShopPage";

import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Shoping from "./pages/Shoping";
import Footer from "./homecomponents/Footer";
import Wishlist from "./pages/Wishlist";
import TrackOrder from "./homecomponents/TrackOrder";
import CompareProduct from "./pages/CompareProduct";
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
          <Route path="/Wishlist" element={<Wishlist/>} />
          <Route path="/TrackOrder" element={<TrackOrder/>} />
        </Routes>
        <Routes>
       

          <Route path="/shop" element={<><Breadcrumb/><ShopPage/></>} />
        </Routes>
        <Footer/>
        </div>
    </>
  );
}

export default App;
