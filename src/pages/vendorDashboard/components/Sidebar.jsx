<<<<<<< Updated upstream
import React, { useState } from 'react';
import { FaChartBar, FaUser, FaBoxOpen, FaShoppingCart, FaFileInvoice, FaTruck, FaCalendarAlt, FaFileAlt, FaLock, FaSignOutAlt } from 'react-icons/fa';
import { MdDashboard } from 'react-icons/md';
import { IoAnalyticsSharp } from 'react-icons/io5';
import { FiFileText } from 'react-icons/fi';
import { HiOutlineChartSquareBar } from "react-icons/hi";
import { PiShoppingCartDuotone } from "react-icons/pi";
import { IoMdArrowDropright } from "react-icons/io";
import vendorLogo from "../../../../public/logoo.svg";
import { Link } from 'react-router-dom';
=======
import React from 'react';

import { PiShoppingCartDuotone } from "react-icons/pi";
import { IoMdArrowDropright } from "react-icons/io";

>>>>>>> Stashed changes

// import Logo from './assets/logo-2.png';
const Sidebar = () => {
  const [isOrdersDropdownOpen, setIsOrdersDropdownOpen] = useState(false);

  const toggleOrdersDropdown = () => {
    setIsOrdersDropdownOpen(!isOrdersDropdownOpen);
  };

  return (
    <div className="h-[1610px] w-[280px] bg-[#0B5D51] text-white flex flex-col items-start p-4">
      {/* Logo Section */}
      <div className="mt-[9px] ml-[35px] w-[95px] h-[86px]">
<<<<<<< Updated upstream
        <img src={vendorLogo} alt="Logo" className='' />
      </div>

      {/* Store Analytics */}
      <div className="flex items-center bg-[#073741] w-[247.2px] h-[36px] mt-6 left-[16px] p-[6px_16px] gap-0 rounded-lg ">
        <img src='store.svg' className="w-5 h-5 top-2 mr-4" />
=======
        <img src='/logoo.svg'  alt="Logo" className='' />
        
      </div>

      {/* Store Analytics */}
      <div className="flex items-center bg-[#073741]
     
w-[247.2px] h-[36px] mt-6 left-[16px] p-[6px_16px] gap-0 rounded-lg 

      ">
        <img src='/store.svg' className="w-5 h-5 top-2 mr-4" />
      
>>>>>>> Stashed changes
        <span className='font-inter font-semibold text-[14px] leading-6'>Store Analytics</span>
      </div>

      {/* Menu Items */}
      <nav className="flex-grow space-y-4 ml-2 mt-10">
<<<<<<< Updated upstream
        <SidebarItem imgSrc='/accountSVG.svg' text="Account" />
        <SidebarItem imgSrc='/customer.svg' text="Customers" badge="New" />
        <SidebarItem imgSrc='/product.svg' text="Products" />
        {/* Orders Item with Dropdown */}
        <SidebarItem imgSrc='/orders.svg' text="Orders" onClick={toggleOrdersDropdown}>
          {isOrdersDropdownOpen && (
            <div className="ml-8 mt-2 space-y-2">
             <Link to="/vendor/OrderList"> <DropdownItem text="List" /></Link>
              <DropdownItem text="Details" />
              <DropdownItem text="Order status" />
        
            </div>
          )}
        </SidebarItem>
        <SidebarItem imgSrc='/invoices.svg' text="Invoices" />
        <SidebarItem imgSrc='/logistics.svg' text="Logistics" />
        <SidebarItem imgSrc='/blog.svg' text="Blog" />
=======
        <SidebarItem imgSrc='/accountSVG.svg' text="Account"  />
        <SidebarItem imgSrc='/customer.svg' text="Customers"  badge="New"/>
        <SidebarItem imgSrc='/product.svg' text="Products" arrow />
        <SidebarItem imgSrc='/orders.svg' text="Orders" arrow />
        <SidebarItem imgSrc='/invoices.svg' text="Invoices" arrow />
        <SidebarItem imgSrc='/logistics.svg' text="Logistics" arrow />
        <SidebarItem imgSrc='/blog.svg' text="Blog" arrow />
>>>>>>> Stashed changes
        <SidebarItem imgSrc='/calender.svg' text="Calendar" />
        <SidebarItem imgSrc='/fileManager.svg' text="File Manager" />
        <SidebarItem imgSrc='/Auth.svg' text="Auth" />
        <SidebarItem icon={<PiShoppingCartDuotone className='w-5 h-[18px]' />} text="Checkout" />
      </nav>
    </div>
  );
};

// Sidebar Item Component
<<<<<<< Updated upstream
const SidebarItem = ({ imgSrc, icon, text, badge, children, onClick }) => (
  <div className="flex flex-col">
    <div
      className="flex items-center space-x-4 p-2 font-inter font-semibold text-[14px] leading-5 hover:bg-[#073741] rounded-lg w-[247px] cursor-pointer"
      onClick={onClick}
    >
=======
const SidebarItem = ({ imgSrc, icon, text, badge, arrow }) => (
    <div className="flex items-center space-x-4 p-2 font-inter font-semibold text-[14px] leading-5 hover:bg-[#073741] rounded-lg w-[230px]  ">
>>>>>>> Stashed changes
      {/* Render image if imgSrc is provided */}
      {imgSrc && <img src={imgSrc} alt={text} className="w-5 h-[18px]" />}
      {/* Render icon if provided */}
      {icon && <div className="w-5 h-[18px]">{icon}</div>}
      <span className="flex-grow">{text}</span>
      {/* Render badge if provided */}
<<<<<<< Updated upstream
      {badge && <span className="bg-[#6366F1] text-[13px] w-[44px] h-[22px] text-white px-2 flex items-center rounded-[16px]">{badge}</span>}
=======
     
      {badge && <span className="bg-[#6366F1] text-[13px] w-[44px] h-[22px] text-white  px-2 flex items-center rounded-[16px]  ">{badge}</span>}
      {/* dropDown arrow if provided */}
      {arrow && <IoMdArrowDropright className="w-5 h-5 text-white" />}
      
>>>>>>> Stashed changes
    </div>
    {/* Render dropdown content if there are children */}
    {children}
  </div>
);

// Dropdown Item Component
const DropdownItem = ({ text }) => (
  <div className="text-sm text-white hover:text-gray-300 cursor-pointer">{text}</div>
);

export default Sidebar;
