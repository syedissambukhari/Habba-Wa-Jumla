import React, { useState, useEffect, useRef } from "react";
import { IoIosArrowRoundForward } from "react-icons/io";
import { RxCross2 } from "react-icons/rx";
import { FaTwitter, FaFacebook, FaInstagram, FaReddit } from "react-icons/fa";
import { PiPhosphorLogoThin } from "react-icons/pi";
import { IoLogoYoutube, IoIosArrowDown } from "react-icons/io";
import { FaSearch } from "react-icons/fa";
import { IoCartOutline } from "react-icons/io5";
import { GrFavorite } from "react-icons/gr";
import { IoPersonOutline } from "react-icons/io5";
import NavigationMenu from "./NavigationMenu";
import Logo from "../assets/logo-2.png";
import LoginForm from "./LoginForm";
import { Link, useNavigate } from "react-router-dom";
import { Cartpopup } from "./Cartpopup";
import { FaCheck } from "react-icons/fa6";

// Import country map images
import usMap from "../assets/usimage.png"; // Replace with actual paths
import saMap from "../assets/saudiflag.png"; // Replace with actual paths

const Header = () => {
  const [isPopupOpen, setIsPopupOpen] = useState(false);
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [isLanguageOpen, setIsLanguageOpen] = useState(false);
  const [isCurrencyOpen, setIsCurrencyOpen] = useState(false);
  const [language, setLanguage] = useState("ENG");
  const [currency, setCurrency] = useState("SR");

  const popupRef = useRef(null); // Reference for the login popup
  const cartRef = useRef(null); // Reference for the cart popup

  // const navigate = useNavigate();

  const handleCartClick = () => {
    setIsCartOpen(!isCartOpen);
  };

  const handleIconClick = () => {
    setIsPopupOpen(!isPopupOpen);
  };

  const toggleLanguageDropdown = () => {
    setIsLanguageOpen(!isLanguageOpen);
  };

  const selectLanguage = (lang) => {
    setLanguage(lang);
    setIsLanguageOpen(false);
  };

  const toggleCurrencyDropdown = () => {
    setIsCurrencyOpen(!isCurrencyOpen);
  };

  const selectCurrency = (curr) => {
    setCurrency(curr);
    setIsCurrencyOpen(false);
  };

  // Close popups when clicking outside
  useEffect(() => {
    function handleClickOutside(event) {
      if (popupRef.current && !popupRef.current.contains(event.target)) {
        setIsPopupOpen(false);
      }
      if (cartRef.current && !cartRef.current.contains(event.target)) {
        setIsCartOpen(false);
      }
    }

    // Add event listener
    document.addEventListener("mousedown", handleClickOutside);

    // Clean up the event listener on unmount
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <div className="flex flex-col">
      <div className="bg-black flex justify-between items-center p-2">
        <div className="flex gap-2 items-center px-[100px]">
          <p
            className="bg-[#F3DE6D] text-[18px] px-4 py-2"
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
          <button className="bg-[#EBC80C] font-[700] px-6 py-2 flex items-center gap-2">
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

      {/* Social Media Links */}
      <div className="flex justify-between bg-[#073741] p-2 px-[120px] w-full">
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

          {/* Language Dropdown */}
          <div className="relative">
            <div
              className="flex items-center gap-2 cursor-pointer"
              onClick={toggleLanguageDropdown}
            >
              <p className="text-[14px] text-white">{language}</p>
              <IoIosArrowDown size={14.4} color="#FFFFFF" />
            </div>

            {isLanguageOpen && (
              <div
                className="absolute bg-white text-black rounded mt-2 shadow-lg z-10"
                style={{
                  width: "180px",
                  height: "88px",
                  top: "46px",
                  left: "-136px",
                  padding: "8px 0",
                  border: "1px solid #E4E7E9",
                  boxShadow: "0px 8px 40px rgba(0, 0, 0, 0.12)",
                  borderRadius: "3px 0px 0px 0px",
                  opacity: "1",
                }}
              >
                <div
                  className="flex items-center gap-2 p-2 hover:bg-gray-200 cursor-pointer"
                  onClick={() => selectLanguage("ENG")}
                >
                  <img
                    src={usMap}
                    alt="US Map"
                    className="w-5 h-5 border border-[#E4E7E9] rounded-full"
                  />
                  <p className="text-[14px] flex-1">English</p>
                  <FaCheck />
                </div>
                <div
                  className="flex items-center gap-2 p-2 hover:bg-gray-200 cursor-pointer"
                  onClick={() => selectLanguage("ARB")}
                >
                  <img
                    src={saMap}
                    alt="Saudi Arabia Map"
                    className="w-5 h-5 border border-[#E4E7E9] rounded-full"
                  />
                  <p className="text-[14px] flex-1">Arabic</p>
                </div>
              </div>
            )}
          </div>

          {/* Currency Dropdown */}
          <div className="relative ml-4">
            <div
              className="flex items-center gap-2 cursor-pointer"
              onClick={toggleCurrencyDropdown}
            >
              <p className="text-[14px] text-white">{currency}</p>
              <IoIosArrowDown size={14.4} color="#FFFFFF" />
            </div>

            {isCurrencyOpen && (
              <div
                className="absolute bg-white text-black rounded mt-2 shadow-lg z-10"
                style={{
                  width: "180px",
                  height: "88px",
                  top: "46px",
                  left: "-136px",
                  padding: "8px 0",
                  border: "1px solid #E4E7E9",
                  boxShadow: "0px 8px 40px rgba(0, 0, 0, 0.12)",
                  borderRadius: "3px 0px 0px 0px",
                  opacity: "1",
                }}
              >
                <div
                  className="flex items-center gap-2 p-2 hover:bg-gray-200 cursor-pointer"
                  onClick={() => selectCurrency("SR")}
                >
                  <p className="text-[14px] flex-1">SAUDI RIYAL (SR)</p>
                  <FaCheck />
                </div>
                <div
                  className="flex items-center gap-2 p-2 hover:bg-gray-200 cursor-pointer"
                  onClick={() => selectCurrency("AED")}
                >
                  <p className="text-[14px] flex-1">UAE DIRHAM (AED)</p>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>

      <hr className="border-gray-400" />

      <div className="bg-[#073741] h-20 px-[100px]">
        <div className="flex justify-between items-center">
          <Link to="/">
            <img src={Logo} alt="Logo" className="h-16 w-auto" />
          </Link>

          {/* Search Bar */}
          <div className="relative">
            <input
              type="text"
              className="pl-4 pr-10 py-2 border border-gray-300 rounded w-[300px] h-[40px] focus:outline-none"
              placeholder="Search for products"
            />
            <FaSearch
              size={20}
              color="#999999"
              className="absolute top-2 right-2"
            />
          </div>

          {/* Cart, Wishlist, and Login Icons */}
          <div className="flex items-center gap-4 position: relative">
            <IoCartOutline color="white" size={20.4} onClick={handleCartClick} />
            <Link to="/Wishlist">
              <GrFavorite color="white" size={20.4} />
            </Link>
            <IoPersonOutline color="white" size={20.4} onClick={handleIconClick} />

            {/* Popup for LoginForm */}
            <div ref={popupRef}>
              <LoginForm
                isOpen={isPopupOpen}
                onClose={() => setIsPopupOpen(false)}
              />
            </div>

            {/* Popup for Cart */}
            <div ref={cartRef}>
              <Cartpopup
                isOpen={isCartOpen}
                onClose={() => setIsCartOpen(false)}
              />
            </div>
          </div>
        </div>
      </div>

      <NavigationMenu />
    </div>
  );
};

export default Header;
