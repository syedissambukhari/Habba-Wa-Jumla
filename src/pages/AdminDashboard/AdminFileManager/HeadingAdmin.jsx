import React from "react";
import { FiUpload } from "react-icons/fi";

const HeadingAdmin = () => {
  return (
    <div className=" flex items-center justify-between p-4">
      {/* Heading */}
      <div className="w-[205px] h-[40px] mt-[16px] ml-[16px]">
        {" "}
        <h2 className="text-xl font-semibold text-gray-800 mb-4">
          File Manager
        </h2>
      </div>

      <div className="ml-auto w-[112px] h-[40px] bg-[#0B5D51] rounded-[12px]  flex items-center justify-center">
        <button className="flex items-center justify-center text-white space-x-2 font-inter  ">
          {/* Icon */}
          <FiUpload />
          {/* Text */}
          <span>Upload</span>
        </button>
      </div>
    </div>
  );
};

export default HeadingAdmin;
