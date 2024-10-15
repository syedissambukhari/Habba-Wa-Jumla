import React from "react";
import { FaArrowRight } from "react-icons/fa";
import { TiTick } from "react-icons/ti"; // Ensure react-icons is installed
import { BsStack } from "react-icons/bs";
import { AiOutlineHome } from "react-icons/ai";
import { FaAngleRight } from "react-icons/fa6";
const SuccessPage = () => {
  return (
    <>
      <div className="flex flex-col ">
        <div className="bg-[#F2F4F5] flex items-center gap-3 px-[120px] p-3">
          <div className="flex gap-2 items-center">
            <AiOutlineHome color="#5F6C72" />
            <p className="text-[#5F6C72]">Home</p>
          </div>
          <div className="flex gap-3 items-center">
            <FaAngleRight color="#5F6C72" />
            <p className="text-[#5F6C72]">Shopping Cart</p>
          </div>
          <div className="flex gap-3 items-center">
            <FaAngleRight color="#5F6C72" />
            <p className="text-[#5F6C72]">Checkout</p>
          </div>
        </div>
        <div className="flex items-center justify-center min-h-screen">
          <div className="p-6 text-center">
            <div className="mb-4 flex items-center justify-center w-20 h-20 border-4 border-green-500 rounded-full mx-auto">
              <TiTick className="text-green-500 text-5xl" />
            </div>
            <h2 className="text-2xl font-bold mb-2">
              Your order is successfully placed
            </h2>
            <p className="text-gray-700 mb-6 max-w-96 mx-auto">
              Pellentesque sed lectus nec tortor tristique accumsan quis dictum
              risus. Donec volutpat mollis nulla non facilisis.
            </p>
            <div className="flex justify-center space-x-4">
              <button className=" flex gap-1 items-center border border-[#FFE7D6] text-[#0B5D51] py-2 px-4">
                <span>
                  <BsStack />
                </span>
                Go to Dashboard
              </button>
              <button
                className="bg-[#0B5D51]
 py-2 px-4  flex items-center text-white "
              >
                View Order <FaArrowRight className="ml-2" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default SuccessPage;
