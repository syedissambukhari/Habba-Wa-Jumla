import React, { useState } from "react";
import { FaArrowLeftLong } from "react-icons/fa6";

const EditCustomerAdmin = () => {
  const [publicInfo, setPublicInfo] = useState(true);
  const [availableToHire, setAvailableToHire] = useState(false);

  return (
    <div className="flex flex-col justify-center p-6 w-full ">
      <div
        className="bg-white w-[1384px] h-[973px] absolute top-[63.58px] left-[296.04px] 
        pt-[64.41px] pr-[124.04px] pb-[64.26px] pl-[107.95px]"
      >
        {/* Arrow and Customers aligned to the left but inside the parent div */}
        <div className=" ml-28">
          <div className="flex justify-start w-full">
            <div className="flex gap-3 font-medium mt-3 mb-3">
              <FaArrowLeftLong size={22} />
              Customers
            </div>
          </div>
          {/* User Profile Section aligned to the left but inside the parent div */}
          <div className="flex gap-3 justify-start w-full mt-6 mb-9">
            <img
              src="https://via.placeholder.com/50"
              alt="image"
              className="h-[64px] w-[64px] rounded-full"
            />
            <div>
              <h2 className="text-[#111927] text-[33.3px] font-bold">
                miron.vitold@devias.io
              </h2>
              <p className="flex gap-2 items-center font-semibold">
                user_id:{" "}
                <span className="bg-gray-200 rounded-full p-2">
                  5e86805e2bafd54f66cc95c3
                </span>
              </p>
            </div>
          </div>
        </div>

        {/* Header */}
        <div
          className=" w-[1200.01px] h-[678.14px] absolute  rounded-tl-[20px] 
            rounded-tr-none rounded-br-none rounded-bl-none mt-4 space-y-6 ml-28 "
          style={{
            boxShadow:
              "0px 0px 0px 0.5px #00000008, 0px 5px 25px 0px #0B5D5180",
            borderRadius: "20px",
          }}
        >
          <div className="flex flex-col w-full mt-5 ml-5">
            <h1 className="text-xl font-bold">Edit Customer</h1>
            <span className="text-gray-400">
              user_id: 5e86805e2bafd54f66cc95c3
            </span>
          </div>

          {/* Form */}
          <form className="space-y-6 w-full  mt-5">
            <div className="grid grid-cols-1 sm:grid-cols-2 ml-5 ">
              {/* Full name */}
              <div className="w-[540.02px] h-[55.33px] border border-gray-300  rounded-md ">
                <label className="block text-sm font-medium text-gray-700  pl-2">
                  Full name
                </label>
                <input
                  type="text"
                  className="mt-1 pl-2 w-full focus:outline-none focus:ring-0 text-[14px] font-medium text-[#111927] leading-[24px] font-inter text-left "
                  defaultValue="Miron Vitold"
                />
              </div>
              {/* Email address */}
              <div className="w-[540.02px] h-[55.33px]  border border-gray-300  rounded-md ">
                <label className="block text-sm font-medium text-gray-700  pl-2">
                  Email address
                </label>
                <input
                  type="email"
                  className="mt-1 pl-2 block w-full focus:outline-none focus:ring-0  "
                  defaultValue="miron.vitold@devias.io"
                />
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 ml-5 ">
              {/* Country */}
              <div className="w-[540.02px] h-[55.33px]  border border-gray-300  rounded-md ">
                <label className="block text-sm font-medium text-gray-700  pl-2 ">
                  Country
                </label>
                <input
                  type="text"
                  className="mt-1 pl-2 w-full focus:outline-none focus:ring-0 font-medium text-[#111927] leading-[24px] font-inter text-left text-[14px] "
                  defaultValue="USA"
                />
              </div>
              {/* State/Region */}
              <div className="w-[540.02px] h-[55.33px]  border border-gray-300  rounded-md ">
                <label className="block text-sm font-medium text-gray-700  pl-2 ">
                  State/Region
                </label>
                <input
                  type="text"
                  className="mt-1  pl-2 w-full focus:outline-none focus:ring-0 text-[14px] font-medium text-[#111927] leading-[24px] font-inter text-left "
                  defaultValue="New York"
                />
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 ml-5 ">
              {/* Address 1 */}
              <div className="w-[540.02px] h-[55.33px]  border border-gray-300  rounded-md ">
                <label className="block text-sm font-medium text-gray-700  pl-2 ">
                  Address 1
                </label>
                <input
                  type="text"
                  className="mt-1 pl-2 w-full focus:outline-none focus:ring-0 text-[14px] font-medium text-[#111927] leading-[24px] font-inter text-left "
                  defaultValue="Street John Wick, no. 7"
                />
              </div>
              {/* Address 2 */}
              <div className="w-[540.02px] h-[55.33px]  border border-gray-300 rounded-md">
                <label className="block text-sm font-medium text-gray-700  pl-2">
                  Address 2
                </label>
                <input
                  type="text"
                  className="mt-1 pl-2 w-full focus:outline-none focus:ring-0 text-[14px] font-medium text-[#111927] leading-[24px] font-inter text-left "
                  defaultValue="House #25"
                />
              </div>
            </div>

            {/* Phone number */}
            <div className="w-[540.02px] h-[55.33px] border border-gray-300 rounded-md ml-5">
              <label className="block text-sm font-medium text-gray-700 pl-2">
                Phone number
              </label>
              <input
                type="tel"
                className="mt-1 pl-2 w-full focus:outline-none focus:ring-0 text-[14px] font-medium text-[#111927] leading-[24px] font-inter text-left"
                defaultValue="+55 748 327 439"
              />
            </div>

            {/* Toggles */}

            <div className="ml-5">
              {/* Make Contact Info Public */}
              <div className="flex justify-between items-center w-full">
                <label className="flex items-center">
                  <span className="">Make Contact Info Public</span>
                </label>
                <label className="relative inline-flex items-center cursor-pointer">
                  <input
                    type="checkbox"
                    className="sr-only peer  "
                    checked={publicInfo}
                    onChange={() => setPublicInfo(!publicInfo)}
                  />
                  <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 rounded-full peer dark:bg-gray-700 transition-all  mr-7"></div>
                  <div
                    className="absolute left-1  bg-[#0B5D51] border border-gray-300 h-5 w-5 rounded-full transition-transform 
             peer-checked:translate-x-full peer-checked:border-white shadow-[0px_1px_2px_0px_rgba(0,0,0,0.08)] mr-7"
                  ></div>
                </label>
              </div>
              <p className="text-gray-500 text-sm mt-2 w-full ">
                Means that anyone viewing your profile will be able to see your
                contact details.
              </p>

              {/* Available to Hire */}
              <div className="flex justify-between items-center w-full mt-6">
                <label className="flex items-center">
                  <span className="">Available to hire</span>
                </label>
                <label className="relative inline-flex items-center cursor-pointer">
                  <input
                    type="checkbox"
                    className="sr-only peer"
                    checked={availableToHire}
                    onChange={() => setAvailableToHire(!availableToHire)}
                  />
                  <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 rounded-full peer dark:bg-gray-700 transition-all  mr-7"></div>
                  <div
                    className="absolute left-1  bg-[#0B5D51] border border-gray-300 h-5 w-5 rounded-full transition-transform 
             peer-checked:translate-x-full peer-checked:border-white shadow-[0px_1px_2px_0px_rgba(0,0,0,0.08)] mr-7"
                  ></div>
                </label>
              </div>
              <p className="text-gray-500 text-sm mt-2 w-full max-w-[540px]">
                Toggling this will let your teammates know that you are
                available for acquiring new projects.
              </p>
            </div>

            {/* Buttons aligned to the left but inside the parent div */}
            <div className="flex justify-start space-x-4 mt-8 ml-5">
              <button
                type="submit"
                className="bg-[#0B5D51] text-white w-[89.43px] h-[42.47px] px-4 py-2 rounded-[12px] shadow-[0px_1px_5px_0px_#00000014] hover:bg-[#094C43] mt-8"
              >
                Update
              </button>

              <button
                type="button"
                className="bg-white text-[#111927] font-inter font-semibold text-[14px] leading-[24.5px] text-left px-4 py-2 rounded-md hover:bg-gray-600 mt-8"
              >
                Cancel
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default EditCustomerAdmin;
