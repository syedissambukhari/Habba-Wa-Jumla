import {Link} from "react-router-dom";

function AccountHeader() {
    return (
        <div className="flex gap-3 mt-8">
            <Link to="/vendor/account/general" className="font-medium text-sm text-[#6C737F] cursor-pointer">General</Link>
            <Link to="/vendor/account/billing" className="font-medium text-sm text-[#6C737F] cursor-pointer">Billing</Link>
            <Link to="/vendor/account/team" className="font-medium text-sm text-[#6C737F] cursor-pointer">Team</Link>
            <Link to="/vendor/account/notifications" className="font-medium text-sm text-[#6C737F] cursor-pointer">Notifications</Link>
            <Link to="/vendor/account/security" className="font-medium text-sm text-[#6C737F] cursor-pointer">Security</Link>
        </div>
    );
}

export default AccountHeader;