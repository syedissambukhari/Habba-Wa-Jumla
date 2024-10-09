import React from "react";
import { IoIosArrowForward, IoIosArrowRoundForward } from "react-icons/io";
import { FaApple, FaGooglePlay } from "react-icons/fa";
import google from "../assets/Google.png";
import samsung from "../assets/Samsung.png";
import toshiba from "../assets/Toshiba.png";
import philps from "../assets/Philips.png";
import amazon from "../assets/Amazonn.png";
import logo from "../assets/logo-2.png";

const Footer = () => {
  return (
    <div className="mt-[50px] bg-[#073741] flex flex-col gap-10">
      <div className="py-[80px] text-white flex flex-col justify-center items-center">
        <h2 className="text-[32px] font-[600] text-center">
          Subscribe to our newsletter
        </h2>
        <p className="text-center">
          Praesent fringilla erat a lacinia egestas. Donec vehicula tempor
          libero <br /> et cursus. Donec non quam urna. Quisque vitae porta
          ipsum.
        </p>
        <div className="bg-[#073741] p-2 w-full max-w-lg mt-4">
          <div className="bg-white p-1  shadow-md w-full flex justify-between items-center">
            <input
              type="text"
              placeholder="Email Address"
              className="p-1 w-full mr-4 outline-none focus:outline-none" // Remove outline on focus
            />
            <button className="bg-[#0B5D51] text-white font-[700] flex items-center px-4 py-2">
              <span>Subscribe</span>
              <IoIosArrowRoundForward size={20} className="ml-2" />
            </button>
          </div>
        </div>
        <div className="flex items-center gap-3 text-[#FFFFFF] mt-6">
          <img src={google} alt="" />
          <img src={amazon} alt="" />
          <img src={philps} alt="" />
          <img src={toshiba} alt="" />
          <img src={samsung} alt="" />
        </div>
      </div>

      {/* Footer Columns */}
      <div className="flex justify-around items-start gap-10">
        {/* Column 1 */}
        <div className="flex flex-col gap-4 self-start">
          <img src={logo} width={177} height={48} alt="" />
          <p className="text-[14px] text-[#77878F]">Customer Supports</p>
          <p className="text-[18px] text-white">(629) 555-0129</p>
          <p className="text-[16px] text-[#77878F]">
            4517 Washington Ave.
            <br /> Manchester, Kentucky 39495
          </p>
          <p className="text-[16px] text-white">info@kinbo.com</p>
        </div>

        {/* Column 2 */}
        <div className="flex flex-col gap-4 self-start">
          <h1 className="text-[16px] font-[500] text-[#FFFFFF]">
            Top Category
          </h1>
          <p className="text-[#929FA5] text-[14px]">Computer & Laptop</p>
          <p className="text-[#929FA5] text-[14px]">SmartPhone</p>
          <p className="text-[#929FA5] text-[14px]">Headphone</p>
          <p className="text-[#929FA5] text-[14px]">Accessories</p>
          <p className="text-[#929FA5] text-[14px]">Camera & Phot</p>
          <p className="text-[#929FA5] text-[14px]">TV & Homes</p>
          <button className="flex gap-3 bg-black text-[#EBC80C] items-center px-3 py-2 mt-2">
            Browse All Product
            <IoIosArrowRoundForward size={25} />
          </button>
        </div>

        {/* Column 3 */}
        <div className="flex flex-col gap-4 self-start">
          <h1 className="text-[16px] font-[500] text-[#FFFFFF]">Quick Links</h1>
          <p className="text-[#929FA5] text-[14px]">Shop Product</p>
          <p className="text-[#929FA5] text-[14px]">Shopping Cart</p>
          <p className="text-[#929FA5] text-[14px]">Wishlist</p>
          <p className="text-[#929FA5] text-[14px]">Compare</p>
          <p className="text-[#929FA5] text-[14px]">Track Order</p>
          <p className="text-[#929FA5] text-[14px]">Customer Help</p>
          <p className="text-[#929FA5] text-[14px]">About us</p>
        </div>

        {/* Column 4 */}
        <div className="flex flex-col gap-4 self-start">
          <h1 className="text-[16px] font-[500] text-[#FFFFFF]">
            Download APP
          </h1>
          <button className="flex items-center gap-2">
            <FaGooglePlay color="white" size={20.4} />
            <div className="flex flex-col">
              <span className="text-[11px] text-[#FFFFFF]">Get it now</span>
              <span className="text-[14px] text-[#FFFFFF]">Google Play</span>
            </div>
          </button>
          <button className="flex items-center gap-2">
            <FaApple color="white" size={20.4} />
            <div className="flex flex-col">
              <span className="text-[11px] text-[#FFFFFF]">Get it now</span>
              <span className="text-[14px] text-[#FFFFFF]">Apple Store</span>
            </div>
          </button>
        </div>

        {/* Column 5 */}
        <div className="flex flex-col gap-4 self-start">
          <h1 className="text-[16px] font-[500] text-[#FFFFFF]">
            Popular Tags
          </h1>
          <div className="flex flex-wrap gap-4">
            <p className="text-[#FFFFFF] text-[14px]">Game</p>
            <p className="text-[#FFFFFF] text-[14px]">iPhone</p>
            <p className="text-[#FFFFFF] text-[14px]">TV</p>
            <p className="text-[#FFFFFF] text-[14px]">Asus Laptops</p>
            {/* Repeat similar tags */}
          </div>
          <div className="flex flex-wrap gap-3">
            <p className="text-[#FFFFFF] text-[14px]">Macbook </p>
            <p className="text-[#FFFFFF] text-[14px]">iPhone</p>
            <p className="text-[#FFFFFF] text-[14px]">Graphics Card </p>

            {/* Repeat similar tags */}
          </div>
          <div className="flex flex-wrap gap-3">
            <p className="text-[#FFFFFF] text-[14px]">Power Bank</p>
            <p className="text-[#FFFFFF] text-[14px]">Smart TV</p>
            <p className="text-[#FFFFFF] text-[14px]">Speaker</p>

            {/* Repeat similar tags */}
          </div>
          <div className="flex flex-wrap gap-3">
            <p className="text-[#FFFFFF] text-[14px]">Tablet</p>
            <p className="text-[#FFFFFF] text-[14px]">Microwave</p>
            <p className="text-[#FFFFFF] text-[14px]">Samsung</p>

            {/* Repeat similar tags */}
          </div>
        </div>
      </div>
      <div className="mb-8 mt-8">
        <p className="text-[14px] text-[#ADB7BC] text-center ">
          Kinbo - eCommerce Template © 2021. Design by Templatecookie
        </p>
      </div>
    </div>
  );
};

export default Footer;
