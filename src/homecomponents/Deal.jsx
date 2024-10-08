import React from "react";
import watches from "../assets/watches.png";
import { FiShoppingCart } from "react-icons/fi";
import { FaArrowRight } from "react-icons/fa6";


import apple from "../assets/apple.png";
const Deal = () => {
  return (
    <div className="flex flex-col items-center justify-center mt-7 py-10 px-5 text-center border-4 border-[#0B5D51]">
      <div className="w-full h-20% flex  items-center justify-center">
        <img src={watches} alt="" className="w-[180px] h-[180px]"/>
      </div>
      <div className="flex flex-col gap-2 items-center justify-center ">
        <div className="flex mt-5 items-center justify-center">
          <img src={apple} alt="" />
        </div>
        <h2 className="text-[24px] font-bold text-[#191C1F]">Heavy on Features.
        Light on Price</h2>

        <div className="flex gap-2 items-center justify-center "> 
         <p className="text-[14px] text-[#475156]">Only for:</p>
         <div className="bg-[#F3DE6D] py-2 px-3 text-[16px] font-bold rounded-sm">
         $299 USD
         </div>
        </div>

        <div className="uppercase px-10 py-2 items-center justify-center border-2 border-[#0B5D51] bg-[#0B5D51] w-full text-white mt-5 flex gap-2">
            <FiShoppingCart size={20}/>
            Add to cart
        </div>
        <div className="uppercase items-center justify-center flex gap-2 px-10 py-2 border-2 border-[#0B5D51] text-[#0B5D51] w-full font-semibold">
            View details
            <FaArrowRight className="font-light" size={20}/>
        </div>

      </div>
    </div>
  );
};

export default Deal;
