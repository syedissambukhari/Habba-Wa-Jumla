import "./App.css";
<<<<<<< HEAD
import Breadcrumb from "./homecomponents/BreadCrumbs";
import Header from "./homecomponents/Header";
import ShopPage from "./pages/ShopPage";
import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Footer from "./homecomponents/Footer";
import NotFoundPage from "./pages/NotFoundPage.jsx";
import ShoppingCard from "./pages/ShoppingCard";
import Wishlist from "./pages/Wishlist";
import TrackOrder from "./homecomponents/TrackOrder";
import CustomerSupport from "./homecomponents/CustomerSupport.jsx";
import CompareProduct from "./pages/CompareProduct";
import FAQPage from "./pages/FAQPage.jsx";
import DashboardBrowsingHistory from "./pages/DashboardBrowsingHistory.jsx";
import CardsAndAddressesPage from "./pages/Dashboard/CardsAndAddressesPage.jsx";
import { UserDashboard } from "./pages/Dashboard/UserDashboard.jsx";
import DashboardSettings from "./pages/DashboardSettings.jsx";
import TrackOrderDetails from "./homecomponents/TrackOrderDetails.jsx";
import BulkProducts from "./pages/BulkProducts.jsx";

=======
import Header from "./components/Header";
import HeroSection from "./components/HeroSection";
import Signin from "./components/Signin";  
import Reset from "./components/reset/Reset";  
import Forget from "./components/Forget"; 
import EmailVerification from "./components/EmailVerification"; 
>>>>>>> 3e12ea98d4a58a5e1da78728f3a692bf21f85f1e
function App() {
  return (
    <>
      <div>
        <Header />
<<<<<<< HEAD

        {/* Consolidated all routes into a single block */}
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/Wishlist" element={<Wishlist />} />
          <Route path="/TrackOrder" element={<TrackOrder />} />
          <Route path="/TrackOrderDetails" element={<TrackOrderDetails />} />
          <Route path="/CustomerSupport" element={<CustomerSupport />} />
          <Route path="/CompareProduct" element={<CompareProduct />} />
          <Route path="/browsing-history" element={<><Breadcrumb /><DashboardBrowsingHistory /></>} />
          <Route path="/dashboard-settings" element={<><Breadcrumb /><DashboardSettings /></>} />
          <Route path="/UserDashboard" element={<UserDashboard />} />
          <Route path="/dashboard/billing" element={<CardsAndAddressesPage />} />
          <Route path="/shop" element={<><Breadcrumb /><ShopPage /></>} />
          <Route path="/faq" element={<FAQPage />} />
          <Route path="/shopping-card" element={<><Breadcrumb /><ShoppingCard /></>} />
          <Route path="/bulk-product" element={<><Breadcrumb /><BulkProducts /></>} />
          <Route path="*" element={<NotFoundPage />} /> {/* Catch-all 404 route */}
        </Routes>

        <Footer />
=======
        <HeroSection />
        <Signin/>
        <Reset/>
        <Forget/>
        <EmailVerification/>
>>>>>>> 3e12ea98d4a58a5e1da78728f3a692bf21f85f1e
      </div>
    </>
  );
}

export default App;
