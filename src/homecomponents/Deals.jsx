import React from "react";
import { IoIosArrowRoundForward } from "react-icons/io";
import DealItems from "./DealItems";
import { Link } from "react-router-dom";

const Deals = () => {
  return (
    <div className="mt-[50px]  flex flex-col justify-between gap-5  px-[40px]">
      <div className="flex justify-between">
        <div className="flex items-center gap-4">
          <h6 className="text-[24px] font-[600]">Best Deals</h6>
          <p className="text-[14px] font-[400]">Deals ends in</p>
          <p className="bg-[#F3DE6D] px-3 py-1 text-[16px]">
            {" "}
            16d : 21h : 57m: 23s
          </p>
        </div>
        <div className="flex items-center gap-2">
          <Link className="text-[#2DA5F3] text=[14px]" to={"/shop"}>Browse All Product</Link>
          <IoIosArrowRoundForward size={25} color="#2DA5F3" />
        </div>
      </div>
      <DealItems />
    </div>
  );
};

export default Deals;
