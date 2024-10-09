import React, { useState } from "react";
import { IoIosArrowRoundForward } from "react-icons/io";
import { RxCross2 } from "react-icons/rx";
import { FaTwitter } from "react-icons/fa";
import { FaFacebook } from "react-icons/fa";
import { PiPhosphorLogoThin } from "react-icons/pi";
import { IoLogoYoutube } from "react-icons/io";
import { FaInstagram } from "react-icons/fa";
import { FaReddit } from "react-icons/fa";
import { IoIosArrowDown } from "react-icons/io";
import { FaSearch } from "react-icons/fa";
import { IoCartOutline } from "react-icons/io5";
import { GrFavorite } from "react-icons/gr";
import { IoPersonOutline } from "react-icons/io5";
import NavigationMenu from "./NavigationMenu";
import Logo from "../assets/Logo.png";
import LoginForm from "./LoginForm";
const Header = () => {

  const [isPopupOpen, setIsPopupOpen] = useState(false);

  const handleIconClick = () => {
    setIsPopupOpen(!isPopupOpen);
  };
  return (
    <div className="flex flex-col">
      <div className="bg-black flex justify-between items-center p-2">
        <div className="flex gap-2 items-center px-[100px]">
          <p
            className="bg-[#F3DE6D] text-[18px] px-4 py-2 "
            style={{ transform: "rotate(-2deg)" }}
          >
            Black
          </p>
          <p className="text-white text-[20px]">Friday</p>
        </div>
        <div className="flex items-center gap-2">
          <p className="text-[14px] text-white">Up to</p>
          <span className="text-[#EBC80C] text-[40px] ">59%</span>
          <p className="text-[20px] text-white">OFF</p>
        </div>
        <div className="flex items-center gap-2">
          <button className="bg-[#EBC80C] font-[700] px-6 py-2 flex items-center gap-2  ">
            Shop Now
            <span className="font-[700]">
              <IoIosArrowRoundForward size={25} />
            </span>
          </button>
        </div>
        <div className="bg-[#073741] p-2">
          <RxCross2 color="white" size={18} />
        </div>
      </div>
      {/* social media links  */}
      <div className="flex justify-between bg-[#073741] p-2 px-[120px] w-full ">
        <div>
          <p className="font-public-sans text-[14px] text-white">
            Welcome to Saudi online Shopping store
          </p>
        </div>
        <div className="flex items-center gap-5">
          <div className="flex items-center gap-3 text-white">
            <p className="text-[14px] font-public-sans">Follow us:</p>
            <FaTwitter size={14.4} />
            <FaFacebook size={14.4} />
            <PiPhosphorLogoThin size={14.4} />
            <FaReddit size={14.4} />
            <IoLogoYoutube size={14.4} />
            <FaInstagram size={14.4} />
          </div>
          <div className="h-[20px] w-[1px] bg-[#FFFFFF] mx-4"></div>
          <div className="flex items-center gap-2">
            {" "}
            <p className="text-[14px] text-white">ENG</p>
            <IoIosArrowDown size={14.4} color="#FFFFFF" />
          </div>
          <div className="flex items-center gap-1">
            <p className="text-[14px] text-white">SR</p>
            <IoIosArrowDown size={14.4} color="#FFFFFF" />
          </div>
        </div>
      </div>
      <hr className="border-gray-400" />
      <div className="bg-[#073741] p-2 px-[120px] flex items-center justify-between">
        <img src={Logo} width={87} height={48} alt="" />
        <div className="relative w-full max-w-lg">
          {" "}
          <input
            type="text"
            placeholder="Search for any thing....."
            className="border border-gray-300 py-2 pl-4 pr-10 w-full focus:outline-none focus:ring focus:ring-blue-500"
          />
          <div className="absolute right-3 top-1/2 transform -translate-y-1/2">
            <FaSearch className="text-black" />
          </div>
        </div>
        {/* for icons */}
        <div className="flex  items-center gap-4 position: relative">
          <IoCartOutline color="white" size={20.4} />
          <GrFavorite color="white" size={20.4} />
          <IoPersonOutline color="white" size={20.4} onClick={handleIconClick} />
          <LoginForm isOpen={isPopupOpen} onClose={() => setIsPopupOpen(false)} />
          </div>
      </div>
      

      <NavigationMenu />
    </div>
  );
};

export default Header;
