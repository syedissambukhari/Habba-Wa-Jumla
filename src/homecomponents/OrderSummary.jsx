import React from "react";
import { IoIosArrowRoundForward } from "react-icons/io";
import headphones from "../assets/Headphone.png";
import portable from "../assets/LCD.png";

const OrderSummary = () => {
  return (
    <div className="w-[440px] h-[500px] border border-gray-400 flex flex-col p-4 gap-4 ml-10 mt-5">
      <h1 className="text-[18px] font-[500]">Order Summary</h1>

      {/* Item 1 */}
      <div className="flex items-center gap-1">
        <img src={portable} alt="" />
        <div className="flex flex-col">
          <p className="text-[14px]">
            Canon EOS 1500D DSLR Camera Body+ 18-...
          </p>
          <p>
            1 <span className="text-[14px] text-[#2DA5F3]">*$70</span>
          </p>
        </div>
      </div>

      {/* Item 2 */}
      <div className="flex items-center gap-1">
        <img src={headphones} alt="" />
        <div className="flex flex-col">
          <p className="text-[14px]">
            Canon EOS 1500D DSLR Camera Body+ 18-...
          </p>
          <p>
            1 <span className="text-[14px] text-[#2DA5F3]">*$70</span>
          </p>
        </div>
      </div>

      {/* Subtotals */}
      <div className="flex flex-col gap-2">
        <div className="flex items-center justify-between">
          <p className="text-[14px] text-[#5F6C72]">Subtotal</p>
          <p className="text-[14px]">$320</p>
        </div>
        <div className="flex items-center justify-between">
          <p className="text-[14px] text-[#5F6C72]">Shipping</p>
          <p className="text-[14px]">$10</p>
        </div>
        <div className="flex items-center justify-between">
          <p className="text-[14px] text-[#5F6C72]">Discount</p>
          <p className="text-[14px]">-$10</p>
        </div>
        <div className="flex items-center justify-between">
          <p className="text-[14px] text-[#5F6C72]">Tax</p>
          <p className="text-[14px]">$15</p>
        </div>
      </div>

      <hr className="border border-gray-300" />

      {/* Total */}
      <div className="flex items-center justify-between">
        <p className="text-[16px] text-[#5F6C72]">Total</p>
        <p className="text-[14px]">$357.99 USD</p>
      </div>
      <div className="mt-auto">
        <button className="bg-[#0B5D51] text-white font-[700] w-[248px] h-[48px] py-2 flex items-center justify-center">
          <span>Shop Now</span>
          <IoIosArrowRoundForward size={25} />
        </button>
      </div>
    </div>
  );
};

export default OrderSummary;
