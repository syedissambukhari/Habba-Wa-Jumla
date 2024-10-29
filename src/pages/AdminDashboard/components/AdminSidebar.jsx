import { Link, useLocation } from "react-router-dom";
import { useState } from "react";
import { PiShoppingCartDuotone } from "react-icons/pi";
import { IoMdArrowDropright } from "react-icons/io";
import { IoMdMenu } from "react-icons/io";
import { IoMdClose } from "react-icons/io";
// import AdminStoreAnalytics from "../AdminStoreAnalytics";
// Sidebar component
const AdminSidebar = () => {
  const location = useLocation(); // Get current location
  const [isOrdersDropdownOpen, setIsOrdersDropdownOpen] = useState(false);
  const [isOrdersDropdownOpen2, setIsOrdersDropdownOpen2] = useState(false);
  const [isProductOpen, setProductOpen] = useState(false);
  const [isLogisticsOpen, setIsLogisticsOpen] = useState(false);
  const [isBlogOpen, setIsBlogOpen] = useState(false);
  const [isInvoicesOpen, setInvoicesOpen] = useState(false);
  const [isVendorOpen, setIsVendorOpen] = useState(false);
  // hambergur on small screen
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const toggleProductOpen = () => {
    setProductOpen(!isProductOpen);
  };

  const toggleOrdersDropdown2 = () => {
    setIsOrdersDropdownOpen2(!isOrdersDropdownOpen2);
  };

  const toggleOrdersDropdown = () => {
    setIsOrdersDropdownOpen(!isOrdersDropdownOpen);
  };

  const handleLogisticsDropdown = () => {
    setIsLogisticsOpen(!isLogisticsOpen); // Toggle the sub-menu when clicked
  };

  const toggleinvoiceDropdown = () => {
    setInvoicesOpen(!isInvoicesOpen);
  };

  const toggleBlogOpen = () => {
    setIsBlogOpen(!isBlogOpen);
  };
  const toggleVendorOpen = () => {
    setIsVendorOpen(!isVendorOpen);
  };
  return (
    <>
    {/* hamburger for small */}
    <div className="md:hidden fixed top-5 left-4 z-[100]">
    {isSidebarOpen ? (
      <IoMdClose
        className="text-white w-8 h-8 cursor-pointer"
        onClick={() => setIsSidebarOpen(!isSidebarOpen)}
      />
    ) : (
      <IoMdMenu
        className="text-black w-8 h-8 cursor-pointer"
        onClick={() => setIsSidebarOpen(!isSidebarOpen)}
      />
    )}
  </div>
    
  <div
        className={`fixed top-0 left-0 sm:h-full lg:w-[280px] bg-[#0B5D51] text-white flex-col items-start p-4 transition-transform transform z-[50] ${
          isSidebarOpen ? "translate-x-0" : "-translate-x-full"
        } md:relative lg:h-full md:translate-x-0 md:flex md:overflow-visible overflow-y-auto h-[100vh]`}
           // Fixed scroll issue with overflow
        
      >
      {/* Logo Section */}
      <div className="mt-[9px] ml-[35px] w-[95px] h-[86px]">
        <img src="/logoo.svg" alt="Logo" />
      </div>

      {/* Store Analytics */}
      <Link to="/admin/AdminStore-analytics">
      <div className="flex items-center bg-[#073741] w-[247.2px] h-[36px] mt-6 left-[16px] p-[6px_16px] gap-0 rounded-lg">
       <img src="/store.svg" className="w-5 h-5 top-2 mr-4" />
        <span className="font-inter font-semibold text-[14px] leading-6">
          Store Analytics
        </span>
        
      </div>
      </Link>

      {/* Menu Items */}
      <nav className="flex-grow 2xl:space-y-6 space-y-4 ml-2 mt-10">
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
        <SidebarItem
          imgSrc="/product.svg"
          text="Vendors"
          arrow
          onClick={toggleVendorOpen}
        />
        {isVendorOpen && (
          <div className="ml-8 mt-2 space-y-3">
            <Link to="/admin/vendorslist">
              <DropdownItem
                text=" List"
                isActive={location.pathname === "/admin/vendorslist"}
              />
            </Link>
            <Link to="/admin/vendorsdetails">
              <DropdownItem
                text=" Details"
                isActive={location.pathname === "/admin/vendorsdetails"}
              />
            </Link>
            <Link to="/admin/vendorsedit">
              <DropdownItem
                text=" Edit"
                isActive={location.pathname === "/admin/vendorsedit"}
              />
            </Link>
            <Link to="/admin/vendorsapproval">
              <DropdownItem
                text=" Vendor Approval"
                isActive={location.pathname === "/admin/vendorsapproval"}
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

        {/* Invoices Dropdown */}
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
                text="List"
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

        {/* Logistics Dropdown */}
        <SidebarItem
          imgSrc="/logistics.svg"
          text="Logistics"
          arrow
          onClick={handleLogisticsDropdown}
        >
          {isLogisticsOpen && (
            <div className="ml-8 mt-2 space-y-2">
              <Link to="/admin/adminlogistics">
                <DropdownItem
                  text="Dashboard"
                  isActive={location.pathname === "/admin/adminlogistics"}
                />
              </Link>
              <Link to="/admin/logisticsfleet">
                <DropdownItem
                  text="Fleet"
                  isActive={location.pathname === "/admin/logisticsfleet"}
                />
              </Link>
              <Link to="/admin/addvehicle">
                <DropdownItem
                  text="Vehicle"
                  isActive={location.pathname === "/admin/addvehicle"}
                />
              </Link>
            </div>
          )}
        </SidebarItem>

        {/* Blog Dropdown */}
        <SidebarItem
          imgSrc="/blog.svg"
          text="Blog"
          arrow
          onClick={toggleBlogOpen}
        />
        {isBlogOpen && (
          <div className="ml-8 mt-2 space-y-3">
            <Link to="/admin/AdminPost-create">
              <DropdownItem
                text="Create"
                isActive={location.pathname === "/admin/AdminPost-create"}
              />
            </Link>
            <Link to="/admin/AdminPost-details">
              <DropdownItem
                text="Post"
                isActive={location.pathname === "/admin/AdminPost-details"}
              />
            </Link>
            <Link to="/admin/AdminPost-list">
              <DropdownItem
                text="Detail"
                isActive={location.pathname === "/admin/AdminPost-list"}
              />
            </Link>
          </div>
        )}

        <Link to="/admin/Calendar">
          <SidebarItem imgSrc="/calender.svg" text="Calendar" />
        </Link>
        <SidebarItem imgSrc="/fileManager.svg" text="File Manager" />
        <SidebarItem imgSrc="/Auth.svg" text="Auth" />
        <Link to="/admin/Checkout">
          <SidebarItem
            icon={<PiShoppingCartDuotone className="w-5 h-[18px]" />}
            text="Checkout"
          />
        </Link>
      </nav>
    </div>
    </>
  );
};

// Sidebar Item Component
const SidebarItem = ({
  imgSrc,
  icon,
  text,
  badge,
  children,
  onClick,
  arrow,
}) => (
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
const DropdownItem = ({ text, isActive }) => (
  <div className="flex items-center text-sm text-white hover:text-gray-300 cursor-pointer">
    {isActive && <div className="w-2 h-2 bg-blue-500 rounded-full mr-2" />}
    {text}

  </div>
  
);

export default AdminSidebar;
