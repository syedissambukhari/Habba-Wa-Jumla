import AdminHeader from "./components/AdminHeader.jsx";
import { Outlet } from "react-router-dom";
import AdminSidebar from "./components/AdminSidebar.jsx";

export const AdminDashboard = () => {

    return (
        <div className="flex">
                <div className="top-0 left-0">
                    <AdminSidebar />
                </div>
            <div className="flex flex-col w-full">
                    <div className="top-0 z-10">
                        <AdminHeader />
                    </div>
                <Outlet />
            </div>
        </div>
    );
};
