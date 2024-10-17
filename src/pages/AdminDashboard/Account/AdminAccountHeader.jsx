import {Link} from "react-router-dom";

function AdminAccountHeader() {
    return (
        <div className="flex gap-3 mt-8">
            <Link to="/admin/account/general" className="font-medium text-sm text-[#6C737F] cursor-pointer">General</Link>
            <Link to="/admin/account/billing" className="font-medium text-sm text-[#6C737F] cursor-pointer">Billing</Link>
            <Link to="/admin/account/team" className="font-medium text-sm text-[#6C737F] cursor-pointer">Team</Link>
            <Link to="/admin/account/notifications" className="font-medium text-sm text-[#6C737F] cursor-pointer">Notifications</Link>
            <Link to="/admin/account/security" className="font-medium text-sm text-[#6C737F] cursor-pointer">Security</Link>
        </div>
    );
}

export default AdminAccountHeader;