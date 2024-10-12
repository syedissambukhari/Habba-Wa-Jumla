import React from "react";

export const Cartpopup = ({ isOpen, onClose }) => {
  if (isOpen)
    return (
      <div className="w-[312px] h-[400px] top-[60px] right-[-75px] z-50 absolute bg-white p-4 shadow-lg rounded-lg">
        <div className="border-b pb-2 mb-4">
          <h2 className="text-lg font-semibold">Shopping Cart (02)</h2>
        </div>

        <div className="space-y-4">
          <div className="flex items-center justify-between">
            <img
              src="https://via.placeholder.com/50"
              alt="Canon Camera"
              className="w-12 h-12 object-cover"
            />
            <div className="flex-1 ml-4">
              <p>Canon EOS 1500D DSLR Camera Body+ 18-55 mm</p>
              <p className="text-sm">
                1 x <span className="text-green-600 font-semibold">$1,500</span>
              </p>
            </div>
            <button className="text-gray-400 hover:text-gray-600">
              &times;
            </button>
          </div>

          <div className="flex items-center justify-between">
            <img
              src="https://via.placeholder.com/50"
              alt="Headphones"
              className="w-12 h-12 object-cover "
            />
            <div className="flex-1 ml-4">
              <p>Simple Mobile 5G LTE Galaxy 12 Mini 512GB Gaming Phone</p>
              <p className="text-sm">
                2 x <span className="text-green-600 font-semibold">$269</span>
              </p>
            </div>
            <button className="text-gray-400 hover:text-gray-600">
              &times;
            </button>
          </div>
        </div>

        {/* Subtotal and Buttons */}
        <div className="mt-4">
          <div className="flex justify-between mb-4">
            <span className="text-gray-600">Sub-Total:</span>
            <span className="font-bold">$2038.00 USD</span>
          </div>

          <button className="w-full bg-[#0B5D51] text-white py-2  hover:bg-gray-400 mb-2">
            CHECKOUT NOW &rarr;
          </button>
          <button className="w-full border border-[#0B5D51] text-[#0B5D51] py-2  hover:bg-green-50">
            VIEW CART
          </button>
        </div>
      </div>
    );
};
