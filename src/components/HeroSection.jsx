import React from "react";
import image from "../assets/Image.png";
import { IoIosArrowRoundForward } from "react-icons/io";

const HeroSection = () => {
  return (
    <div className="mt-4 grid grid-cols-12 justify-between mx-auto w-[1320px] h-[520px]">
      {/* Left side section (Text and button) */}
      <div className="col-span-8 bg-slate-200 flex items-center justify-between relative p-8">
        {/* Padding added with p-8 for left spacing */}

        {/* Text content */}
        <div className="flex flex-col gap-6 w-[356px] h-[224px]">
          <div className="flex gap-1 items-center">
            <div className="h-[1px] w-[25px] border-[2px] border-[#2DA5F3] mx-4"></div>
            <p className="text-[14px] font-[600] text-[#24B4C2]">
              THE BEST PLACE TO PLAY
            </p>
          </div>

          {/* Heading */}
          <h1 className="text-[48px] font-[600]">Xbox Consoles</h1>

          {/* Description */}
          <p className="text-[18px]">
            Save up to 50% on select Xbox games. Get 3 months of PC Game Pass
            for $2 USD.
          </p>

          {/* Button - Set full width */}
          <button className="bg-[#073741] text-white font-[700]  w-[191px] h-[56px] py-2 flex items-center justify-between px-4">
            <span>Shop Now</span>
            <IoIosArrowRoundForward size={25} />
          </button>
        </div>

        {/* Image Section */}
        <div className="ml-6">
          {" "}
          {/* Added margin-left for space between text and image */}
          <img src={image} alt="Xbox Console" className="w-auto h-auto" />{" "}
          {/* Adjusted the image */}
        </div>

        {/* Absolute Circle */}
        <div className="absolute top-4 right-5 bg-[#2DA5F3] rounded-full w-[101px] h-[101px] flex items-center justify-center text-white font-[700]">
          <span className="text-[22px]">$299</span>
        </div>
      </div>

      {/* Right side section */}
      <div className=" mx-4 col-span-4 flex flex-col  gap-3">
        <div className="bg-black flex">
          <div className="flex flex-col ">
            <p className="bg-[#EBC80C] text-[14px]">SUMMER SALES</p>
            <h4 className="text-white text-[24px]">
              New Google <br />
              Pixel 6 Pro
            </h4>
            <button className="bg-[#073741] text-white font-[700]  w-[191px] h-[56px] py-2 flex items-center justify-between px-4">
              <span>Shop Now</span>
              <IoIosArrowRoundForward size={25} />
            </button>
          </div>
          <div>
            <img src={image} alt="" />
          </div>
        </div>
        <div className="bg-slate-200 flex">
          <div className="flex flex-col ">
            <p className="bg-[#EBC80C] text-[14px]">SUMMER SALES</p>
            <h4 className="text-white text-[24px]">
              New Google <br />
              Pixel 6 Pro
            </h4>
            <button className="bg-[#073741] text-white font-[700]  w-[191px] h-[56px] py-2 flex items-center justify-between px-4">
              <span>Shop Now</span>
              <IoIosArrowRoundForward size={25} />
            </button>
          </div>
          <div>
            <img src={image} alt="" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
