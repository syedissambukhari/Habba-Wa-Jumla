import React from 'react';
import { FaChartBar, FaUser, FaBoxOpen, FaShoppingCart, FaFileInvoice, FaTruck, FaCalendarAlt, FaFileAlt, FaLock, FaSignOutAlt } from 'react-icons/fa';
import { MdDashboard } from 'react-icons/md';
import { IoAnalyticsSharp } from 'react-icons/io5';
import { FiFileText } from 'react-icons/fi';
import { HiOutlineChartSquareBar } from "react-icons/hi";
import { PiShoppingCartDuotone } from "react-icons/pi";
import { IoMdArrowDropright } from "react-icons/io";
import vendorLogo from "../../../../public/logoo.svg";

// import Logo from './assets/logo-2.png';
const Sidebar = () => {
  return (
    <div className="h-[1610px] w-[280px] bg-[#0B5D51] text-white flex flex-col items-start p-4">
      {/* Logo Section */}
      <div className="mt-[9px] ml-[35px] w-[95px] h-[86px]">
        <img src={vendorLogo}  alt="Logo" className='' />
        
      </div>

      {/* Store Analytics */}
      <div className="flex items-center bg-[#073741]
     
w-[247.2px] h-[36px] mt-6 left-[16px] p-[6px_16px] gap-0 rounded-lg 

      ">
        <img src='store.svg' className="w-5 h-5 top-2 mr-4" />
      
        <span className='font-inter font-semibold text-[14px] leading-6'>Store Analytics</span>
      </div>

      {/* Menu Items */}
      <nav className="flex-grow space-y-4 ml-2 mt-10">
        <SidebarItem imgSrc='/accountSVG.svg' text="Account" className='' />
        <SidebarItem imgSrc='/customer.svg' text="Customers"  badge="New"/>
        <SidebarItem imgSrc='/product.svg' text="Products"  />
        <SidebarItem imgSrc='/orders.svg' text="Orders" />
        <SidebarItem imgSrc='/invoices.svg' text="Invoices" />
        <SidebarItem imgSrc='/logistics.svg' text="Logistics" />
        <SidebarItem imgSrc='/blog.svg' text="Blog" />
        <SidebarItem imgSrc='/calender.svg' text="Calendar" />
        <SidebarItem imgSrc='/fileManager.svg' text="File Manager" />
        <SidebarItem imgSrc='/Auth.svg' text="Auth" />
        <SidebarItem icon={<PiShoppingCartDuotone className='w-5 h-[18px]'/>} text="Checkout" />
      </nav>
    </div>
  );
};

// Sidebar Item Component
const SidebarItem = ({ imgSrc, icon, text, badge,  }) => (
    <div className="flex items-center space-x-4 p-2 font-inter font-semibold text-[14px] leading-5 hover:bg-[#073741] rounded-lg w-[247px]  ">
      {/* Render image if imgSrc is provided */}
      {imgSrc && <img src={imgSrc} alt={text} className="w-5 h-[18px]" />}
      {/* Render icon if provided */}
      {icon && <div className=" w-5 h-[18px]">{icon}</div>}
      <span className="flex-grow">{text}</span>
      {/* Render badge if provided */}
     
      {badge && <span className="bg-[#6366F1] text-[13px] w-[44px] h-[22px] text-white  px-2 flex items-center rounded-[16px]  ">{badge}</span>}
      
    </div>
  );

export default Sidebar;
