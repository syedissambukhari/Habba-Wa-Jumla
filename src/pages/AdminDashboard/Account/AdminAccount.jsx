import AdminAccountHeader from "./AdminAccountHeader.jsx";
import {Outlet} from "react-router-dom";

function AdminAccount() {
    return (
        <div className="mt-8 px-8">
            <p className="text-[#111927] font-bold text-[33px] ">Account</p>
            <AdminAccountHeader />
            <div className="mt-6">
            <Outlet />
            </div>
        </div>
    );
}

export default AdminAccount;