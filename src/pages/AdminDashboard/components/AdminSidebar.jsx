import { Link, useLocation } from "react-router-dom";
import { useState } from "react";
import { PiShoppingCartDuotone } from "react-icons/pi";
import { IoMdArrowDropright } from "react-icons/io";

// Sidebar component
const AdminSidebar = () => {
    const location = useLocation(); // Get current location
    const [isOrdersDropdownOpen, setIsOrdersDropdownOpen] = useState(false);
    const [isOrdersDropdownOpen2, setIsOrdersDropdownOpen2] = useState(false);
    const [isProductOpen, setProductOpen] = useState(false);
    const [  isInvoicesOpen, setInvoicesOpen] = useState(false);

  

    const toggleProductOpen = () => {
        setProductOpen(!isProductOpen);
    };

    const toggleOrdersDropdown2 = () => {
        setIsOrdersDropdownOpen2(!isOrdersDropdownOpen2);
    };

    const toggleOrdersDropdown = () => {
        setIsOrdersDropdownOpen(!isOrdersDropdownOpen);
    };

    const toggleinvoiceDropdown = () => {
        setInvoicesOpen(!isOrdersDropdownOpen);
    };

    return (
        <div className="h-[1610px] w-[280px] bg-[#0B5D51] text-white flex flex-col items-start p-4">
            {/* Logo Section */}
            <div className="mt-[9px] ml-[35px] w-[95px] h-[86px]">
                <img src="/logoo.svg" alt="Logo" />
            </div>

            {/* Store Analytics */}
            <div className="flex items-center bg-[#073741] w-[247.2px] h-[36px] mt-6 left-[16px] p-[6px_16px] gap-0 rounded-lg">
                <img src="/store.svg" className="w-5 h-5 top-2 mr-4" />
                <span className="font-inter font-semibold text-[14px] leading-6">
          Store Analytics
        </span>
            </div>

            {/* Menu Items */}
            <nav className="flex-grow space-y-4 ml-2 mt-10">
                <Link to="/admin/account/general">
                    <SidebarItem imgSrc="/accountSVG.svg" text="Account" />
                </Link>

                {/* Customers Dropdown */}
                <SidebarItem
                    imgSrc="/customer.svg"
                    text="Customers"
                    onClick={toggleOrdersDropdown2}
                >
                    {isOrdersDropdownOpen2 && (
                        <div className="ml-8 mt-2 space-y-2">
                            <Link to="/vendor/CustomerList">
                                <DropdownItem
                                    text="List"
                                    isActive={location.pathname === "/vendor/CustomerList"}
                                />
                            </Link>
                            <Link to="/vendor/CustomerDetails">
                                <DropdownItem
                                    text="Details"
                                    isActive={location.pathname === "/vendor/CustomerDetails"}
                                />
                            </Link>
                        </div>
                    )}
                </SidebarItem>

                {/* Products Dropdown */}
                {/* Products dropdown */}
                <SidebarItem
                    imgSrc="/product.svg"
                    text="Products"
                    arrow
                    onClick={toggleProductOpen}
                />
                {isProductOpen && (
                    <div className="ml-8 mt-2 space-y-3">
                        <Link to="/admin/productlists">
                            <DropdownItem
                                text="Product List"
                                isActive={location.pathname === "/admin/productlists"}
                            />
                        </Link>
                        <Link to="/admin/productcreates">
                            <DropdownItem
                                text="Product Create"
                                isActive={location.pathname === "/admin/productcreates"}
                            />
                        </Link>
                    </div>
                )}

                {/* Orders Dropdown */}
                <SidebarItem
                    imgSrc="/orders.svg"
                    text="Orders"
                    arrow
                    onClick={toggleOrdersDropdown}
                >
                    {isOrdersDropdownOpen && (
                        <div className="ml-8 mt-2 space-y-2">
                            <Link to="/vendor/OrderList">
                                <DropdownItem
                                    text="List"
                                    isActive={location.pathname === "/vendor/OrderList"}
                                />
                            </Link>
                            <DropdownItem text="Details" />
                            <DropdownItem text="Order status" />
                        </div>
                    )}
                </SidebarItem>

             


                <SidebarItem
                    imgSrc="/invoices.svg"
                    text="Invoices"
                    arrow
                    onClick={toggleinvoiceDropdown}
                />
                {isInvoicesOpen && (
                    <div className="ml-8 mt-2 space-y-3">
                        <Link to="/admin/admininovicelist">
                            <DropdownItem
                                text="list"
                                isActive={location.pathname === "/admin/admininovicelist"}
                            />
                        </Link>
                        <Link to="/admin/admininovicedetail">
                            <DropdownItem
                                text="Detail"
                                isActive={location.pathname === "/admin/admininovicedetail"}
                            />
                        </Link>
                    </div>
                )}





                <SidebarItem imgSrc="/logistics.svg" text="Logistics" arrow />
                <SidebarItem imgSrc="/blog.svg" text="Blog" arrow />
                <Link  to="/admin/Calendar">
                <SidebarItem imgSrc="/calender.svg" text="Calendar" />
                </Link>
                <SidebarItem imgSrc="/fileManager.svg" text="File Manager" />
                <SidebarItem imgSrc="/Auth.svg" text="Auth" />
                <Link  to="/admin/Checkout"><SidebarItem   
                icon={<PiShoppingCartDuotone className="w-5 h-[18px]" />}
                text="Checkout"
                /></Link>
            </nav>
        </div>
    );
};

// Sidebar Item Component
// eslint-disable-next-line react/prop-types
const SidebarItem = ({ imgSrc, icon, text, badge, children, onClick, arrow }) => (
    <div className="flex flex-col">
        <div
            className="flex items-center space-x-4 p-2 font-inter font-semibold text-[14px] leading-5 hover:bg-[#073741] rounded-lg w-[247px] cursor-pointer"
            onClick={onClick}
        >
            {imgSrc && <img src={imgSrc} alt={text} className="w-5 h-[18px]" />}
            {icon && <div className="w-5 h-[18px]">{icon}</div>}
            <span className="flex-grow">{text}</span>
            {badge && (
                <span className="bg-[#6366F1] text-[13px] w-[44px] h-[22px] text-white px-2 flex items-center rounded-[16px]">
          {badge}
        </span>
            )}
            {arrow && <IoMdArrowDropright className="w-5 h-5 text-white" />}
        </div>
        {/* Render dropdown content if there are children */}
        {children}
    </div>
);

// Dropdown Item Component
// eslint-disable-next-line react/prop-types
const DropdownItem = ({ text, isActive }) => (
    <div className="flex items-center text-sm text-white hover:text-gray-300 cursor-pointer">
        {isActive && <div className="w-2 h-2 bg-blue-500 rounded-full mr-2" />}
        {text}
    </div>
);

export default AdminSidebar;
