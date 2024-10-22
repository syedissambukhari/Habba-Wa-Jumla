import {createBrowserRouter} from "react-router-dom";
import App from "../App.jsx";
import UserRoutes from "./UserRoutes.jsx";
import {VendorDashboard} from "../pages/vendorDashboard/VendorDashboard.jsx";
import VendorRoutes from "./VendorRoutes.jsx";
import {AdminDashboard} from "../pages/AdminDashboard/AdminDashboard.jsx";
import AdminRoutes from "./AdminRoutes.jsx";

const router = createBrowserRouter([
    {
        path: "/",
        element: <App />,
        children: UserRoutes,
    },
    {
        path: "vendor",
        element: <VendorDashboard />,
        children: VendorRoutes,
    },
    {
        path: "admin",
        element: <AdminDashboard />,
        children: AdminRoutes,
    },
]);

export default router;