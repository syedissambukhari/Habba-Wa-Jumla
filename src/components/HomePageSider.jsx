import React from "react";
import Checkbox from "./Checkbox";
import Tag from "./Tag";
import Deal from "./Deal";

const HomePageSider = () => {
  return (
    <div className="flex flex-col">
      <h2 className="mb-5 text-[16px] font-semibold">CATEGORY</h2>
      <Checkbox tagname={"Electronics and Devices"} classname={"category"} />
      <Checkbox tagname={"Computer Accessories"} classname={"category"} />
      <Checkbox tagname={"SmartPhone"} classname={"category"} />
      <Checkbox tagname={"Headphone"} classname={"category"} />
      <Checkbox tagname={"Mobile Accessories"} classname={"category"} />
      <Checkbox tagname={"Gaming Console"} classname={"category"} />
      <Checkbox tagname={"Camera & Photo"} classname={"category"} />
      <Checkbox tagname={"TV & Homes Appliances"} classname={"category"} />
      <Checkbox tagname={"Watchs & Accessories"} classname={"category"} />
      <Checkbox tagname={"GPS & Navigation"} classname={"category"} />
      <Checkbox tagname={"Warable Technology"} classname={"category"} />
      <hr className="mt-5" />

      <h2 className="mb-5 mt-5 text-[16px] font-semibold uppercase">Price Range</h2>
      <input type="range"  className='mb-5 accent-[#0B5D51]' name="" id="" />
     <div className="flex gap-3 text-[#77878F] mb-5">
        <button className="text-left h-[40px] flex-1 border-2 border-[#E4E7E9] px-4 rounded-sm">
          Min price
        </button>
        <button className="text-left h-[40px] flex-1 border-2 border-[#E4E7E9] px-4 rounded-sm">
          Max price
        </button>
      </div>
      <Checkbox tagname={"All Price"} classname={"category"} />
      <Checkbox tagname={"Under $20"} classname={"category"} />
      <Checkbox tagname={"$25 to $100"} classname={"category"} />
      <Checkbox tagname={"$100 to $300"} classname={"category"} />
      <Checkbox tagname={"$300 to $500"} classname={"category"} />
      <Checkbox tagname={"$500 to $1,000"} classname={"category"} />
      <Checkbox tagname={"$1,000 to $10,000"} classname={"category"} />
      <hr className="mt-5" />

      <h2 className="mb-5 mt-5 text-[16px] font-semibold">POPULAR BRANDS</h2>
      <div className="flex flex-col gap-2  w-[70%]">
        <div className="flex justify-between">
          <div className="flex gap-2">
            <input
              type="checkbox"
              className="w-5 h-5 accent-[#0B5D51] cursor-pointer"
              name=""
              id=""
            />
            Apple
          </div>
          <div className="flex gap-2 w-[40%] text-left">
            <input
              type="checkbox"
              className="w-5 h-5 accent-[#0B5D51] cursor-pointer"
              name=""
              id=""
            />
            Google
          </div>
        </div>
        <div className="flex justify-between">
          <div className="flex gap-2">
            <input
              type="checkbox"
              className="w-5 h-5 accent-[#0B5D51] cursor-pointer"
              name=""
              id=""
            />
            Microsoft
          </div>
          <div className="flex gap-2 w-[50%] ml-[38px] text-left">
            <input
              type="checkbox"
              className="w-5 h-5 accent-[#0B5D51] cursor-pointer"
              name=""
              id=""
            />
            Samsung
          </div>
        </div>
        <div className="flex justify-between">
          <div className="flex gap-2">
            <input
              type="checkbox"
              className="w-5 h-5 accent-[#0B5D51] cursor-pointer"
              name=""
              id=""
            />
            Dell
          </div>
          <div className="flex gap-2 w-[40%] text-left">
            <input
              type="checkbox"
              className="w-5 h-5 accent-[#0B5D51] cursor-pointer"
              name=""
              id=""
            />
            HP
          </div>
        </div>
        <div className="flex justify-between">
          <div className="flex gap-2">
            <input
              type="checkbox"
              className="w-5 h-5 accent-[#0B5D51] cursor-pointer"
              name=""
              id=""
            />
            Symphony
          </div>
          <div className="flex gap-2 w-[40%] text-left">
            <input
              type="checkbox"
              className="w-5 h-5 accent-[#0B5D51] cursor-pointer"
              name=""
              id=""
            />
            Xiaomi
          </div>
        </div>
        <div className="flex justify-between">
          <div className="flex gap-2">
            <input
              type="checkbox"
              className="w-5 h-5 accent-[#0B5D51] cursor-pointer"
              name=""
              id=""
            />
            Sony
          </div>
          <div className="flex gap-2 w-[50%] ml-[72px] text-left ">
            <input
              type="checkbox"
              className="w-5 h-5  accent-[#0B5D51] cursor-pointer"
              name=""
              id=""
            />
            Panasonic
          </div>
        </div>
        <div className="flex justify-between">
          <div className="flex gap-2">
            <input
              type="checkbox"
              className="w-5 h-5 accent-[#0B5D51] cursor-pointer"
              name=""
              id=""
            />
            LG
          </div>
          <div className="flex gap-2 w-[40%] text-left">
            <input
              type="checkbox"
              className="w-5 h-5 accent-[#0B5D51] cursor-pointer"
              name=""
              id=""
            />
            Intel
          </div>
        </div>
        <div className="flex justify-between">
          <div className="flex gap-2">
            <input
              type="checkbox"
              className="w-5 h-5 accent-[#0B5D51] cursor-pointer"
              name=""
              id=""
            />
            Oneplus
          </div>
        </div>
      </div>
      <hr className="mt-5" />

      <h2 className="mb-5 mt-5 text-[16px] font-semibold">POPULAR TAG</h2>
      <div className="flex gap-2">
        <Tag tag={"Game"} />
        <Tag tag={"iPhone"} />
        <Tag tag={"TV"} />
        <Tag tag={"Asus Laptops"} />
      </div>

      <div className="flex gap-2  mt-2">
        <Tag tag={"Macbook"} />
        <Tag tag={"SSD"} />
        <Tag tag={"Graphics Card"} />
      </div>

      <div className="flex gap-2  mt-2">
        <Tag tag={"Power Bank"} />
        <Tag tag={"Smart TV"} />
        <Tag tag={"Speaker"} />
      </div>

      <div className="flex gap-2  mt-2">
        <Tag tag={"Tablet"} />
        <Tag tag={"Microwave"} />
        <Tag tag={"Samsung"} />
      </div>
      <Deal />
    </div>
  );
};

export default HomePageSider;
