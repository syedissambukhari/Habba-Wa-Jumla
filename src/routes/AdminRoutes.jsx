import AdminAccount from "../pages/AdminDashboard/Account/AdminAccount.jsx";
import AdminGeneral from "../pages/AdminDashboard/Account/AdminGeneral.jsx";
import AdminNotifications from "../pages/AdminDashboard/Account/AdminNotifications.jsx";
import AdminSecurity from "../pages/AdminDashboard/Account/AdminSecurity.jsx";
import AdminTeam from "../pages/AdminDashboard/Account/AdminTeam.jsx";
import AdminBilling from "../pages/AdminDashboard/Account/AdminBilling.jsx";
import AdminProductLists from "../pages/AdminDashboard/Product/AdminProductLists.jsx";
import AdminProductCreation from "../pages/AdminDashboard/Product/AdminProductCreation.jsx";
import VendorsList from "../pages/AdminDashboard/components/VendorsList.jsx";
import VendorsApproval from "../pages/AdminDashboard/components/VendorsApproval.jsx";
import VendorsDetails from "../pages/AdminDashboard/components/VendorsDetails.jsx";
import VendorsEdit from "../pages/AdminDashboard/components/VendorsEdit.jsx";
import AdminStoreAnalytics from "../pages/AdminDashboard/AdminStoreAnalytics.jsx";
import AdminPostCreate from "../pages/AdminDashboard/Blog/AdminPostCreate.jsx";
import AdminPostDetails from "../pages/AdminDashboard/Blog/AdminPostDetails.jsx";
import AdminPostList from "../pages/AdminDashboard/Blog/AdminPostList.jsx";
import AnalaticsBody from "../pages/AdminDashboard/Analytics/AnalaticsBody.jsx";
import CustomerListAdmin from "../pages/AdminDashboard/Customer/CustomerDetailsAdmin.jsx";
import CustomerDetailsAdmin from "../pages/AdminDashboard/Customer/CustomerDetailsAdmin.jsx";
import AdminCalendar from "../pages/AdminDashboard/AdminCalendar/AdminCalendar.jsx";
import PopUp from "../pages/AdminDashboard/AdminCalendar/CalendarPopUp.jsx";
import EditCustomerAdmin from "../pages/AdminDashboard/Customer/EditCustomerAdmin.jsx";
import {AdminCheckout} from "../pages/AdminDashboard/AdminCheckout.jsx";
import AdminLogin from "../pages/AdminDashboard/components/adminauth/AdminLogin.jsx";
import AdminForgetPassword from "../pages/AdminDashboard/components/adminauth/AdminForgetPassword.jsx";
import AdminResetPassword from "../pages/AdminDashboard/components/adminauth/AdminResetPassword.jsx";
import AdminVerification from "../pages/AdminDashboard/components/adminauth/AdminVerification.jsx";
import OrderListAdmin from "../pages/AdminDashboard/Orders/OrderListAdmin.jsx";
import OrderFilterAdmin from "../pages/AdminDashboard/Orders/OrderFilterAdmin.jsx";
import OrderDetailAdmin from "../pages/AdminDashboard/Orders/OrderDetailAdmin.jsx";
import OrderStatusAdmin from "../pages/AdminDashboard/Orders/OrderStatusAdmin.jsx";
import AdminLogisticsDashboard from "../pages/AdminDashboard/components/AdminLogisticsDashboard.jsx";
import LogisticsFleet from "../pages/AdminDashboard/components/LogisticsFleet.jsx";
import AddVehicle from "../pages/AdminDashboard/components/adminauth/AddVehicle.jsx";
import {AdminInoviceList} from "../pages/AdminDashboard/Admininvoice/AdminInoviceList.jsx";
import {AdminInoviceDetail} from "../pages/AdminDashboard/Admininvoice/AdminInoviceDetail.jsx";
import {AdminInoviceFilter} from "../pages/AdminDashboard/Admininvoice/AdminInoviceFilter.jsx";
import FileManagerBody from "../pages/AdminDashboard/AdminFileManager/FileManagerBody.jsx";
import { elements } from "chart.js";


const AdminRoutes = [
    {
        path: "account",
        element: <AdminAccount />,
        children: [
            {
                path: "general",
                element: <AdminGeneral />,
            },
            {
                path: "notifications",
                element: <AdminNotifications />,
            },
            {
                path: "security",
                element: <AdminSecurity />,
            },
            {
                path: "team",
                element: <AdminTeam />,
            },
            {
                path: "billing",
                element: <AdminBilling />,
            },
        ],
    },
    {
        path: "productlists",
        element: <AdminProductLists />,
    },
    {
        path: "productcreates",
        element: <AdminProductCreation />,
    },
    {
        path: "vendorslist",
        element: <VendorsList />,
    },
    {
        path: "vendorsapproval",
        element: <VendorsApproval />,
    },
    {
        path: "vendorsdetails",
        element: <VendorsDetails />,
    },
    {
        path: "vendorsedit",
        element: <VendorsEdit />,
    },
    {
        path: "AdminStore-analytics",
        element: <AdminStoreAnalytics />,
    },

    //admin blog
    {
        path: "AdminPost-create",
        element: <AdminPostCreate />,
    },
    {
        path: "AdminPost-details",
        element: <AdminPostDetails />,
    },
    {
        path: "AdminPost-list",
        element: <AdminPostList />,
    },
    {
        path: "AnalaticsBody",
        element: <AnalaticsBody />,
    },
    {
        path: "CustomerListAdmin",
        element: <CustomerListAdmin />,
    },
    {
        path: "CustomerDetailsAdmin",
        element: <CustomerDetailsAdmin />,
    },
    {
        path: "Calendar",
        element: <AdminCalendar />,
    },
    {
        path: "Calendar/new-event",
        element: <PopUp />,
    },
    {
        path: "EditCustomerAdmin",
        element: <EditCustomerAdmin />,
    },
    {
        path: "checkout",
        element: <AdminCheckout />,
    },
    {
        path: "adminlogin",
        element: <AdminLogin />,
    },
    {
        path: "adminpasswordforget",
        element: <AdminForgetPassword />,
    },
    {
        path: "adminpasswordreset",
        element: <AdminResetPassword />,
    },
    {
        path: "adminverify",
        element: <AdminVerification />,
    },
    {
        path: "orderList",
        element: <OrderListAdmin />,
    },
    {
        path: "orderFilter",
        element: <OrderFilterAdmin />,
    },
    {
        path: "orderDetail",
        element: <OrderDetailAdmin />,
    },
    {
        path: "orderStatus",
        element: <OrderStatusAdmin />,
    },
    {
        path: "adminlogistics",
        element: <AdminLogisticsDashboard />,
    },
    {
        path: "logisticsfleet",
        element: <LogisticsFleet />,
    },
    {
        path: "admininovicelist",
        element: <AdminInoviceList />,
    },
    {
        path: "addvehicle",
        element: <AddVehicle />,
    },
    {
        path: "admininovicedetail",
        element: <AdminInoviceDetail />,
    },
    {
        path: "admininovicefilter",
        element: <AdminInoviceFilter />,
    },
    {
        path : "FileManagerBody",
        element: <FileManagerBody />
    }
];

export default AdminRoutes;