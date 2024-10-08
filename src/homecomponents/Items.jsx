import React from "react";
import circle from "../assets/Circle.png";
import mobiles from "../assets/DuoMobile.png";
import { IoIosArrowRoundForward } from "react-icons/io";

const Items = () => {
  return (
    <div className="mt-[50px] grid grid-cols-12 justify-start space-x-4 px-[40px] ">
      <div className="col-span-6 bg-[#F2F4F5] flex justify-between items-center w-[648px] h-[336px] ">
        <div className="flex flex-col gap-4 items-center justify-center  h-full">
          {" "}
          <p className="text-white bg-[#2DA5F3] px-3 py-1">INTRODUCING</p>
          <h1 className="text-[32px] font-[600] text-center">
            {" "}
            New Apple <br /> Homepod Mini
          </h1>
          <p className="text-[#475156] text-[16px] leading-snug mb-4 px-3 text-center">
            {" "}
            Jam-packed with innovation, HomePod mini delivers unexpectedly.
          </p>
          <button className="bg-[#FA8232] text-white font-[700] w-[150px] h-[50px] py-2 flex items-center justify-center">
            <span>Shop Now</span>
            <IoIosArrowRoundForward size={25} />
          </button>
        </div>

        <div>
          <img src={circle} alt="" />
        </div>
      </div>

      <div className="col-span-6 bg-[#191C1F] flex justify-between items-center w-[648px] h-[336px]  ">
        <div className="flex flex-col gap-4 items-center justify-center  h-full">
          {" "}
          <p className="text-black bg-[#EFD33D] px-3 py-1">INTRODUCING</p>
          <h1 className="text-[32px]  text-white font-[600] text-center">
            {" "}
            Xiaomi Mi 11 Ultra <br />
            12GB+256GB
          </h1>
          <p className="text-[white] text-[16px] leading-snug mb-4 px-3 text-center">
            {" "}
            *Data provided by internal laboratories. Industry measurment.
          </p>
          <button className="bg-[#FA8232] text-white font-[700] w-[150px] h-[50px] py-2 flex items-center justify-center">
            <span>Shop Now</span>
            <IoIosArrowRoundForward size={25} />
          </button>
        </div>
        <div className="relative">
          <p
            className="absolute top-0 left-40 rounded-full text-white bg-[#2DA5F3] 
    p-4 w-[80px] h-[80px] flex items-center justify-center"
          >
            $590
          </p>
          <img src={mobiles} alt="" />
        </div>
      </div>
    </div>
  );
};

export default Items;
