import React from "react";
import Sidebar from "./components/Sidebar";
import VendorHeader from "./components/VendorHeader";
import { Outlet, useLocation } from "react-router-dom";

export const VendorDashboard = () => {
  const location = useLocation();

  // Define routes where Sidebar and Header should NOT appear
  const authRoutes = [
    "/vendor/vendorlogin",
    "/vendor/vendorsignup",
    "/vendor/vendorapproval",
    "/vendor/forgetpassword",
    "/vendor/resetpassword",
    "/vendor/verify",
  ]; // Add other auth-related routes as needed

  // Check if the current route is one of the auth routes
  const isAuthRoute = authRoutes.includes(location.pathname);

  return (
    <div className="flex">
      {/* Conditionally render Sidebar */}
      {!isAuthRoute && (
        <div className="top-0 left-0">
          <Sidebar />
        </div>
      )}

      {/* Main Content */}
      <div className={`flex flex-col w-full ${!isAuthRoute ? "" : "w-full"}`}>
        {/* Conditionally render Header */}
        {!isAuthRoute && (
          <div className="top-0 z-10">
            <VendorHeader />
          </div>
        )}

        {/* Main Content Area */}
        <Outlet />
      </div>
    </div>
  );
};
