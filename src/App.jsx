import "./App.css";
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

function App() {
  return (
    <>
      <div>
        <Header />

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
          <Route path="*" element={<NotFoundPage />} /> {/* Catch-all 404 route */}
        </Routes>

        <Footer />
      </div>
    </>
  );
}

export default App;
  