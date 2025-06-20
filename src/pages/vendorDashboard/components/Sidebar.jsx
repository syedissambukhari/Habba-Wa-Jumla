import { Link, useLocation } from "react-router-dom";
import { PiShoppingCartDuotone } from "react-icons/pi";
import { IoMdArrowDropright } from "react-icons/io";
import { useState } from "react";
import { IoMdMenu } from "react-icons/io";
import { IoMdClose } from "react-icons/io";
// Sidebar component
const Sidebar = () => {
  const location = useLocation(); // Get current location
  const [isLogisticsOpen, setIsLogisticsOpen] = useState(false);
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  // State management for dropdowns
  const [dropdowns, setDropdowns] = useState({
    orders: false,
    products: false,
    blogs: false,
    customers: false,
    Invoices: false,
    Vendors: false,
  });

  const toggleDropdown = (key) => {
    setDropdowns((prev) => ({ ...prev, [key]: !prev[key] }));
  };
  const handleLogisticsDropdown = () => {
    setIsLogisticsOpen(!isLogisticsOpen); // Toggle the sub-menu when clicked
  };
  return (
    <> 
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
        // height: '100vh'   // Sidebar takes full viewport height
      >

    {/* <div className="h-full w-[280px] bg-[#0B5D51] text-white flex flex-col items-start p-4"> */}
      {/* Logo Section */}
      <div className="mt-[9px] ml-[35px] w-[95px] h-[86px]">
        <img src="/logoo.svg" alt="Logo" />
      </div>

      {/* Store Analytics */}
      <Link to="/vendor/store-analytics">
      <div className="flex items-center bg-[#073741] w-[247.2px] h-[36px] mt-6 p-[6px_16px] gap-0 rounded-lg">
        <img src="/store.svg" className="w-5 h-5 mr-4" />
        <span className="font-inter font-semibold text-[14px]">
          Store Analytics
        </span>
      </div>
      </Link>

      {/* Menu Items */}
      <nav className="flex-grow space-y-4 ml-2 mt-10">
        {/* Account */}
        <Link to="/vendor/account/general">
          <SidebarItem imgSrc="/accountSVG.svg" text="Account" />
        </Link>

        {/* Customers */}
        <SidebarItem
          imgSrc="/customer.svg"
          text="Customers"
          arrow
          onClick={() => toggleDropdown("customers")}
        >
          {dropdowns.customers && (
            <DropdownMenu>
              <DropdownLink
                to="/vendor/CustomerList"
                text="List"
                active={location.pathname === "/vendor/CustomerList"}
              />
              <DropdownLink
                to="/vendor/CustomerDetails"
                text="Details"
                active={location.pathname === "/vendor/CustomerDetails"}
              />
            </DropdownMenu>
          )}
        </SidebarItem>
        <SidebarItem
          imgSrc="/customer.svg"
          text="Vendors"
          arrow
          onClick={() => toggleDropdown("customers")}
        >
          {dropdowns.customers && (
            <DropdownMenu>
              <DropdownLink
                to="/vendor/productlists"
                text="List"
                active={location.pathname === "/vendor/CustomerList"}
              />
              <DropdownLink
                to="/vendor/productcreates"
                text="Details"
                active={location.pathname === "/vendor/CustomerDetails"}
              />
              <DropdownLink
                to="/vendor/productcreates"
                text="Edit"
                active={location.pathname === "/vendor/CustomerDetails"}
              />
              <DropdownLink
                to="/vendor/productcreates"
                text="Vendor Approval"
                active={location.pathname === "/vendor/CustomerDetails"}
              />
            </DropdownMenu>
          )}
        </SidebarItem>

        {/* Products */}
        <SidebarItem
          imgSrc="/product.svg"
          text="Products"
          arrow
          onClick={() => toggleDropdown("products")}
        >
          {dropdowns.products && (
            <DropdownMenu>
              <DropdownLink
                to="/vendor/productlists"
                text="Product List"
                active={location.pathname === "/vendor/productlists"}
              />
              <DropdownLink
                to="/vendor/productcreates"
                text="Product Create"
                active={location.pathname === "/vendor/productcreates"}
              />
            </DropdownMenu>
          )}
        </SidebarItem>

        {/* Orders */}
        <SidebarItem
          imgSrc="/orders.svg"
          text="Orders"
          arrow
          onClick={() => toggleDropdown("orders")}
        >
          {dropdowns.orders && (
            <DropdownMenu>
              <DropdownLink
                to="/vendor/OrderList"
                text="List"
                active={location.pathname === "/vendor/OrderList"}
              />
              <DropdownLink
                to="/vendor/OrderDetail"
                text="Details"
                active={location.pathname === "/vendor/OrderDetail"}
              />
              <DropdownLink
                to="/vendor/OrderStatus"
                text="Order status"
                active={location.pathname === "/vendor/OrderStatus"}
              />
            </DropdownMenu>
          )}
        </SidebarItem>

        {/* invoice */}
        <SidebarItem
          imgSrc="/invoices.svg"
          text="Invoices"
          arrow
          onClick={() => toggleDropdown("Invoices")}
        >
          {dropdowns.Invoices && (
            <DropdownMenu>
              <DropdownLink
                to="/vendor/InvoiceList"
                text="List"
                active={location.pathname === "/vendor/InvoiceList"}
              />
              <DropdownLink
                to="/vendor/InvoiceDetail"
                text="Details"
                active={location.pathname === "/vendor/InvoiceDetail"}
              />
            </DropdownMenu>
          )}
        </SidebarItem>

        <SidebarItem
          imgSrc="/logistics.svg"
          text="Logistics"
          arrow
          onClick={handleLogisticsDropdown}
        >
          {isLogisticsOpen && (
            <div className="ml-8 mt-2 space-y-2">
              <Link to="/vendor/vendorlogistics">
                <DropdownItem
                  text="Dashboard"
                  isActive={location.pathname === "/vendor/vendorlogistics"}
                />
              </Link>
              <Link to="/vendor/vendorlogisticsfleet">
                <DropdownItem
                  text="Fleet"
                  isActive={
                    location.pathname === "/vendor/vendorlogisticsfleet"
                  }
                />
              </Link>
              <Link to="/vendor/addvehicle">
                <DropdownItem
                  text="Vehicle"
                  isActive={
                    location.pathname === "/vendor/vendorlogisticsfleet"
                  }
                />
              </Link>
            </div>
          )}
        </SidebarItem>

        {/* Blog */}
        <SidebarItem
          imgSrc="/customer.svg"
          text="Blog"
          arrow
          onClick={() => toggleDropdown("blogs")}
        >
          {dropdowns.blogs && (
            <DropdownMenu>
              <DropdownLink
                to="/vendor/PostList"
                text="Post List"
                active={location.pathname === "/vendor/PostList"}
              />
              <DropdownLink
                to="/vendor/PostDetails"
                text="Post Details"
                active={location.pathname === "/vendor/PostDetails"}
              />
              <DropdownLink
                to="/vendor/PostCreate"
                text="Post Create"
                active={location.pathname === "/vendor/PostCreate"}
              />
            </DropdownMenu>
          )}
        </SidebarItem>

        <Link to="/vendor/Calendar">
          <SidebarItem imgSrc="/calender.svg" text="Calendar" />
        </Link>

        <SidebarItem imgSrc="/fileManager.svg" text="File Manager" />
        <SidebarItem imgSrc="/Auth.svg" text="Auth" />

        <Link to="/vendor/Checkout">
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
const SidebarItem = ({ imgSrc, icon, text, children, onClick, arrow }) => (
  <div className="flex flex-col">
    <div
      className="flex items-center space-x-4 p-2 font-inter font-semibold text-[14px] hover:bg-[#073741] rounded-lg w-[247px] cursor-pointer"
      onClick={onClick}
    >
      {imgSrc && <img src={imgSrc} alt={text} className="w-5 h-[18px]" />}
      {icon && <div className="w-5 h-[18px]">{icon}</div>}
      <span className="flex-grow">{text}</span>
      {arrow && <IoMdArrowDropright className="w-5 h-5 text-white" />}
    </div>
    {/* Render children dropdown if exists */}
    {children}
  </div>
);

// Dropdown Menu Wrapper
const DropdownMenu = ({ children }) => (
  <div className="ml-8 mt-2 space-y-2">{children}</div>
);

// Dropdown Link Component
const DropdownLink = ({ to, text, active }) => (
  <Link to={to}>
    <DropdownItem text={text} isActive={active} />
  </Link>
);

// Dropdown Item Component
// eslint-disable-next-line react/prop-types
const DropdownItem = ({ text, isActive }) => (
  <div className="flex items-center text-sm text-white hover:text-gray-300 cursor-pointer">
    {isActive && <div className="w-2 h-2 bg-blue-500 rounded-full mr-2" />}
    {text}
  </div>
);

export default Sidebar;
