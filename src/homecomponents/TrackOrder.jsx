import { GoArrowRight } from "react-icons/go";
import { BsInfoCircle } from "react-icons/bs";
import { Link } from "react-router-dom";
import React from "react";

const TrackOrder = () => {
  return (
    <div className="w-full  max-w-[1920px] lg:h-[500px] pt-12 lg:pl-[135px] lg:pr-[465px] lg:pb-[124pgap-8     px-6 ">
      <div className="max-w-[1320px] h-auto lg:h-[240px] gap-6  ">
        <h1 className=" text-[32px] font-semibold  leading-[40px] text-center lg:text-left text-[#191C1F] font-public-sans   ">
          Track Order
        </h1>
        <p className="text-[16px] font-normal leading-[24px] text-left text-[#5F6C72] font-public-sans my-4 ">
          To track your order please enter your order ID in the input field
          below and press the “Track Order” button. This was given to you on
          your receipt and in the confirmation email you should have received.
        </p>
        <form className="grid grid-rows-1 gap-6 lg:grid-rows-1 lg:gap-[24px] w-full lg:w-[872px] sm:grid-cols-2">
          <div className="w-full">
            <label
              htmlFor="orderId"
              className="text-[14px] font-medium leading-[20px] text-left font-public-sans  text-[#191C1F] "
            >
              Order ID
            </label>

            <input
              id="orderId"
              type="text"
              placeholder="ID..."
              typeof="id"
              className="w-[424px] h-[44px] py-[12px]  pl-[16px] gap-[8px] rounded-tl-[2px] border-t border-[1px] border-[#E4E7E9]  bg-[#FFFFFF] flex items-center mt-1"
              required
            />
          </div>
          <div>
            <label
              htmlFor="emailAddress"
              className="text-[14px] font-medium leading-[20px] text-left font-public-sans  text-[#191C1F]"
            >
              Billing Email
            </label>
            <input
              id="emailAddress"
              type="email"
              placeholder="Email address"
              className="w-[424px] h-[44px] py-[12px]  pl-[16px] gap-[8px] rounded-tl-[2px] border-t border-[1px] border-[#E4E7E9]  bg-[#FFFFFF] flex items-center mt-1 "
              required
            />
          </div>
          <div className="flex col-span-1 gap-[6px] mb-1">
            <BsInfoCircle
              className="w-[22px] h-[21px] gap-0 top-[6.75px] left-[10.69px] text-gray-600 mr-2

"
            />
            <p className="text-[14px] font-normal leading-[20px] font-public-sans text-[#5F6C72]  ">
              {" "}
              Order ID that we sended to your on your email address.
            </p>
          </div>

          <div className="col-span-2">
            <Link
              to="/TrackOrderDetails"
              className=" w-[217px] h-[56px] px-[32px] py-[0px] gap-[12px] rounded-[3px]  bg-[#0B5D51] 
            flex items-center 
            "
            >
              <h6 className="font-public-sans text-[16px] font-bold leading-[56px] tracking-[0.012em] text-left text-white">
                {" "}
                TRACK ORDER
              </h6>

              <GoArrowRight className="w-[24px] h-[24px] text-white" />
            </Link>
          </div>
        </form>
      </div>
    </div>
  );
};

export default TrackOrder;
