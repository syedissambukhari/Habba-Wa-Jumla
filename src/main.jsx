import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";

import { createBrowserRouter, RouterProvider } from "react-router-dom";
import OrderCheckout from "./homecomponents/OrderCheckout.jsx";
import Home from "./pages/Home.jsx";
import Wishlist from "./pages/Wishlist.jsx";
import TrackOrder from "./homecomponents/TrackOrder.jsx";
import CustomerSupport from "./homecomponents/CustomerSupport.jsx";
import CompareProduct from "./pages/CompareProduct.jsx";
import Breadcrumb from "./homecomponents/BreadCrumbs.jsx";
import DashboardBrowsingHistory from "./pages/DashboardBrowsingHistory.jsx";
import TrackOrderDetails from "./homecomponents/TrackOrderDetails.jsx";
import { UserDashboard } from "./pages/Dashboard/UserDashboard.jsx";
import CardsAndAddressesPage from "./pages/Dashboard/CardsAndAddressesPage.jsx";
import ShopPage from "./pages/ShopPage.jsx";
import FAQPage from "./pages/FAQPage.jsx";
import NotFoundPage from "./pages/NotFoundPage.jsx";
import ShoppingCard from "./pages/ShoppingCard.jsx";
import OrderSuccess from "./homecomponents/OrderSuccess.jsx";
import BlogList from "./homecomponents/BlogList.jsx";
import BlogDetailsPage from "./pages/BlogDetailsPage.jsx";
import { VendorDashboard } from "./pages/vendorDashboard/VendorDashboard.jsx";
import StoreAnalytics from "./pages/vendorDashboard/StoreAnalytics.jsx";

import { OrderList } from "./pages/vendorDashboard/Orders/OrderList.jsx";
import { OrderFilter } from "./pages/vendorDashboard/Orders/OrderFilter.jsx";

import ProductLists from "./pages/vendorDashboard/ProductLists.jsx";
import ProductCreation from "./pages/vendorDashboard/ProductCreation.jsx";

import Account from "./pages/vendorDashboard/Account/Account.jsx";
import General from "./pages/vendorDashboard/Account/General.jsx";
import Notifications from "./pages/vendorDashboard/Account/Notifications.jsx";
import Security from "./pages/vendorDashboard/Account/Security.jsx";
import Team from "./pages/vendorDashboard/Account/Team.jsx";
import Billing from "./pages/vendorDashboard/Account/Billing.jsx";
import CustomerList from "./pages/vendorDashboard/Customer/CustomerList.jsx";
import CustomerDetails from "./pages/vendorDashboard/Customer/CustomerDetails.jsx";
import VendorLogin from "./pages/vendorAuth/VendorLogin.jsx";
import VendorRegistration from "./pages/vendorAuth/VendorRegistration.jsx";
import VendorApprovalLoading from "./pages/vendorAuth/VendorApproval.jsx";
import ForgetPassword from "./pages/vendorAuth/ForgetPassword.jsx";
import ResetPassword from "./pages/vendorAuth/ResetPassword.jsx";
import Verification from "./pages/vendorAuth/Verification.jsx";
import {AdminDashboard} from "./pages/AdminDashboard/AdminDashboard.jsx";
import AdminAccount from "./pages/AdminDashboard/Account/AdminAccount.jsx";
import AdminGeneral from "./pages/AdminDashboard/Account/AdminGeneral.jsx";
import AdminTeam from "./pages/AdminDashboard/Account/AdminTeam.jsx";
import AdminNotifications from "./pages/AdminDashboard/Account/AdminNotifications.jsx";
import AdminSecurity from "./pages/AdminDashboard/Account/AdminSecurity.jsx";
import AdminBilling from "./pages/AdminDashboard/Account/AdminBilling.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/Wishlist",
        element: <Wishlist />,
      },
      {
        path: "/TrackOrder",
        element: <TrackOrder />,
      },
      {
        path: "/CustomerSupport",
        element: <CustomerSupport />,
      },
      {
        path: "/CompareProduct",
        element: <CompareProduct />,
      },
      {
        path: "/browsing-history",
        element: (
          <>
            <Breadcrumb />
            <DashboardBrowsingHistory />
          </>
        ),
      },
      {
        path: "/TrackOrderDetails",
        element: <TrackOrderDetails />,
      },
      {
        path: "/UserDashboard",
        element: <UserDashboard />,
      },
      {
        path: "/dashboard/billing",
        element: <CardsAndAddressesPage />,
      },
      {
        path: "/shop",
        element: (
          <>
            <Breadcrumb />
            <ShopPage />
          </>
        ),
      },
      {
        path: "/faq",
        element: <FAQPage />,
      },
      {
        path: "/not-found",
        element: <NotFoundPage />,
      },
      {
        path: "/shopping-card",
        element: (
          <>
            <Breadcrumb />
            <ShoppingCard />
          </>
        ),
      },
      {
        path: "/ordercheckout",
        element: <OrderCheckout />,
      },
      {
        path: "/ordersuccess",
        element: <OrderSuccess />,
      },
      {
        path: "/bloglist",
        element: <BlogList />,
      },
      {
        path: "/blogdetails",
        element: <BlogDetailsPage />,
      },
    ],
  },
  {
    path: "vendor",
    element: <VendorDashboard />,
    children: [
      {
        path: "account",
        element: <Account />,
        children: [
          {
            path: "general",
            element: <General />,
          },
          {
            path: "notifications",
            element: <Notifications />,
          },
          {
            path: "security",
            element: <Security />,
          },
          {
            path: "team",
            element: <Team />,
          },
          {
            path: "billing",
            element: <Billing />,
          },
        ],
      },
      {
        path: "productlists",
        element: <ProductLists />,
      },
      {
        path: "productcreates",
        element: <ProductCreation />,
      },
      {
        path: "store-analytics",
        element: <StoreAnalytics />,
      },
      {
        path: "OrderList",
        element: <OrderList />,
      },
      {
        path: "CustomerList",
        element: <CustomerList />,
      },
      {
        path: "CustomerDetails",
        element: <CustomerDetails />,
      },
      {
        path: "OrderFilter",
        element: <OrderFilter />,
      },
      {
        path: "vendorlogin",
        element: <VendorLogin />,
      },
      {
        path: "vendorsignup",
        element: <VendorRegistration />,
      },
      {
        path: "vendorapproval",
        element: <VendorApprovalLoading />,
      },
      {
        path: "forgetpassword",
        element: <ForgetPassword />,
      },
      {
        path: "resetpassword",
        element: <ResetPassword />,
      },
      {
        path: "verify",
        element: <Verification />,
      },
    ],
  },
  {
    path: "admin",
    element: <AdminDashboard />,
    children: [
      {
        path: "account",
        element: <AdminAccount />,
        children: [
          {
            path: "general",
            element: <AdminGeneral />,
          },
          {
            path: "notifications",
            element: <AdminNotifications />,
          },
          {
            path: "security",
            element: <AdminSecurity />,
          },
          {
            path: "team",
            element: <AdminTeam />,
          },
          {
            path: "billing",
            element: <AdminBilling />,
          }
        ],
      },
    ],
  }
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
