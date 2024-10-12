import AccountHeader from "./AccountHeader.jsx";
import {Outlet} from "react-router-dom";

function Account() {
    return (
        <div className="mt-8 px-8">
            <p className="text-[#111927] font-bold text-[33px] ">Account</p>
            <AccountHeader />
            <div className="mt-6">
            <Outlet />
            </div>
        </div>
    );
}

export default Account;