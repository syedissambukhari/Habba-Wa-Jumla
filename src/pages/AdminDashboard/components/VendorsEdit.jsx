import React from "react";
import { FaArrowLeft } from "react-icons/fa6";
import { MdOutlineEdit } from "react-icons/md";
import { FaAngleDown } from "react-icons/fa6";
import person from "../../../assets/Vendor.png";
const VendorsEdit = () => {
  return (
    <div className="ml-8 flex flex-col gap-6 py-10 ">
      <div className="flex items-center gap-3">
        <span>
          <FaArrowLeft />
        </span>
        <p className="text-[14px] font-[500]">Vendors</p>
      </div>
      <div className="flex items-center justify-between pr-2">
        <div className="flex items-center gap-3">
          <span>
            <img src={person} className="rounded-full" alt="" />
          </span>
          <div className="flex flex-col gap-2">
            <h1 className="text-[33.3px] font-[700]">miron.vitold@devias.io</h1>
            <p className="text-[13px]">
              user_id:{" "}
              <span className="text-[13px] bg-gray-300 rounded-full px-2 ">
                5e86805e2bafd54f66cc95c3
              </span>
            </p>
          </div>
        </div>
      </div>
      <div className=" px-4 mt-[20px] ml-[8px] mr-[10px]  py-4 bg-white shadow-custom-1 shadow-custom-2 rounded-lg flex flex-col space-y-5">
        <h1 className="text-[17px] font-[700]">Edit Vendor</h1>
      </div>
    </div>
  );
};

export default VendorsEdit;
