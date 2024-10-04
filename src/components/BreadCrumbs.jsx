import React from 'react';
import { FaAngleRight } from "react-icons/fa6";
import { GoHome } from "react-icons/go";

const Breadcrumb = () => {
  return (
    <nav className="flex h-[72px] py-3 text-gray-700 bg-[#F2F4F5] rounded-lg w-full px-[120px]" aria-label="Breadcrumb">
      <ol className="inline-flex items-center space-x-1 md:space-x-3">
        <li className="inline-flex items-center">
          <a href="#" className="text-[14px] font-medium text-[#5F6C72] flex items-center justify-center gap-1">
           <GoHome size={18} className='text-[#5F6C72]'/>
            Home
          </a>
        </li>
        <li>
          <div className="flex items-center">
            <FaAngleRight className="w-4 h-4 text-gray-400" />
            <a href="#" className="ml-1 text-[14px] font-medium text-[#5F6C72]  md:ml-2">
              Shop
            </a>
          </div>
        </li>
        <li>
          <div className="flex items-center">
            <FaAngleRight className="w-4 h-4 text-gray-400" />
            <a href="#" className="ml-1 text-[14px] font-medium text-[#5F6C72]  md:ml-2">
              Shop Grid
            </a>
          </div>
        </li>
        <li aria-current="page">
          <div className="flex items-center">
            <FaAngleRight className="w-4 h-4 text-gray-400" />
            <span className="ml-1 text-[14px] font-medium text-[#0B5D51] md:ml-2">
              Electronic Devices
            </span>
          </div>
        </li>
      </ol>
    </nav>
  );
};

export default Breadcrumb;
