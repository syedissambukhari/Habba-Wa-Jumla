import React from "react";
import { useState } from "react";
import { FiGrid } from "react-icons/fi"; // Example icon, adjust based on what you use
import { BsThreeDotsVertical } from "react-icons/bs"; // Star and more options icons
import { FaFilePdf, FaFileImage } from "react-icons/fa"; // Example file type icons
import { FcFolder } from "react-icons/fc";
import { IoIosStarOutline } from "react-icons/io";

const FileGridAdmin = () => {
  const options = [9, 15, 25]; // You can add more options as needed
  const [selectedOption, setSelectedOption] = useState(options[0]); // Default selected option

  const files = [
    {
      name: "AWS Credentials",
      size: "503.9 MB",
      items: 12,
      date: "Feb 01, 2024",
      icon: <FcFolder className="w-full h-full" />,
    },
    {
      name: "dev 2022",
      size: "495.04 MB",
      items: 5,
      date: "Feb 01, 2024",
      icon: <FcFolder className="w-full h-full" />,
    },
    {
      name: "AI Resources",
      size: "185.22 MB",
      items: 3,
      date: "Feb 01, 2024",
      icon: <FcFolder className="w-full h-full" />,
    },
    {
      name: "invoices",
      size: "697.34 MB",
      items: 17,
      date: "Jan 31, 2024",
      icon: <FcFolder className="w-full h-full" />,
    },
    {
      name: "assets",
      size: "99.07 MB",
      items: 12,
      date: "Jan 31, 2024",
      icon: <FcFolder className="w-full h-full" />,
    },
    {
      name: "Personal-cv.pdf",
      size: "450.38 MB",
      items: 1,
      date: "Jan 30, 2024",
      icon: <FaFilePdf />,
    },
    {
      name: "company-logo-white.svg",
      size: "726.84 MB",
      items: 1,
      date: "Jan 30, 2024",
      icon: <FaFileImage />,
    },
    {
      name: "landing_cover1.jpeg",
      size: "712.23 MB",
      items: 1,
      date: "Jan 30, 2024",
      icon: <FaFileImage />,
    },
    {
      name: "About-Hero_shape-xl.svg",
      size: "357.06 MB",
      items: 1,
      date: "Jan 30, 2024",
      icon: <FaFileImage />,
    },
  ];

  return (
    <div className="pl-4 w-full">
      {/* Header */}
      <div
        className="flex justify-between items-center mb-6 rounded-[20px] w-full  h-[90px] "
        style={{
          boxShadow: "0px 3px 10px 0px #0B5D5180",
          border: "0.5px solid rgba(0, 0, 0, 0.05)",
        }}
      >
        <div className="w-full pl-3 ">
          <input
            type="text"
            placeholder="Search"
            className=" w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500  "
          />
        </div>

        <div className="flex items-center space-x-4 mr-3">
          <button className="flex items-center justify-center px-4 py-2 border rounded-md bg-gray-100 text-gray-600 hover:bg-gray-200">
            <FiGrid className="h-5 w-5" />
          </button>

          <select className="border bg-white rounded-md text-gray-600 p-2 ">
            <option>Latest</option>
            <option>Oldest</option>
            <option>Name</option>
          </select>
        </div>
      </div>

      {/* Grid of Files/Folders */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 gap-2">
        {files.map((file, index) => (
          <div
            key={index}
            className="border border-gray-200 p-4 bg-white w-full shadow-[0px_0px_0px_0.5px_rgba(0,0,0,0.08),0px_5px_15px_0px_rgba(11,93,81,0.5)] relative rounded-[20px]"
          >
            {/* Star icon */}
            <div className="absolute top-[20px] left-[20px]">
              <IoIosStarOutline />
            </div>

            {/* More options */}
            <div className="absolute top-[25px] left-[235px]">
              <BsThreeDotsVertical className="text-gray-400" />
            </div>

            {/* Icon */}
            <div className="flex  w-[40px] h-[47px] mt-16 left-[17px] ">
              {file.icon}
            </div>

            {/* File or Folder Name */}
            <h3 className="w-full h-full  left-[17.1px] absolute text-[#111927] text-sm font-medium leading-[21.98px] text-left font-inter pt-4">
              {file.name}
            </h3>

            {/* Bottom border below the name */}
            <hr className="border-gray-300 mt-12 opacity-90" />

            {/* File size and items */}
            <p className="text-[#6C737F] text-sm font-normal leading-[21.98px] text-left font-inter pt-7">
              {file.size} • {file.items} items
            </p>

            {/* Creation date */}
            <p className="text-[#6C737F] text-xs font-medium leading-[19.92px] text-left font-inter pt-5">
              Created at {file.date}
            </p>
          </div>
        ))}
      </div>

      {/* Pagination */}
      <div className="flex items-center justify-end mt-6 space-x-4">
        <div className="flex items-center">
          <p className="text-gray-500">Rows per page:</p>
          <select
            value={selectedOption}
            onChange={(e) => setSelectedOption(e.target.value)}
            className="border bg-white rounded-md text-gray-600 p-1 ml-2"
            style={{ zIndex: 10, position: "relative" }} 
          >
            {options.map((option) => (
              <option key={option} value={option}>
                {option}
              </option>
            ))}
          </select>
        </div>
        <p className="text-gray-500">1–9 of 25</p>
        <div className="flex items-center">
          <button className="text-gray-400 hover:text-gray-600">{"<"}</button>
          <button className="text-gray-400 hover:text-gray-600 ml-2">
            {">"}
          </button>
        </div>
      </div>
    </div>
  );
};

export default FileGridAdmin;
