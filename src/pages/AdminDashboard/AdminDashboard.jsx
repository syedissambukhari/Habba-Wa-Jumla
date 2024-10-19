import AdminHeader from "./components/AdminHeader.jsx";
import { Outlet } from "react-router-dom";
import AdminSidebar from "./components/AdminSidebar.jsx";
import { useLocation } from "react-router-dom";
export const AdminDashboard = () => {
  const location = useLocation();

  // Define routes where Sidebar and Header should NOT appear
  const authRoutes = [
    "/admin/adminlogin",
    "/admin/adminpasswordforget",
    "/admin/adminpasswordreset",
    "/admin/adminverify",
  ]; // Add other auth-related routes as needed

  // Check if the current route is one of the auth routes
  const isAuthRoute = authRoutes.includes(location.pathname);

  return (
    <div className="flex">
      {!isAuthRoute && (
        <div className="top-0 left-0">
          <AdminSidebar />
        </div>
      )}
      <div className={`flex flex-col w-full ${!isAuthRoute ? "" : "w-full"}`}>
        {!isAuthRoute && (
          <div className="top-0 z-10">
            <AdminHeader />
          </div>
        )}
        <Outlet />
      </div>
    </div>
  );
};
