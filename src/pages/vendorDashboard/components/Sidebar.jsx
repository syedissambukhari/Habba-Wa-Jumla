import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import vendorLogo from "../../../../public/logoo.svg";
// Import necessary icons
import { PiShoppingCartDuotone } from "react-icons/pi";

// Sidebar component
const Sidebar = () => {
  const location = useLocation(); // Get current location
  const [isOrdersDropdownOpen, setIsOrdersDropdownOpen] = useState(false);
  const [isProductOpen, setProductOpen] = useState(false);

  const toggleProductOpen = () => {
    setProductOpen(!isProductOpen);
  };

  const toggleOrdersDropdown = () => {
    setIsOrdersDropdownOpen(!isOrdersDropdownOpen);
  };

  return (
    <div className="h-[1610px] w-[280px] bg-[#0B5D51] text-white flex flex-col items-start p-4">
      {/* Logo Section */}
      <div className="mt-[9px] ml-[35px] w-[95px] h-[86px]">
        <img src={vendorLogo} alt="Logo" />
      </div>

      {/* Store Analytics */}
      <div className="flex items-center bg-[#073741] w-[247.2px] h-[36px] mt-6 left-[16px] p-[6px_16px] gap-0 rounded-lg ">
        <img src="store.svg" className="w-5 h-5 top-2 mr-4" />
        <span className="font-inter font-semibold text-[14px] leading-6">
          Store Analytics
        </span>
      </div>

      {/* Menu Items */}
      <nav className="flex-grow space-y-4 ml-2 mt-10">
          <Link to="/vendor/account/general"><SidebarItem imgSrc='/accountSVG.svg' text="Account" /></Link>
        <SidebarItem
          imgSrc="/customer.svg"
          text="Customers"
          onClick={toggleOrdersDropdown}
        >
          {isOrdersDropdownOpen && (
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
        <SidebarItem imgSrc='/product.svg' text="Products" />
        <SidebarItem imgSrc="/accountSVG.svg" text="Account" />
        {/* Products dropdown */}
        <SidebarItem
          imgSrc="/product.svg"
          text="Products"
          onClick={toggleProductOpen}
        />
        {isProductOpen && (
          <div className="ml-8 mt-2 space-y-3">
            {" "}
            <Link to="/vendor/productlists">
              <DropdownItem
                text="Product List"
                isActive={location.pathname === "/vendor/productlists"}
              />
            </Link>
            <Link to="/vendor/productcreates">
              <DropdownItem
                text="Product Create"
                isActive={location.pathname === "/vendor/productcreates"}
              />
            </Link>
          </div>
        )}

        {/* Orders Item with Dropdown */}
        <SidebarItem
          imgSrc="/orders.svg"
          text="Orders"
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
        <SidebarItem imgSrc="/invoices.svg" text="Invoices" />
        <SidebarItem imgSrc="/logistics.svg" text="Logistics" />
        <SidebarItem imgSrc="/blog.svg" text="Blog" />
        <SidebarItem imgSrc="/calender.svg" text="Calendar" />
        <SidebarItem imgSrc="/fileManager.svg" text="File Manager" />
        <SidebarItem imgSrc="/Auth.svg" text="Auth" />
        <SidebarItem
          icon={<PiShoppingCartDuotone className="w-5 h-[18px]" />}
          text="Checkout"
        />
      </nav>
    </div>
  );
};

// Sidebar Item Component
const SidebarItem = ({ imgSrc, icon, text, badge, children, onClick }) => (
  <div className="flex flex-col">
    <div
      className="flex items-center space-x-4 p-2 font-inter font-semibold text-[14px] leading-5 hover:bg-[#073741] rounded-lg w-[247px] cursor-pointer"
      onClick={onClick}
    >
      {/* Render image if imgSrc is provided */}
      {imgSrc && <img src={imgSrc} alt={text} className="w-5 h-[18px]" />}
      {/* Render icon if provided */}
      {icon && <div className="w-5 h-[18px]">{icon}</div>}
      <span className="flex-grow">{text}</span>
    </div>
    {/* Render dropdown content if there are children */}
    {children}
  </div>
);

// Dropdown Item Component
const DropdownItem = ({ text, isActive }) => (
  <div className="flex items-center text-sm text-white hover:text-gray-300 cursor-pointer">
    {isActive && <div className="w-2 h-2 bg-blue-500 rounded-full mr-2" />}{" "}
    {/* Blue dot for active item */}
    {text}
  </div>
);

export default Sidebar;
