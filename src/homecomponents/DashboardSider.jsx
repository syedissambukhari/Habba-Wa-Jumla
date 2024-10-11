import React from "react";
import { AiOutlineHistory, AiTwotoneShop } from "react-icons/ai";
import { CiCreditCard1, CiShop, CiShoppingCart } from "react-icons/ci";
import { FaRegHeart } from "react-icons/fa6";
import { FiShoppingCart } from "react-icons/fi";
import { IoSettingsOutline } from "react-icons/io5";
import { LuLayers } from "react-icons/lu";
import { MdLogout, MdOutlineLocationOn } from "react-icons/md";
import { TbGitCompare } from "react-icons/tb";
import { Link } from "react-router-dom";

const DashboardSider = ({ active }) => {
  return (
    <div className="flex flex-col h-[432px] border-2 rounded-md shadow-xl border-gray-200 py-[16px] text-[14px] font-medium text-gray-600">
      <Link
        to={"/UserDashboard"}
        className={`h-[40px] flex gap-3 items-center px-8 ${
          active == "Dashboard" ? "bg-[#073741] text-white" : ""
        }`}
      >
        <LuLayers size={20} />
        Dashboard
      </Link>
      <Link
        to={"/order-history"}
        className={`h-[40px] flex gap-3 items-center px-8 ${
          active == "Order" ? "bg-[#073741] text-white" : ""
        }`}
      >
        <AiTwotoneShop size={20} />
        Order History
      </Link>
      <Link
        to={"/TrackOrder"}
        className={`h-[40px] flex gap-3 items-center px-8 ${
          active == "Track" ? "bg-[#073741] text-white" : ""
        }`}
      >
        <MdOutlineLocationOn size={20} />
        Track Order
      </Link>
      <Link
        to={"/shopping-card"}
        className={`h-[40px] flex gap-3 items-center px-8 ${
          active == "Cart" ? "bg-[#073741] text-white" : ""
        }`}
      >
        <FiShoppingCart size={20} />
        Shopping Cart
      </Link>
      <Link
        to={"/Wishlist"}
        className={`h-[40px] flex gap-3 items-center px-8 ${
          active == "WishList" ? "bg-[#073741] text-white" : ""
        }`}
      >
        <FaRegHeart size={20} />
        Wish List
      </Link>
      <Link
        to={"/CompareProduct"}
        className={`h-[40px] flex gap-3 items-center px-8 ${
          active == "Compare" ? "bg-[#073741] text-white" : ""
        }`}
      >
        <TbGitCompare size={20} />
        Compare
      </Link>
      <Link
        to={"/dashboard/billing"}
        className={`h-[40px] flex gap-3 items-center px-8 ${
          active == "Cards" ? "bg-[#073741] text-white" : ""
        }`}
      >
        <CiCreditCard1 size={20} />
        Cards And Adresses
      </Link>
      <Link
        to={"/browsing-history"}
        onClick={() => window.scrollTo({ top: 5, behavior: "smooth" })}
        className={`h-[40px] flex gap-3 items-center px-8 ${
          active == "History" ? "bg-[#073741] text-white" : ""
        }`}
      >
        <AiOutlineHistory size={20} />
        Browsing History
      </Link>
      <Link
        className={`h-[40px] flex gap-3 items-center px-8 ${
          active == "Settings" ? "bg-[#073741] text-white" : ""
        }`}
        to={"/dashboard-settings"}
      >
        <IoSettingsOutline size={20} />
        Settings
      </Link>
      <Link
      to={"/"}
        className={`h-[40px] flex gap-3 items-center px-8 ${
          active == "Logout" ? "bg-[#073741] text-white" : ""
        }`}
      >
        <MdLogout size={20} />
        Log-out
      </Link>
    </div>
  );
};

export default DashboardSider;
