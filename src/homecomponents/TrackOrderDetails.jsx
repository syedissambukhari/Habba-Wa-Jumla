import React from "react";
import { IoMdCheckmark } from "react-icons/io";
import {
  PiNotebook,
  PiPackageDuotone,
  PiTruckDuotone,
  PiHandshakeDuotone,
  PiChecks,
  PiUser,
  PiMapPinLine,
  PiMapTrifold,
  PiCheckCircle,
  PiNotepad,
} from "react-icons/pi";

const TrackOrderDetails = () => {
  return (
    <div className=" w-[984px] h-[796px] gap-0 rounded border-[1px] mx-auto my-10 ">
      {/* Order Info */}
      <div className="w-full h-[332px] p-6 gap-6 border-b-[1px]">
        <div
          className="  flex justify-between items-center w-[936px] h-[104px] px-[24px] gap-0 rounded-l-[4px] border-t border-l border-r border-b bg-[#FDFAE7] border-[#F7E99E]
     "
        >
          <div>
            <h1 className="font-sans  text-[20px] font-semibold leading-[28px] text-gray-900">
              #96459761
            </h1>
            <p className="mt-2 font-sans text-[14px] font-normal leading-[20px] text-gray-700">
              4 Products • Order Placed on 17 Jan, 2021 at 7:32 PM
            </p>
          </div>
          <h6 className="font-sans text-[28px] font-semibold leading-[32px] text-[#2DA5F3]">
            $1199.00
          </h6>
        </div>

        {/* Expected Arrival */}
        <p className="font-sans text-[14px] font-normal leading-[20px] text-left  text-gray-700 my-4 ">
          Order expected arrival{" "}
          <span className="font-sans font-[500] text-gray-900">
            23 Jan, 2021
          </span>
        </p>
        <div className="flex flex-col items-center gap-6 w-[936px] h-[112px] mt-6">
          {/* Progress Circles and Line */}
          <div className="relative w-[702px]  flex items-center justify-between">
            {/* Full Progress Line */}
            <div className="absolute w-full    transform -translate-y-1/2 h-[8px] top-1/2  gap-0 rounded-[100px_0_0_0] bg-[#FFE7D6]">
              <div className="w-[234px] h-full bg-[#0B5D51] rounded-full"></div>
            </div>

            {/* Order Placed - Checked */}

            <div className="relative z-10 flex flex-col items-center">
              <IoMdCheckmark className="text-white text-[12px] leading-[12px] top-[6px] absolute " />
              <div className="w-6 h-6 rounded-full bg-[#0B5D51]  "></div>
            </div>

            {/* Packaging - Current Step */}
            <div className="relative z-10 flex flex-col items-center">
              <div className="w-6 h-6 rounded-full bg-[#0B5D51] border-2"></div>
            </div>

            {/* On The Road - Future Step */}
            <div className="relative z-10 flex flex-col items-center">
              <div className="w-6 h-6 rounded-full bg-white border-2 border-[#0B5D51] "></div>
            </div>

            {/* Delivered - Future Step */}
            <div className="relative z-10 flex flex-col items-center">
              <div className="w-6 h-6 rounded-full bg-white border-2 border-[#0B5D51]"></div>
            </div>
          </div>

          {/* Labels for Each Step */}
          <div className=" w-[770px] h-[64px] flex items-center justify-between ">
            <div className="flex flex-col items-center ">
              <PiNotebook className="text-[#2DB224] h-8 w-8 mb-3" />
              <span className="text-gray-900 text-[14px] font-sans font-[600] ">
                Order Placed
              </span>
            </div>

            <div className="flex flex-col items-center">
              <PiPackageDuotone className="text-[#0B5D51] h-8 w-8 mb-3 mr-2" />
              <span className="text-gray-900 text-[14px] font-sans font-[600]">
                Packaging
              </span>
            </div>

            <div className="flex flex-col items-center">
              <PiTruckDuotone className="text-[#93c6bd] h-8 w-8 mb-3 mr-2" />
              <span className="text-gray-400 text-[14px] font-sans font-[600]">
                On The Road
              </span>
            </div>

            <div className="flex flex-col items-center">
              <PiHandshakeDuotone className="text-[#93c6bd] h-8 w-8 mb-3 mr-2" />
              <span className="text-gray-400 text-[14px] font-sans font-[600] mr-3">
                Delivered
              </span>
            </div>
          </div>
        </div>
      </div>

      {/* Order Activity */}
      <div className=" p-6 gap-6 w-[984px] h-[464px">
        <h3 className="text-[18px] font-sans font-semibold leading-6 text-gray-900">
          Order Activity
        </h3>
        <div className="w-[936px] h-[368px] gap-4 mt-4">
          {/* Delivered */}
          <div className="flex items-start space-x-3">
            <div className="w-[48px] h-[48px] p-[12px_0_0_0] gap-[10px] rounded-[2px_0_0_0]   border-[1px]   bg-[#EAF7E9] border-[#D5F0D3]">
              <PiChecks className="text-[#2DB224] w-6 h-6 ml-2.5 " />
            </div>
            <div>
              <p className="font-[500] font-sans text-[14px] leading-5 text-gray-900">
                Your order has been delivered. Thank you for shopping at Clicon!
              </p>
              <p className="font-normal font-sans text-[14px] leading-5 text-gray-500">
                23 Jan, 2021 at 7:32 PM
              </p>
            </div>
          </div>

          {/* Picked for Delivery */}
          <div className="flex items-start space-x-3 mt-4">
            <div className="w-[48px] h-[48px] p-[12px_0_0_0] gap-[10px] rounded-[2px_0_0_0]   border-[1px]   bg-[#EAF7E9] border-[#D5F0D3]">
              <PiUser className="text-[#2DA5F3] w-6 h-6 ml-2.5" />
            </div>
            <div>
              <p className="font-[500] font-sans text-[14px] leading-5 text-gray-900">
                Our delivery man (John Wick) has picked-up your order for
                delivery.
              </p>
              <p className="font-normal font-sans text-[14px] leading-5 text-gray-500">
                23 Jan, 2021 at 2:00 PM
              </p>
            </div>
          </div>

          {/* Last Mile Hub */}
          <div className="flex items-center space-x-3 mt-4">
            <div className="w-[48px] h-[48px] p-[12px_0_0_0] gap-[10px] rounded-[2px_0_0_0]   border-[1px]   bg-[#EAF7E9] border-[#D5F0D3]">
              <PiMapPinLine className="text-[#2DA5F3]  w-6 h-6 ml-2.5 " />
            </div>
            <div>
              <p className="font-[500] font-sans text-[14px] leading-5 text-gray-900">
                Your order has reached at last mile hub.
              </p>
              <p className="font-normal font-sans text-[14px] leading-5 text-gray-500">
                22 Jan, 2021 at 8:00 AM
              </p>
            </div>
          </div>

          {/* On the way */}
          <div className="flex items-start space-x-3 mt-4">
            <div className="w-[48px] h-[48px] p-[12px_0_0_0] gap-[10px] rounded-[2px_0_0_0]   border-[1px]   bg-[#EAF7E9] border-[#D5F0D3]">
              <PiMapTrifold className="text-[#2DA5F3]  w-6 h-6 ml-2.5" />
            </div>
            <div>
              <p className="font-[500] font-sans text-[14px] leading-5 text-gray-900">
                Your order on the way to (last mile) hub.
              </p>
              <p className="font-normal font-sans text-[14px] leading-5 text-gray-500">
                21 Jan, 2021 at 5:32 AM
              </p>
            </div>
          </div>

          {/* Successfully Verified */}
          <div className="flex items-start space-x-3 mt-4">
            <div className="w-[48px] h-[48px] p-[12px_0_0_0] gap-[10px] rounded-[2px_0_0_0]   border-[1px]   bg-[#EAF7E9] border-[#D5F0D3]">
              <PiCheckCircle className="text-[#2DB224] w-6 h-6 ml-2.5" />
            </div>
            <div>
              <p className="font-[500] font-sans text-[14px] leading-5 text-gray-900">
                Your order is successfully verified.
              </p>
              <p className="font-normal font-sans text-[14px] leading-5 text-gray-500">
                20 Jan, 2021 at 7:32 PM
              </p>
            </div>
          </div>

          {/* Order Confirmed */}
          <div className="flex items-start space-x-3 mt-4">
            <div className="w-[48px] h-[48px] p-[12px_0_0_0] gap-[10px] rounded-[2px_0_0_0]   border-[1px]   bg-[#EAF7E9] border-[#D5F0D3]">
              <PiNotepad className="text-[#2DA5F3]  w-6 h-6 ml-2.5" />
            </div>
            <div>
              <p className="font-[500] font-sans text-[14px] leading-5 text-gray-900">
                Your order has been confirmed.
              </p>
              <p className="font-normal font-sans text-[14px] leading-5 text-gray-500">
                19 Jan, 2021 at 2:61 PM
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TrackOrderDetails;
