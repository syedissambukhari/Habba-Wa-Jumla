import React, { useState } from "react";
import { IoIosArrowDown, IoIosArrowForward } from "react-icons/io";
import { PiMapPinLine, PiArrowsCounterClockwise } from "react-icons/pi";
import { AiOutlineCustomerService } from "react-icons/ai";
import { CiCircleInfo } from "react-icons/ci";
import { BiPhoneCall } from "react-icons/bi";
import { Dropdownpopup } from "./Dropdownpopup"; // Assuming this is your custom popup component

const NavigationMenu = () => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [isSmartphoneDropdownOpen, setIsSmartphoneDropdownOpen] =
    useState(false);

  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
    setIsSmartphoneDropdownOpen(false );
  };

  const toggleSmartphoneDropdown = () => {
    setIsSmartphoneDropdownOpen(!isSmartphoneDropdownOpen);
  };

  return (
    <div className="p-3 px-[120px] flex items-center justify-between">
      <div className="flex gap-8">
        {/* All Categories with Dropdown */}
        <div className="relative">
          <div
            className="flex items-center gap-2 text-[#5F6C72] cursor-pointer"
            onClick={toggleDropdown}
          >
            <IoIosArrowDown size={20} />
            <span>All Categories</span>
          </div>
          {isDropdownOpen && (
            <div className="absolute top-[35px] w-[240px] z-40 left-0 bg-white shadow-md rounded-md py-2">
              <ul className="flex flex-col text-[#191C1F]">
                <li className="px-4 py-2 hover:bg-gray-100 cursor-pointer">
                  Computer & Laptop
                </li>
                <li className="px-4 py-2 hover:bg-gray-100 cursor-pointer">
                  Computer Accessories
                </li>
                <li
                  className="px-4 py-2 hover:bg-gray-100 flex  items-center justify-between cursor-pointer"
                  onClick={toggleSmartphoneDropdown}
                >
                  SmartPhone <IoIosArrowForward size={15} />

                  {isSmartphoneDropdownOpen && (
                    <div className="absolute top-[20px] ml-6 left-[240px]  shadow-md rounded-md z-50 w-[200px]">
                      <Dropdownpopup />
                    </div>
                  )}
                </li>
                <li className="px-4 py-2 hover:bg-gray-100 cursor-pointer">
                  Headphone
                </li>
                <li className="px-4 py-2 hover:bg-gray-100 cursor-pointer">
                  Mobile Accessories
                </li>
                <li className="px-4 py-2 hover:bg-gray-100 cursor-pointer">
                  Gaming Console
                </li>
                <li className="px-4 py-2 hover:bg-gray-100 cursor-pointer">
                  Camera & Photo
                </li>
                <li className="px-4 py-2 hover:bg-gray-100 cursor-pointer">
                  TV & Homes Appliances
                </li>
                <li className="px-4 py-2 hover:bg-gray-100 cursor-pointer">
                  Watchs & Accessories
                </li>
                <li className="px-4 py-2 hover:bg-gray-100 cursor-pointer">
                  GPS & Navigation
                </li>
                <li className="px-4 py-2 hover:bg-gray-100 cursor-pointer">
                  Wearable Technology
                </li>
              </ul>
            </div>
          )}
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

      {/* Dropdown popup for Smartphone */}
    </div>
  );
};

export default NavigationMenu;
