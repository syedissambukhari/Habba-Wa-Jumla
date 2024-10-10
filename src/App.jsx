import "./App.css";
import Breadcrumb from "./homecomponents/BreadCrumbs";
import Header from "./homecomponents/Header";
import ShopPage from "./pages/ShopPage";

import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Shoping from "./pages/Shoping";
import Footer from "./homecomponents/Footer";
import ShoppingCard from "./pages/ShoppingCard";
import Wishlist from "./pages/Wishlist";
import TrackOrder from "./homecomponents/TrackOrder";
import CustomerSupport from "./homecomponents/CustomerSupport.jsx";
import CompareProduct from "./pages/CompareProduct";
import FAQPage from "./pages/FAQPage.jsx";
import DashboardBrowsingHistory from "./pages/DashboardBrowsingHistory.jsx";
import { UserDashboard } from "./pages/Dashboard/UserDashboard.jsx";
<<<<<<< HEAD
// import { UserDashboard } from "./pages/Dashboard/UserDashboard.jsx";
=======
import TrackOrderDetails from "./homecomponents/TrackOrderDetails.jsx";
import CardsAndAddressesPage from "./pages/Dashboard/CardsAndAddressesPage.jsx";
import NotFoundPage from "./pages/NotFoundPage.jsx";
>>>>>>> 79bb7d5d2edd959144d1ab6507ba4776cfb5cbda
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
          <Route path="/CustomerSupport" element={<CustomerSupport />} /> {/* Fixed typo here */}
          <Route path="/CompareProduct" element={<CompareProduct/>} />
          <Route path="/browsing-history" element={<><Breadcrumb/><DashboardBrowsingHistory/></>} />
<<<<<<< HEAD

       
=======
          <Route path="/TrackOrderDetails" element={<TrackOrderDetails/>} />

>>>>>>> 79bb7d5d2edd959144d1ab6507ba4776cfb5cbda
        </Routes>

        <Routes>
        <Route path="/UserDashboard" element={<UserDashboard/>} />
          <Route path="/dashboard/billing" element={<CardsAndAddressesPage /> } />
        </Routes>
        <Routes>
          
          <Route path="/shop" element={<><Breadcrumb/><ShopPage/></>} />
          <Route path="/faq" element={<FAQPage />} />
          <Route path="/not-found" element={<NotFoundPage />} />
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
