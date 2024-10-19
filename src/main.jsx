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
import { OrderDetail } from "./pages/vendorDashboard/Orders/OrderDetail.jsx";
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
import AdminStoreAnalytics from "./pages/AdminDashboard/AdminStoreAnalytics.jsx";
import AdminPostCreate from "./pages/AdminDashboard/Blog/AdminPostCreate.jsx";
import AdminPostDetails from "./pages/AdminDashboard/Blog/AdminPostDetails.jsx";
import AdminPostList from "./pages/AdminDashboard/Blog/AdminPostList.jsx";
import AnalaticsBody from "./pages/AdminDashboard/Analytics/AnalaticsBody.jsx";
import CustomerListAdmin from "./pages/AdminDashboard/Customer/CustomerDetailsAdmin.jsx";
import CustomerDetailsAdmin from "./pages/AdminDashboard/Customer/CustomerDetailsAdmin.jsx";
import EditCustomerAdmin from "./pages/AdminDashboard/Customer/EditCustomerAdmin.jsx";
import { VendorCheckout } from "./pages/vendorDashboard/vendorCheckout.jsx";
import { AdminCheckout } from "./pages/AdminDashboard/adminCheckout.jsx";
import AdminBilling from "./pages/AdminDashboard/Account/AdminBilling.jsx";
import AdminAccount from "./pages/AdminDashboard/Account/AdminAccount.jsx";
import AdminGeneral from "./pages/AdminDashboard/Account/AdminGeneral.jsx";
import AdminNotifications from "./pages/AdminDashboard/Account/AdminNotifications.jsx";
import AdminSecurity from "./pages/AdminDashboard/Account/AdminSecurity.jsx";
import AdminTeam from "./pages/AdminDashboard/Account/AdminTeam.jsx";
import AdminProductLists from "./pages/AdminDashboard/Product/AdminProductLists.jsx";
import AdminProductCreation from "./pages/AdminDashboard/Product/AdminProductCreation.jsx";
import AdminLogin from "./pages/AdminDashboard/components/adminauth/AdminLogin.jsx";
import AdminForgetPassword from "./pages/AdminDashboard/components/adminauth/AdminForgetPassword.jsx";
import AdminResetPassword from "./pages/AdminDashboard/components/adminauth/AdminResetPassword.jsx";
import AdminVerification from "./pages/AdminDashboard/components/adminauth/AdminVerification.jsx";
import VendorLogin from "./pages/vendorAuth/VendorLogin.jsx";
import VendorRegistration from "./pages/vendorAuth/VendorRegistration.jsx";
import ForgetPassword from "./pages/vendorAuth/ForgetPassword.jsx";
import ResetPassword from "./pages/vendorAuth/ResetPassword.jsx";
import VendorApproval from "./pages/vendorAuth/VendorApproval.jsx";
import Verification from "./pages/vendorAuth/verification.jsx";
import OrderListAdmin from "./pages/AdminDashboard/Orders/OrderListAdmin.jsx";
import OrderFilterAdmin from "./pages/AdminDashboard/Orders/OrderFilterAdmin.jsx";
import OrderDetailAdmin from "./pages/AdminDashboard/Orders/OrderDetailAdmin.jsx";
import OrderStatusAdmin from "./pages/AdminDashboard/Orders/OrderStatusAdmin.jsx";
import AdminCalendar from "./pages/AdminDashboard/AdminCalendar/AdminCalendar.jsx";
import PopUp from "./pages/AdminDashboard/AdminCalendar/CalendarPopUp.jsx";
import Calendar from './pages/vendorDashboard/VendorCalendar/Calendar.jsx'
import NewEventPopUp from "./pages/vendorDashboard/VendorCalendar/NewEventPopUp.jsx";
import Forget from "./components/Forms/Forget.jsx";
import Reset from "./components/Forms/Reset.jsx";
import EmailVerification from "./components/Forms/EmailVerification.jsx";

import { AdminInoviceList } from "./pages/AdminDashboard/Admininvoice/AdminInoviceList.jsx";
import { AdminInoviceDetail } from "./pages/AdminDashboard/Admininvoice/AdminInoviceDetail.jsx";
import { AdminInoviceFilter } from "./pages/AdminDashboard/Admininvoice/AdminInoviceFilter.jsx";
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
        path: "/User Account/sign In",
        element: <Signin />,
      },
      {
        path: "/User Account/sign In/Forget Password",
        element: (
          <>
            <Breadcrumb />
            <Forget />
          </>
        ),
      },
      {
        path: "/User Account/sign In/Forget Password/Reset Password",
        element: (
          <>
            <Breadcrumb />
            <Reset />
          </>
        ),
      },
      {
        path: "/User Account/Sign Up/Email Verification",
        element: (
          <>
            <Breadcrumb />
            <EmailVerification />
          </>
        ),
      },
      {
        path: "/User Account/Sign Up",
        element: (
          <>
            {/* <Breadcrumb /> */}
            <Signin />
            {/* <EmailVerification /> */}
          </>
        ),
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
        path: "OrderDetail",
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
        path: "Calendar",
        element: <Calendar />,
      },
      {
        path: "Calendar/new-event",
        element: <NewEventPopUp />,
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
      {
        path: "checkout",
        element: <VendorCheckout />,
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
        element: <VendorApproval />,
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
          },
        ],
      },
      {
        path: "productlists",
        element: <AdminProductLists />,
      },
      {
        path: "productcreates",
        element: <AdminProductCreation />,
      },
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
        path: "AdminStore-analytics",
        element: <AdminStoreAnalytics/>
      },
      
        //admin blog
        {
        path: "AdminPost-create",
        element: <AdminPostCreate/>,
        },
        {
          path: "AdminPost-details",
          element: <AdminPostDetails/>,
          },
          {
            path: "AdminPost-list",
            element: <AdminPostList/>
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
        path: "Calendar",
        element: <AdminCalendar />,
      },
      {
        path: "Calendar/new-event",
        element: <PopUp />,
      },
      {
        path: "EditCustomerAdmin",
        element: <EditCustomerAdmin />,
      },
      {
        path: "checkout",
        element: <AdminCheckout />,
      },
      {
        path: "adminlogin",
        element: <AdminLogin />,
      },
      {
        path: "adminpasswordforget",
        element: <AdminForgetPassword />,
      },
      {
        path: "adminpasswordreset",
        element: <AdminResetPassword />,
      },
      {
        path: "adminverify",
        element: <AdminVerification />,
      },
      {
        path: "orderList",
        element: <OrderListAdmin />,
      },
      {
        path: "orderFilter",
        element: <OrderFilterAdmin />,
      },
      {
        path: "orderDetail",
        element: <OrderDetailAdmin />,
      },
      {
        path: "orderStatus",
        element: <OrderStatusAdmin />,
      },
      {
        path: "admininovicelist",
        element: <AdminInoviceList />,
      },
      {
        path: "admininovicedetail",
        element: <AdminInoviceDetail />,
      },
      {
        path: "admininovicefilter",
        element: <AdminInoviceFilter />,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
