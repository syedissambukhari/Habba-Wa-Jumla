import Account from "../pages/vendorDashboard/Account/Account.jsx";
import General from "../pages/vendorDashboard/Account/General.jsx";
import Notifications from "../pages/vendorDashboard/Account/Notifications.jsx";
import Security from "../pages/vendorDashboard/Account/Security.jsx";
import Team from "../pages/vendorDashboard/Account/Team.jsx";
import Billing from "../pages/vendorDashboard/Account/Billing.jsx";
import ProductLists from "../pages/vendorDashboard/ProductLists.jsx";
import ProductCreation from "../pages/vendorDashboard/ProductCreation.jsx";
import StoreAnalytics from "../pages/vendorDashboard/StoreAnalytics.jsx";
import {OrderList} from "../pages/vendorDashboard/Orders/OrderList.jsx";
import {OrderDetail} from "../pages/vendorDashboard/Orders/OrderDetail.jsx";
import {OrderStatus} from "../pages/vendorDashboard/Orders/OrderStatus.jsx";
import CustomerList from "../pages/vendorDashboard/Customer/CustomerList.jsx";
import CustomerDetails from "../pages/vendorDashboard/Customer/CustomerDetails.jsx";
import {OrderFilter} from "../pages/vendorDashboard/Orders/OrderFilter.jsx";
import PostList from "../pages/vendorDashboard/Blog/PostList.jsx";
import PostDetails from "../pages/vendorDashboard/Blog/PostDetails.jsx";
import Calendar from "../pages/vendorDashboard/VendorCalendar/Calendar.jsx";
import NewEventPopUp from "../pages/vendorDashboard/VendorCalendar/NewEventPopUp.jsx";
import PostCreate from "../pages/vendorDashboard/Blog/PostCreate.jsx";
import {InvoiceList} from "../pages/vendorDashboard/invoices/InvoiceList.jsx";
import {InvoiceDetail} from "../pages/vendorDashboard/invoices/InvoiceDetail.jsx";
import {InoviceFilter} from "../pages/vendorDashboard/invoices/InoviceFilter.jsx";
import {VendorCheckout} from "../pages/vendorDashboard/VendorCheckout.jsx";
import VendorLogin from "../pages/vendorAuth/VendorLogin.jsx";
import VendorRegistration from "../pages/vendorAuth/VendorRegistration.jsx";
import VendorApproval from "../pages/vendorAuth/VendorApproval.jsx";
import ForgetPassword from "../pages/vendorAuth/ForgetPassword.jsx";
import ResetPassword from "../pages/vendorAuth/ResetPassword.jsx";
import Verification from "../pages/vendorAuth/Verification.jsx";
import VendorLogisticDashboard from "../pages/vendorlogistics/VendorLogisticDashboard.jsx";
import VendorLogisticFleet from "../pages/vendorlogistics/VendorLogisticsFleet.jsx";
import AddVehicle from "../pages/AdminDashboard/components/adminauth/AddVehicle.jsx";


const VendorRoutes = [
    {
        path: "account",
        element: <Account />,
        children: [
            {
                path: "general",
                element: <General />,
            },
            {
                path: "notifications",
                element: <Notifications />,
            },
            {
                path: "security",
                element: <Security />,
            },
            {
                path: "team",
                element: <Team />,
            },
            {
                path: "billing",
                element: <Billing />,
            },
        ],
    },
    {
        path: "productlists",
        element: <ProductLists />,
    },
    {
        path: "productcreates",
        element: <ProductCreation />,
    },
    {
        path: "store-analytics",
        element: <StoreAnalytics />,
    },
    {
        path: "OrderList",
        element: <OrderList />,
    },
    {
        path: "OrderDetail",
        element: <OrderDetail />,
    },
    {
        path: "OrderStatus",
        element: <OrderStatus />,
    },
    {
        path: "CustomerList",
        element: <CustomerList />,
    },
    {
        path: "CustomerDetails",
        element: <CustomerDetails />,
    },
    {
        path: "OrderFilter",
        element: <OrderFilter />,
    },
    {
        path: "PostList",
        element: <PostList />,
    },
    {
        path: "PostDetails",
        element: <PostDetails />,
    },
    {
        path: "Calendar",
        element: <Calendar />,
    },
    {
        path: "Calendar/new-event",
        element: <NewEventPopUp />,
    },
    {
        path: "PostCreate",
        element: <PostCreate />,
    },
    {
        path: "InvoiceList",
        element: <InvoiceList />,
    },
    {
        path: "InvoiceDetail",
        element: <InvoiceDetail />,
    },
    {
        path: "InoviceFilter",
        element: <InoviceFilter />,
    },
    {
        path: "checkout",
        element: <VendorCheckout />,
    },
    {
        path: "vendorlogin",
        element: <VendorLogin />,
    },
    {
        path: "vendorsignup",
        element: <VendorRegistration />,
    },
    {
        path: "vendorapproval",
        element: <VendorApproval />,
    },
    {
        path: "forgetpassword",
        element: <ForgetPassword />,
    },
    {
        path: "resetpassword",
        element: <ResetPassword />,
    },
    {
        path: "verify",
        element: <Verification />,
    },
    {
        path: "vendorlogistics",
        element: <VendorLogisticDashboard />,
    },
    {
        path: "vendorlogisticsfleet",
        element: <VendorLogisticFleet />,
    },
    {
        path: "addvehicle",
        element: <AddVehicle />,
    },
];

export default VendorRoutes;