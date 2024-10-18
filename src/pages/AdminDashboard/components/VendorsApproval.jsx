import React from "react";
import { Link } from "react-router-dom";
import { CiExport } from "react-icons/ci";
import { CiImport } from "react-icons/ci";
import { FaSearch } from "react-icons/fa";
import { IoMdArrowDropdown } from "react-icons/io";
import { BiSquareRounded } from "react-icons/bi";
import { MdOutlineEdit } from "react-icons/md";
import { FaArrowRight } from "react-icons/fa";
import { MdArrowDropDown } from "react-icons/md";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";
import productcategory from "../../../assets/Vendor.png";

import { FaAngleRight } from "react-icons/fa6";
const VendorsApproval = () => {
  const products = [
    {
      name: "Carson Darrin",
      description: "ran.perez@devias.io",
      location: "Cleveland, Ohio, US",
      orders: "3",

      image: productcategory, // Use the imported image
    },
    {
      name: "Carson Darrin",
      description: "ran.perez@devias.io",
      location: "Cleveland, Ohio, US",
      orders: "3",

      image: productcategory,
    },
    {
      name: "Carson Darrin",
      description: "Carson Darrin",
      location: "Cleveland, Ohio, US",
      orders: "3",

      image: productcategory,
    },
    {
      name: "Carson Darrin",
      description: "ran.perez@devias.io",
      location: "Cleveland, Ohio, US",
      orders: "3",

      image: productcategory,
    },
    {
      name: "Carson Darrin",
      description: "ran.perez@devias.io",
      location: "Cleveland, Ohio, US",
      orders: "3",

      image: productcategory,
    },
  ];
  const MAX_STOCK = 100;
  return (
    <div className="ml-8 flex flex-col gap-6 py-10 ">
      <div className="flex flex-col gap-2 ">
        <h1 className="font-[700] text-[33.3px]">Vendors</h1>

        <div className="flex items-center gap-4">
          <div className="flex items-center gap-2">
            <span>
              <CiImport size={20} />{" "}
            </span>
            <h6 className="text-[13px] font-[600]">Import</h6>
          </div>
          <div className="flex items-center gap-2">
            <span>
              <CiExport size={20} />{" "}
            </span>
            <h6 className="text-[13px] font-[600]">Export</h6>
          </div>
        </div>
      </div>
      <div className="mt-[20px] ml-[8px] mr-[10px] px-[4px] py-4 bg-white shadow-custom-1 shadow-custom-2 rounded-lg flex flex-col space-y-5">
        <div className="px-5 flex justify-start items-center space-x-5">
          <Link className="text-[14] font-[500]">All</Link>
          <Link className="text-[14] font-[500]">Accepts Marketing </Link>
          <Link className="text-[14] font-[500]">Prospects</Link>
          <Link className="text-[14] font-[500]">Returning</Link>
        </div>
        <hr />
        <div className="px-5 flex gap-5 items-center ">
          <div className="border flex items-center gap-3 w-[750px] h-[55px] rounded-md px-4">
            <span>
              {" "}
              <FaSearch color="#6C737F" />
            </span>
            <input
              type="text"
              placeholder="search Customers..."
              className="outline-none border-none"
            />
          </div>
          <div className="w-[205px] h-[55px] border rounded-md flex flex-col  justify-center px-2">
            <p className="text-[12px] text-[#6C737F]">Sort By</p>
            <div className="flex items-center gap-3">
              <p className="text-[14px] font-[500]">Latest Update(newest)</p>
              <span>
                <MdArrowDropDown />
              </span>
            </div>
          </div>
        </div>
        <div className="overflow-x-auto">
          <table className="min-w-full bg-white px-5">
            <thead>
              <tr className="w-full bg-[#0B5D51]">
                <th className="py-2 px-4 text-left text-white">
                  <BiSquareRounded size={20} className="text-white" />
                </th>
                <th className="py-2 px-4 text-[12px] text-left text-white">
                  NAME
                </th>
                <th className="py-2 px-4 text-[12px] text-left text-white">
                  LOCATION
                </th>
                <th className="py-2 px-4 text-[12px] text-left text-white">
                  ORDERS
                </th>
                <th className="py-2 px-20 text-[12px] text-left text-white">
                  APPROVAL
                </th>
              </tr>
            </thead>
            <tbody>
              {products.map((product, index) => (
                <tr key={index} className="border-b hover:bg-gray-100">
                  <td className="py-2 px-4">
                    <BiSquareRounded size={20} className="text-[#0B5D51]" />
                  </td>
                  <td className="py-2 px-4 flex items-center">
                    <img
                      src={product.image}
                      alt={product.name}
                      className="w-10 h-10 mr-2 rounded-full"
                    />
                    <div className="flex flex-col space-y-2">
                      <span className="text-[14px] font-[500]">
                        {product.name}
                      </span>
                      <span className="text-[14px] text-[#0B5D51]">
                        {product.description}
                      </span>
                    </div>
                  </td>
                  <td className="py-2 px-4">
                    <span className="text-[14px] text-black">
                      {product.location}
                    </span>
                  </td>
                  <td className="py-2 px-4 text-[14px]">{product.orders}</td>
                  <td className="py-2 px-4 flex flex-col items-center">
                    <div className="flex justify-center space-x-10 mt-2">
                      <button className="bg-[#0B5D51] text-white rounded-full hover:bg-white hover:text-black border-[#0B5D51] border-[1px] px-4 py-1">
                        Approve
                      </button>
                      <button className="bg-[#FF002A] text-white rounded-full hover:bg-white hover:text-black hover:border-[#0B5D51] border-[1px] px-4 py-1">
                        Reject
                      </button>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>

          <div className="flex items-center justify-end gap-3 py-4 pr-4">
            <span className="flex items-center text-[14px] ">
              Rows per page: 5{" "}
              <span>
                <IoMdArrowDropdown className="text-[#6C737F]" />
              </span>
            </span>
            <span className="text-[14px]">1-5 of {products.length}</span>
            <button className="flex items-center text-gray-600 hover:text-gray-800">
              <FaChevronLeft className="text-[#6C737F]" />
            </button>
            <button className="flex items-center text-gray-600 hover:text-gray-800">
              <FaChevronRight className="text-[#6C737F]" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default VendorsApproval;
