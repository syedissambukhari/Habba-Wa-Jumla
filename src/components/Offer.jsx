import React from "react";
import { IoIosArrowRoundForward } from "react-icons/io";
import macbook from "../assets/Macbook.png";
const Offer = () => {
  return (
    <div className="mt-[50px]  flex items-center justify-between mx-[40px] bg-[#FFE7D6]">
      <div className="px-[50px] py-[50px] flex justify-start space-x-4">
        <div className="flex flex-col gap-4">
          <p className="text-white bg-[#2DA5F3] w-[165px] h-[32px]  flex items-center">
            SAVE UP TO $200.00
          </p>
          <h1 className="text-[48px] font-[600]">Macbook Pro</h1>
          <p className="text-[24px]">
            Apple M1 Max Chip. 32GB Unified <br /> Memory, 1TB SSD Storage
          </p>
          <button className="bg-[#FA8232] text-white font-[700] w-[191px] h-[56px] py-2 flex items-center justify-center">
            <span>Shop Now</span>
            <IoIosArrowRoundForward size={25} />
          </button>
        </div>
      </div>
      <div className="relative">
        <p
          className="absolute top-10 left-2 bg-[#FFCEAD] 
                rounded-full border border-white 
                p-4 w-[80px] h-[80px] 
                flex items-center justify-center 
                text-center text-black" // Add text color for better visibility
        >
          $1999
        </p>
        <img src={macbook} alt="" />
      </div>
    </div>
  );
};

export default Offer;
