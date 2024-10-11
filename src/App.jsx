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
<<<<<<< HEAD
import CardsAndAddressesPage from "./pages/Dashboard/CardsAndAddressesPage.jsx";
import { UserDashboard } from "./pages/Dashboard/UserDashboard.jsx";
import DashboardSettings from "./pages/DashboardSettings.jsx";
import TrackOrderDetails from "./homecomponents/TrackOrderDetails.jsx";
=======
import { UserDashboard } from "./pages/Dashboard/UserDashboard.jsx";
import TrackOrderDetails from "./homecomponents/TrackOrderDetails.jsx";
import CardsAndAddressesPage from "./pages/Dashboard/CardsAndAddressesPage.jsx";
import NotFoundPage from "./pages/NotFoundPage.jsx";
import OrderCheckout from "./pages/Checkoutpage.jsx";
import OrderSuccess from "./pages/OrderSuccessful.jsx";
import BlogList from "./homecomponents/BlogList.jsx";
>>>>>>> bbd0d8c016e1cae00390987bffbc5e1ebd15f88b

function App() {
  return (
    <>
      <div>
        <Header />
<<<<<<< HEAD

        {/* Consolidated all routes into a single block */}
=======
>>>>>>> bbd0d8c016e1cae00390987bffbc5e1ebd15f88b
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/Wishlist" element={<Wishlist />} />
          <Route path="/TrackOrder" element={<TrackOrder />} />
<<<<<<< HEAD
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

=======
          <Route path="/CustomerSupport" element={<CustomerSupport />} />
          <Route path="/CompareProduct" element={<CompareProduct />} />
          <Route
            path="/browsing-history"
            element={
              <>
                <Breadcrumb />
                <DashboardBrowsingHistory />
              </>
            }
          />
          <Route path="/TrackOrderDetails" element={<TrackOrderDetails />} />
          <Route path="/UserDashboard" element={<UserDashboard />} />
          <Route
            path="/dashboard/billing"
            element={<CardsAndAddressesPage />}
          />
          <Route
            path="/shop"
            element={
              <>
                <Breadcrumb />
                <ShopPage />
              </>
            }
          />
          <Route path="/faq" element={<FAQPage />} />
          <Route path="/not-found" element={<NotFoundPage />} />
          <Route
            path="/shopping-card"
            element={
              <>
                <Breadcrumb />
                <ShoppingCard />
              </>
            }
          />
          <Route path="/ordercheckout" element={<OrderCheckout />}></Route>
          <Route path="/ordersuccess" element={<OrderSuccess />}></Route>
          <Route path="/bloglist" element={<BlogList />}></Route>
        </Routes>
>>>>>>> bbd0d8c016e1cae00390987bffbc5e1ebd15f88b
        <Footer />
      </div>
    </>
  );
}

export default App;
  