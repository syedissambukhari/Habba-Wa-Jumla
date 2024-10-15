import "./App.css";
import Header from "./homecomponents/Header.jsx";
import HeroSection from "./homecomponents/HeroSection";
import Reset from "./components/Forms/Reset";
import Forget from "./components/Forms/Forget";
import EmailVerification from "./components/Forms/EmailVerification";
import Breadcrumb from "./homecomponents/BreadCrumbs";
import BreadCrumb from "./homecomponents/BreadCrumb";

// import Header from "./homecomponents/Header";
import ShopPage from "./pages/ShopPage";
import { Route, Router, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Footer from "./homecomponents/Footer";
import Signin from "./components/Forms/Signin.jsx";
import ShoppingCard from "./pages/ShoppingCard";
import Wishlist from "./pages/Wishlist";
import TrackOrder from "./homecomponents/TrackOrder";
import CustomerSupport from "./homecomponents/CustomerSupport.jsx";
import CompareProduct from "./pages/CompareProduct";
import FAQPage from "./pages/FAQPage.jsx";
import DashboardBrowsingHistory from "./pages/DashboardBrowsingHistory.jsx";
import { UserDashboard } from "./pages/Dashboard/UserDashboard.jsx";
import TrackOrderDetails from "./homecomponents/TrackOrderDetails.jsx";
import CardsAndAddressesPage from "./pages/Dashboard/CardsAndAddressesPage.jsx";
import NotFoundPage from "./pages/NotFoundPage.jsx";
import OrderCheckout from "./pages/Checkoutpage.jsx";
import OrderSuccess from "./pages/OrderSuccessful.jsx";
import BlogList from "./homecomponents/BlogList.jsx";
import Header from "./homecomponents/Header";
import {Outlet} from "react-router-dom";
import Footer from "./homecomponents/Footer";
function App() {
  return (
    <>
      <div>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/Wishlist" element={<Wishlist />} />
          <Route path="/TrackOrder" element={<TrackOrder />} />
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
          <Route path="/User Account/sign In" element={<Signin />}></Route>
          <Route path="/User Account/sign Up" element={<Signin />}></Route>
          <Route
            path="/User Account/Sign In/Forget Password"
            element={
              <>
                <Breadcrumb />
                <Forget />
              </>
            }
          ></Route>
          <Route
            path="/User Account/Sign Up/Email Verification"
            element={
              <>
                <Breadcrumb />
                <EmailVerification />
              </>
            }
          ></Route>
          <Route
            path="/User Account/Sign In/Forget Password/Reset Password"
            element={
              <>
                <Breadcrumb />
                <Reset />
              </>
            }
          ></Route>
        </Routes>
          <Outlet />
        <Footer />
      </div>
    </>
  );
}

export default App;
