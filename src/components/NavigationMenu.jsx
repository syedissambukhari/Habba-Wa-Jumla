import React from "react";
import {
  FaTh,
  FaShippingFast,
  FaRegAddressCard,
  FaHeadset,
  FaQuestionCircle,
} from "react-icons/fa";
import { IoIosArrowDown } from "react-icons/io";
import { PiMapPinLine } from "react-icons/pi";
import { AiOutlineCustomerService } from "react-icons/ai";
import { CiCircleInfo } from "react-icons/ci";
import { BiPhoneCall } from "react-icons/bi";
import { PiArrowsCounterClockwise } from "react-icons/pi";

const NavigationMenu = () => {
  return (
    <div className="p-3 px-[120px] flex items-center justify-between">
      <div className="flex gap-8">
        <div className="flex items-center gap-2 text-[#5F6C72]">
          <IoIosArrowDown size={20} />
          <span>All Categories</span>
        </div>
        <div className="flex items-center gap-2 text-[#5F6C72]">
          <PiMapPinLine size={20} />
          <span>Track Order</span>
        </div>
        <div className="flex items-center gap-2 text-[#5F6C72]">
          <PiArrowsCounterClockwise size={20} />
          <span>Compare</span>
        </div>
        <div className="flex items-center gap-2 text-[#5F6C72]">
          <AiOutlineCustomerService size={20} />
          <span>Customer Support</span>
        </div>
        <div className="flex items-center gap-2 text-[#5F6C72]">
          <CiCircleInfo size={20} />
          <span>Need Help</span>
        </div>
      </div>
      <div className="flex gap-2 items-center">
        <BiPhoneCall size={20.4} />
        <p className="text-[18px] text-[#191C1F] font-[400]">+1-202-555-0104</p>
      </div>
    </div>
  );
};

export default NavigationMenu;
