import React from "react";
import { FaBold, FaItalic, FaLink, FaListUl } from "react-icons/fa";
import { FaListOl } from "react-icons/fa";
import { IoIosMore } from "react-icons/io";

import { MdFileUpload, MdFormatUnderlined } from "react-icons/md";
import { RiExpandUpDownLine } from "react-icons/ri";
import { TbTxt } from "react-icons/tb";

const AdminPostCreate = () => {
  return (
    <div className="flex flex-col gap-6 p-4 pt-10">
      <h2 className="font-bold font-plusjakartasans text-[36px] text-[#111927]">
        Create a new post
      </h2>
      <p className="flex gap-2 font-inter font-medium text-[14px]">
          Dashboard <span className="bg-[#6C737F] w-1 h-1 rounded-sm mt-2.5"></span> Blog <span className="bg-[#6C737F] w-1 h-1 rounded-sm mt-2.5"></span> <span className="text-gray-500"> Create</span>
        </p>

        <div className="shadow-[0_3px_10px_0px_rgba(11,93,81,0.5)]
font-inter font-medium flex rounded-[20px] items-center justify-between px-5  h-[72px] ]
">   <h5>
        Hello, Vendor
         </h5>
        <div className="flex gap-2">
          <button className="w-[100px] text-black font-semibold font-inter">Cancel</button>
          <button className="w-[150px] px-2 text-white rounded-xl font-inter font-semibold h-[40px] bg-[#0B5D51]">
            Publish Changes
          </button>

          <button className=" text-gray-500 font-bold ml-2">
            {" "}
            <IoIosMore size={30}/>
          </button>
        </div>
      </div>

      <div className="h-[198px] w-full rounded-[20px] shadow-[0_3px_10px_0px_rgba(11,93,81,0.5)] flex justify-between px-5 ">
        <h2 className="inline mt-10 font-plusjakartasans font-bold text-[16.7px] text-[#111927] ">
          Basic Details
        </h2>
        <div className="flex flex-col w-[861px] gap-10 h-full justify-center">
          <input
            type="text"
            placeholder="Post Title"
            className="border border-gray-300 rounded-md px-4 py-3 focus:outline-none focus:border-gray-500 placeholder-gray-400"
          />
          <input
            type="text"
            placeholder="Short Description"
            className="border border-gray-300 rounded-md px-4 py-3 focus:outline-none focus:border-gray-500 placeholder-gray-400"
          />
        </div>
      </div>

      <div className="h-[570px] w-full rounded-2xl shadow-[0_3px_10px_0px_rgba(11,93,81,0.5)] flex justify-between px-5 ">
        <h2 className="inline mt-10 font-plusjakartasans font-bold text-[16.7px] text-[#111927] ">
          Post Cover
        </h2>
        <div className="flex flex-col w-[861px] gap-3 h-full justify-center ">
        <div className="relative">
  <img
    src="/blog/create1.svg"
    alt=""
    className="w-full h-[230px] rounded-2xl"
  />
    <div className="absolute bottom-[-15px] right-[-15px] bg-[#0B5D51] text-white rounded-[22px] w-11 h-11 flex items-center justify-center font-bold text-sm">
    <img src="/setting.svg" alt="badge" className="w-6 h-6" />
     </div>
  </div>

          <p className="font-semibold font-inter mt-3">Remove photo</p>
          <div className="h-[162px] w-full items-center justify-center flex gap-3 rounded-xl border-[#F2F4F7]">
            <div className="h-[64px] w-[64px] rounded-full flex bg-[#0B5D51] text-white items-center justify-center">
              <MdFileUpload size={30} />
            </div>
            <div>
              <h2 className="text-[16.7px] font-bold font-plusjakartasans text-black">
               <span className="underline"> Click to upload </span> or drag and drop
              </h2>
              <h2 className="text-[16.7px] text-[#6C737F] font-inter">
                (SVG, JPG, PNG, or gif maximum 900x400){" "}
              </h2>
            </div>
          </div>
        </div>
      </div>

      <div className="h-[393px] w-full rounded-2xl shadow-[0_3px_10px_0px_rgba(11,93,81,0.5)] flex justify-between px-5 py-8 ">
        <h2 className="inline  font-bold font-plusjakartasans text-[16.7px] text-[#111927] ">
          Content
        </h2>
        <div className="flex flex-col w-[861px]  h-full justify-center rounded-lg border">
          <div className="flex p-3 gap-4 items-center font-semibold border-b">
            <p>Normal</p>
            <RiExpandUpDownLine />
            <FaBold />
            <FaItalic />
            <MdFormatUnderlined />
            <FaLink />
            <FaListOl />
            <FaListUl />
            <TbTxt />
          </div>
          <div className="h-[286px] w-full">
            <input
              type="text"
              className="p-4 border-none focus:border-none focus:outline-none bg-none"
              placeholder="Write Something"
            />
          </div>
        </div>
      </div>

      <div className="h-[198px] w-full rounded-2xl shadow-[0_5px_25px_0_rgba(11,93,81,0.5)] flex justify-between px-5 ">
        <h2 className="inline mt-10 font-bold font-plusjakartasans text-[16.7px] text-[#111927] ">
          Meta
        </h2>
        <div className="flex flex-col w-[861px] gap-3 h-full justify-center">
          <input
            type="text"
            placeholder="SEO Title"
            className="border border-gray-300 rounded-md px-4 py-3 focus:outline-none focus:border-gray-500 placeholder-gray-400"
          />
          <input
            type="text"
            placeholder="SEO Description"
            className="border border-gray-300 rounded-md px-4 py-3 focus:outline-none focus:border-gray-500 placeholder-gray-400"
          />
        </div>
      </div>
    </div>
  );
};

export default AdminPostCreate;
