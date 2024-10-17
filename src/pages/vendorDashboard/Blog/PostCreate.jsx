import React from "react";
import { FaBold, FaItalic, FaLink, FaListUl } from "react-icons/fa";
import { FaListOl } from "react-icons/fa";
import { IoIosMore } from "react-icons/io";

import { MdFileUpload, MdFormatUnderlined } from "react-icons/md";
import { RiExpandUpDownLine } from "react-icons/ri";
import { TbTxt } from "react-icons/tb";

const PostCreate = () => {
  return (
    <div className="flex flex-col gap-6 p-4 pt-10">
      <h2 className="font-semibold text-[36px] text-[#111927]">
        Create a new post
      </h2>
      <p className="flex gap-2 font-medium text-[14px]">
        Dashboard . Blog . <span className="text-gray-500"> Create</span>
      </p>

      <div className="h-[72px] w-full rounded-2xl shadow-lg flex justify-between px-5 items-center">
        <h5 className="text-[#111927] text-[16px] font-medium">
          Hello, Vendor
        </h5>
        <div className="flex gap-2">
          <button className="w-[100px] text-black font-bold">Cancel</button>
          <button className="w-[150px] px-2 text-white rounded-lg h-[40px] bg-[#0B5D51]">
            Publish Changes
          </button>

          <button className=" text-gray-500 font-bold ml-2">
            {" "}
            <IoIosMore size={30}/>
          </button>
        </div>
      </div>

      <div className="h-[198px] w-full rounded-2xl shadow-lg flex justify-between px-5 ">
        <h2 className="inline mt-10 font-bold text-[16.7px] text-[#111927] ">
          Basic Details
        </h2>
        <div className="flex flex-col w-[861px] gap-3 h-full justify-center">
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

      <div className="h-[570px] w-full rounded-2xl shadow-lg flex justify-between px-5 ">
        <h2 className="inline mt-10 font-bold text-[16.7px] text-[#111927] ">
          Post Cover
        </h2>
        <div className="flex flex-col w-[861px] gap-3 h-full justify-center ">
          <img
            src="https://via.placeholder.com/400"
            alt=""
            className="w-full h-[230px] rounded-2xl"
          />
          <p className="font-bold">Remove photo</p>
          <div className="h-[162px] w-full items-center justify-center flex gap-3 rounded-xl bg-[#F2F4F7]">
            <div className="h-[64px] w-[64px] rounded-full flex bg-[#0B5D51] text-white items-center justify-center">
              <MdFileUpload size={30} />
            </div>
            <div>
              <h2 className="text-[16.7px] font-bold">
                Click to upload or drag and drop
              </h2>
              <h2 className="text-[16.7px] text-gray-500">
                (SVG, JPG, PNG, or gif maximum 900x400){" "}
              </h2>
            </div>
          </div>
        </div>
      </div>

      <div className="h-[393px] w-full rounded-2xl shadow-lg flex justify-between px-5 py-8 ">
        <h2 className="inline mt-10 font-bold text-[16.7px] text-[#111927] ">
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

      <div className="h-[198px] w-full rounded-2xl shadow-lg flex justify-between px-5 ">
        <h2 className="inline mt-10 font-bold text-[16.7px] text-[#111927] ">
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

export default PostCreate;
