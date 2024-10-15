import React from "react";
import { BiChevronDown, BiChevronLeft, BiChevronRight, BiSearch } from "react-icons/bi";
import { CiExport, CiImport } from "react-icons/ci";
import { HiOutlinePencil } from "react-icons/hi2";

import { FaArrowRight } from "react-icons/fa6";
const dummyData = [
  {
    id: 1,
    name: 'Carson Darrin',
    email: 'carson.darrin@devias.io',
    location: 'Cleveland, Ohio, USA',
    orders: 3,
    spent: '$300.00',
    img: 'https://via.placeholder.com/50'
  },
  {
    id: 2,
    name: 'Jane Doe',
    email: 'jane.doe@example.com',
    location: 'New York, USA',
    orders: 5,
    spent: '$500.00',
    img: 'https://via.placeholder.com/50'
  },
  {
    id: 3,
    name: 'John Smith',
    email: 'john.smith@example.com',
    location: 'San Francisco, USA',
    orders: 7,
    spent: '$700.00',
    img: 'https://via.placeholder.com/50'
  },
  {
    id: 4,
    name: 'Alice Johnson',
    email: 'alice.johnson@example.com',
    location: 'Los Angeles, California, USA',
    orders: 2,
    spent: '$200.00',
    img: 'https://via.placeholder.com/50'
  },
  {
    id: 5,
    name: 'Michael Brown',
    email: 'michael.brown@example.com',
    location: 'Houston, Texas, USA',
    orders: 4,
    spent: '$400.00',
    img: 'https://via.placeholder.com/50'
  }
];


const CustomerList = () => {
  return (
    <div className="w-full  h-full py-10 px-5">
      <div className="h-[84px] w-full">
        <h2 className="text-[33px] font-bold">Customers</h2>
        <div className="flex gap-4 font-semibold ">
          <div className="flex gap-2  items-center">
            <CiExport />
            Import
          </div>
          <div className="flex gap-2 items-center ">
            <CiImport />
            Export
          </div>
        </div>
      </div>

      <div className="h-[629px] shadow-md w-full rounded-2xl flex flex-col gap-4 mt-7 border py-4">
        <div className="flex items-center h-[48px] w-full gap-5 text-gray-500 px-5">
          <div className="text-[#0B5D51] h-full border-b-2 border-[#0B5D51]">
            All
          </div>
          <div className=" h-full">Accepts Marketing</div>
          <div className=" h-full">Prospect</div>
          <div className=" h-full">Returning</div>
        </div>
        <div className="flex gap-4 h-[58px] px-5 ">
          <div className="relative w-[1090px] flex items-center h-full">
            <input
              type="text"
              placeholder="Search..."
              className="w-full h-full px-4 pl-10 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            <div className="absolute left-3 top-1/2 transform -translate-y-1/2">
              <BiSearch />
            </div>
          </div>
          <div className="flex flex-col border h-full w-[190px] px-[10px] justify-center rounded-lg">
            <p className="text-gray-500">Sort By</p>
            Last update(newest)
          </div>
        </div>
          <div className="flex flex-col w-full h-full ">
            <div className="flex w-full bg-[#0B5D51] h-[54px] text-white items-center uppercase">
            <div className="w-[74px] h-full flex items-center justify-center">
                <input
                  type="checkbox"
                  id="customCheckbox"
                  className="rounded-lg h-5 w-5 border border-green"
                />
              </div>
              <div className="w-[413px] px-3">Name</div>
              <div className="w-[354px] px-3">Location</div>
              <div className="w-[143px] px-3">Orders</div>
              <div className="w-[174px] px-3">Spent</div>
              <div className="w-[192px] px-3 text-right">Actions</div>
            </div>
            {dummyData.map((item) => (
        <div key={item.id} className="flex w-full h-[74px] border items-center">
          <div className="w-[74px] h-full flex items-center justify-center">
            <input
              type="checkbox"
              id={`customCheckbox-${item.id}`}
              className="rounded-lg h-5 w-5 border border-green"
            />
          </div>
          <div className="w-[413px] px-3 flex gap-3 items-center">
            <img
              src={item.img}
              alt={item.name}
              className="h-[42px] w-[42px] rounded-full"
            />
            <div>
              <h3 className="text-[#111927] font-medium">{item.name}</h3>
              <p className="text-[#0B5D51]">{item.email}</p>
            </div>
          </div>
          <div className="w-[354px] px-3">
            <h3 className="text-[#111927] font-medium">{item.location}</h3>
          </div>
          <div className="w-[143px] px-3">{item.orders}</div>
          <div className="w-[174px] px-3">{item.spent}</div>
          <div className="w-[192px] px-3 justify-end flex">
            <button className="flex gap-4 items-center text-[#0B5D51]">
              <HiOutlinePencil size={25} />
              <FaArrowRight size={25} />
            </button>
          </div>
        </div>
      ))}
      <div className="w-full flex justify-end items-center h-[60px] px-10 text-[14px]  ">
        <p className="mr-10 text-[#111927] font-medium">Rows per page:</p>
        <span className="flex gap-1 items-center mr-10 font-medium">5 <BiChevronDown size={20}/></span>
        <p className="mr-10 font-medium">1-5 of 10</p>
        <div className="flex gap-5">
          <BiChevronLeft size={30} className="text-gray-500 cursor-pointer"/>
          <BiChevronRight size={30} className="cursor-pointer"/>
        </div>

      </div>
          </div>
      </div>
    </div>
  );
};

export default CustomerList;
