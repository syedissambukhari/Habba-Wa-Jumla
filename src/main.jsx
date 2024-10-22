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
import OrderDetail from "./homecomponents/UserDashborad/UserOrderDetail.jsx";
import OrderHistory from "./pages/vendorDashboard/Orders/OrderHistory.jsx";
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
import PostList from "./pages/vendorDashboard/Blog/PostList.jsx";
import PostDetails from "./pages/vendorDashboard/Blog/PostDetails.jsx";
import Signin from "./components/Forms/Signin.jsx";
import PostCreate from "./pages/vendorDashboard/Blog/PostCreate.jsx";
import { OrderStatus } from "./pages/vendorDashboard/Orders/OrderStatus.jsx";
import { InvoiceList } from "./pages/vendorDashboard/invoices/InvoiceList.jsx";
import { InvoiceDetail } from "./pages/vendorDashboard/invoices/InvoiceDetail.jsx";
import { InoviceFilter } from "./pages/vendorDashboard/invoices/InoviceFilter.jsx";
import { AdminDashboard } from "./pages/AdminDashboard/AdminDashboard.jsx";
import VendorsList from "./pages/AdminDashboard/components/VendorsList.jsx";
import VendorsApproval from "./pages/AdminDashboard/components/VendorsApproval.jsx";
import VendorsDetails from "./pages/AdminDashboard/components/VendorsDetails.jsx";
import VendorsEdit from "./pages/AdminDashboard/components/VendorsEdit.jsx";

// import AdminAccount from "./pages/AdminDashboard/Account/AdminAccount.jsx";
// import AdminGeneral from "./pages/AdminDashboard/Account/AdminGeneral.jsx";
// import AdminTeam from "./pages/AdminDashboard/Account/AdminTeam.jsx";
// import AdminNotifications from "./pages/AdminDashboard/Account/AdminNotifications.jsx";
// import AdminSecurity from "./pages/AdminDashboard/Account/AdminSecurity.jsx";
// import AdminBilling from "./pages/AdminDashboard/Account/AdminBilling.jsx";
// import Signin from "./components/Signin.jsx";

import AnalaticsBody from "./pages/AdminDashboard/Analytics/AnalaticsBody.jsx";
import CustomerListAdmin from "./pages/AdminDashboard/Customer/CustomerDetailsAdmin.jsx";
import CustomerDetailsAdmin from "./pages/AdminDashboard/Customer/CustomerDetailsAdmin.jsx";
import EditCustomerAdmin from "./pages/AdminDashboard/Customer/EditCustomerAdmin.jsx";
import FileManagerBody from "./pages/AdminDashboard/AdminFileManager/FileManagerBody.jsx";
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
      {
        path: "usersignup",
        element: <Signin />,
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
        path: "OrderHistory",
        element: <OrderHistory />,
      },

      {
        path: "OrderDetails",
        element: <OrderDetail />,
      },
      {
        path: "OrderStatus",
        element: <OrderStatus />,
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
        path: "PostList",
        element: <PostList />,
      },
      {
        path: "PostDetails",
        element: <PostDetails />,
      },
      {
        path: "PostCreate",
        element: <PostCreate />,
      },
      {
        path: "InvoiceList",
        element: <InvoiceList />,
      },
      {
        path: "InvoiceDetail",
        element: <InvoiceDetail />,
      },
      {
        path: "InoviceFilter",
        element: <InoviceFilter />,
      },
    ],
  },
  {
    path: "admin",
    element: <AdminDashboard />,
    children: [
      {
        path: "vendorslist",
        element: <VendorsList />,
      },

      {
        path: "vendorsapproval",
        element: <VendorsApproval />,
      },
      {
        path: "vendorsdetails",
        element: <VendorsDetails />,
      },
      {
        path: "vendorsedit",
        element: <VendorsEdit />,
      },

      {
        path: "AnalaticsBody",
        element: <AnalaticsBody />,
      },
      {
        path: "CustomerListAdmin",
        element: <CustomerListAdmin />,
      },
      {
        path: "CustomerDetailsAdmin",
        element: <CustomerDetailsAdmin />,
      },
      {
        path: "EditCustomerAdmin",
        element: <EditCustomerAdmin />,
      },
      { path: "FileManagerBody", element: <FileManagerBody /> },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
