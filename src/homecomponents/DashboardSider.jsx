import React from "react";
import { AiOutlineHistory, AiTwotoneShop } from "react-icons/ai";
import { CiCreditCard1, CiShop, CiShoppingCart } from "react-icons/ci";
import { FaRegHeart } from "react-icons/fa6";
import { FiShoppingCart } from "react-icons/fi";
import { IoSettingsOutline } from "react-icons/io5";
import { LuLayers } from "react-icons/lu";
import { MdLogout, MdOutlineLocationOn } from "react-icons/md";
import { TbGitCompare } from "react-icons/tb";


const DashboardSider = () => {
  return (
   <div className="flex flex-col h-[432px] border-2 rounded-md shadow-xl border-gray-200 py-[16px] text-[14px] font-medium text-gray-600">
    <div className="h-[40px] flex gap-3 items-center px-8">
      <LuLayers size={20}/>
      Dashboard
    </div>
    <div className="h-[40px] flex gap-3 items-center px-8">
      <AiTwotoneShop size={20}/>
      Order History
    </div>
    <div className="h-[40px] flex gap-3 items-center px-8">
      <MdOutlineLocationOn size={20}/>
      Track Order
    </div>
    <div className="h-[40px] flex gap-3 items-center px-8">
      <FiShoppingCart size={20}/>
      Shopping Cart
    </div>
    <div className="h-[40px] flex gap-3 items-center px-8">
      <FaRegHeart size={20}/>
      Wish List
    </div>
    <div className="h-[40px] flex gap-3 items-center px-8">
      <TbGitCompare size={20}/>
      Compare
    </div>
    <div className="h-[40px] flex gap-3 items-center px-8">
      <CiCreditCard1 size={20}/>
      Cards And Adresses
    </div>
    <div className="h-[40px] flex gap-3 items-center px-8">
      <AiOutlineHistory size={20}/>
      Browsing History
    </div>
    <div className="h-[40px] flex gap-3 items-center px-8">
      <IoSettingsOutline size={20}/>
      Settings
    </div>
      <div className="h-[40px] flex gap-3 items-center px-8">
        <MdLogout size={20}/>
        Log-out
      </div>
   
   </div>
  );
};

export default DashboardSider;
