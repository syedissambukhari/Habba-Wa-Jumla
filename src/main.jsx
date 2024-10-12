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
<<<<<<< HEAD
import ProductLists from "./pages/vendorDashboard/ProductLists.jsx";
import ProductCreation from "./pages/vendorDashboard/ProductCreation.jsx";
=======
import Account from "./pages/vendorDashboard/Account/Account.jsx";
import General from "./pages/vendorDashboard/Account/General.jsx";
import Notifications from "./pages/vendorDashboard/Account/Notifications.jsx";
import Security from "./pages/vendorDashboard/Account/Security.jsx";
import Team from "./pages/vendorDashboard/Account/Team.jsx";

>>>>>>> 2594cb0cb5fd90e9fd834bf28bbc5aa4c77fbd56

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/",
<<<<<<< HEAD
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
        path: "productlists",
        element: <ProductLists />,
      },
      {
        path: "productcreate",
        element: <ProductCreation />,
      },
      {
        path: "store-analytics",
        element: <StoreAnalytics />,
      },
    ],
  },
=======
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
            }
        ],
    },
    {
        path: "vendor",
        element: <VendorDashboard />,
        children: [
            {
                path: "productlists",
                element: <VendorDashboard />,
            },
            {
                path: "store-analytics",
                element: <StoreAnalytics />
            },
            {
                path: "account",
                element: <Account />,
                children: [
                    {
                        path: "general",
                        element: <General />
                    },
                    {
                        path: "notifications",
                        element: <Notifications />
                    },
                    {
                        path: "security",
                        element: <Security />
                    },
                    {
                        path: "team",
                        element: <Team />
                    }
                ]
            }
        ],
    }
>>>>>>> 2594cb0cb5fd90e9fd834bf28bbc5aa4c77fbd56
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
