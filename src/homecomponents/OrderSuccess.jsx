import React from "react";
import { FaArrowRight } from "react-icons/fa";
import { TiTick } from "react-icons/ti"; // Ensure react-icons is installed
import { BsStack } from "react-icons/bs";
const SuccessPage = () => {
  return (
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
  );
};

export default SuccessPage;
