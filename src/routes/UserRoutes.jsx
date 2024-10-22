import Home from "../pages/Home.jsx";
import Signin from "../components/Forms/Signin.jsx";
import Breadcrumb from "../homecomponents/BreadCrumbs.jsx";
import Forget from "../components/Forms/Forget.jsx";
import Reset from "../components/Forms/Reset.jsx";
import EmailVerification from "../components/Forms/EmailVerification.jsx";
import Wishlist from "../pages/Wishlist.jsx";
import TrackOrder from "../homecomponents/TrackOrder.jsx";
import CustomerSupport from "../homecomponents/CustomerSupport.jsx";
import CompareProduct from "../pages/CompareProduct.jsx";
import DashboardBrowsingHistory from "../pages/DashboardBrowsingHistory.jsx";
import TrackOrderDetails from "../homecomponents/TrackOrderDetails.jsx";
import { UserDashboard } from "../pages/Dashboard/UserDashboard.jsx";
import CardsAndAddressesPage from "../pages/Dashboard/CardsAndAddressesPage.jsx";
import ShopPage from "../pages/ShopPage.jsx";
import FAQPage from "../pages/FAQPage.jsx";
import NotFoundPage from "../pages/NotFoundPage.jsx";
import ShoppingCard from "../pages/ShoppingCard.jsx";
import OrderCheckout from "../homecomponents/OrderCheckout.jsx";
import OrderSuccess from "../homecomponents/OrderSuccess.jsx";
import BlogList from "../homecomponents/BlogList.jsx";
import BlogDetailsPage from "../pages/BlogDetailsPage.jsx";
import UserOrderDetail from "../homecomponents/UserDashborad/UserOrderDetail.jsx";
import UserOrderHistory from "../homecomponents/UserDashborad/UserOrderHistory.jsx";

const UserRoutes = [
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
//    Routes fot the UserDashboard present in the Homecomponent ----> UserDashboard
  {
    path: "/UserOrderDetails",
    element: <UserOrderDetail />,
  },
  {
    path: "/UserOrderHistory",
    element: <UserOrderHistory />,
  },
];

export default UserRoutes;
