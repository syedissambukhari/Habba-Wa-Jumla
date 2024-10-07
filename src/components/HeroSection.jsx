import React from "react";
import image from "../assets/Image.png";
import mobile from "../assets/Mobile.png";
import { IoIosArrowRoundForward } from "react-icons/io";
import { BsTrophy } from "react-icons/bs";
import { CiCreditCard1 } from "react-icons/ci";
import { LuPackageCheck } from "react-icons/lu";
import headphone from "../assets/Headphone.png";
import { CiHeadphones } from "react-icons/ci";

const HeroSection = () => {
  return (
    <div className="mt-4 grid grid-cols-12 justify-between mx-auto px-[40px]">
      <div className="col-span-8 bg-[#F2F4F5] flex items-center justify-between relative p-8 rounded-md">
        <div className="flex flex-col gap-6 w-[356px] h-[224px]">
          <div className="flex gap-1 items-center">
            <div className="h-[1px] w-[25px] border-[2px] border-[#2DA5F3] mx-4"></div>
            <p className="text-[14px] font-[600] text-[#24B4C2]">
              THE BEST PLACE TO PLAY
            </p>
          </div>

          <h1 className="text-[48px] font-[600]">Xbox Consoles</h1>

          <p className="text-[18px]">
            Save up to 50% on select Xbox games. Get 3 months of PC Game Pass
            for $2 USD.
          </p>
          <button className="bg-[#073741] text-white font-[700] w-[150px] h-[70px] py-3 flex items-center justify-center">
            <span>Shop Now</span>
            <IoIosArrowRoundForward size={25} />
          </button>
        </div>

        <div className="ml-6">
          {" "}
          <img src={image} alt="Xbox Console" className="w-auto h-auto" />{" "}
        </div>

        <div className="absolute top-4 right-5 bg-[#2DA5F3] rounded-full w-[101px] h-[101px] flex items-center justify-center text-white font-[700]">
          <span className="text-[22px]">$299</span>
        </div>
      </div>

      <div className="mx-4 col-span-4 flex flex-col gap-4 ">
        <div className="bg-black flex h-[280px] rounded-md">
          <div className="flex flex-col justify-center w-[200px] px-[20px]">
            <p className="text-[#EBC80C] text-[14px]">SUMMER SALES</p>
            <h4 className="text-white text-[24px]">
              New Google <br />
              Pixel 6 Pro
            </h4>

            <button className="bg-[#FA8232] text-white font-[700] w-[150px] h-[50px] py-2 flex items-center justify-center">
              <span>Shop Now</span>
              <IoIosArrowRoundForward size={25} />
            </button>
          </div>
          <div className="flex flex-col justify-end relative">
            <img src={mobile} alt="" className="h-full object-contain" />
            <p className="bg-[#EFD33D] text-[16px] p-2 absolute top-[30px] left-[120px] transform -translate-x-1/2">
              29% OFF
            </p>{" "}
          </div>
        </div>
        <div className="bg-[#F2F4F5] flex h-[280px] rounded-md">
          <div className="flex items-center">
            <img src={headphone} alt="" />
          </div>
          <div className="flex flex-col justify-center px-4 ">
            <h4 className="text-black font-[600] text-[24px]">
              Xiaomi <br />
              FlipBuds Pro
            </h4>
            <p className="text-[#2DA5F3] text-[18px]">$299 USD</p>
            <button className="bg-[#FA8232] text-white font-[700] w-[150px] h-[50px] py-2 flex items-center justify-center">
              <span>Shop Now</span>
              <IoIosArrowRoundForward size={25} />
            </button>
          </div>
        </div>
      </div>
      <div className="mt-6 grid grid-cols-4 gap-8 mx-auto w-[1250px] items-center  p-3 border border-[#E4E7E9]">
        <div className="flex gap-2 items-center border-r border-gray-300 pr-4">
          <LuPackageCheck size={22.4} />
          <div className="flex flex-col">
            <h6 className="text-[14px] font-[500]">Fastest Delivery</h6>
            <p>Delivery in 24/H</p>
          </div>
        </div>
        <div className="flex gap-2 items-center border-r border-gray-300 pr-4">
          <BsTrophy size={22.4} />

          <div className="flex flex-col">
            <h6>24 HOURS RETURN</h6>
            <p>100% money-back guarantee</p>
          </div>
        </div>
        <div className="flex gap-2 items-center border-r border-gray-300 pr-4">
          <CiCreditCard1 size={22.4} />
          <div className="flex flex-col">
            <h6>SECURE PAYMENT</h6>
            <p>Your money is safe</p>
          </div>
        </div>
        <div className="flex gap-2 items-center">
          <CiHeadphones size={22.4} />
          <div className="flex flex-col">
            <h6>SUPPORT 24/7</h6>
            <p>Live contact/message</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
