import React from "react";
import { CiSearch } from "react-icons/ci";
import { IoIosArrowDown } from "react-icons/io";
import { RxCross1 } from "react-icons/rx";
import {
  MdArrowForward,
  MdOutlineDateRange,
  MdOutlineStarPurple500,
} from "react-icons/md";
import { MdArrowBack } from "react-icons/md";

const products1 = [
  {
    id: 1,
    name: "Laptop",
    price: "$999",
    image: "https://via.placeholder.com/150",
    description: "High-performance laptop",
    stars: 720,
    tag: "HOT",
  },
  {
    id: 2,
    name: "Smartphone",
    price: "$499",
    image: "https://via.placeholder.com/150",
    description: "Latest smartphone model",
    stars: 836,
  },
  {
    id: 3,
    name: "Headphones",
    price: "$199",
    image: "https://via.placeholder.com/150",
    description: "Noise-cancelling headphones",
    stars: 257,
    tag: "BEST DEALS",
  },
  {
    id: 4,
    name: "Smartwatch",
    price: "$299",
    image: "https://via.placeholder.com/150",
    description: "Feature-rich smartwatch",
    stars: 122,
  }
];

const BrowsingHistory = () => {
  return (
    <div className="flex flex-col gap-5">
      <div className="topBar flex  w-full gap-5">
        <div className="searchbar w-[424px] flex  border-[1px] rounded-sm border-gray-200 items-center px-4 py-2 h-[44px]">
          <CiSearch size={25} />
          <input
            type="text"
            className="text-[14px] w-full focus:border-none  focus:outline-none px-2 h-full border-none"
            placeholder="Search in browsing history..."
          />
        </div>
        <div className="searchbar flex justify-between border-[1px] w-[312px] rounded-sm border-gray-200 items-center px-4 py-2 h-[44px]">
  {/* Date Icon */}
  <MdOutlineDateRange size={20} className="text-gray-500" />

  {/* Date Input */}
  <input
    type="date"
    className="text-[14px] bg-transparent  placeholder:uppercase focus:outline-none border-none w-full h-full px-3 appearance-none"
    placeholder="DD/MM/YY"
    style={{
      colorScheme: "dark", // For iOS and Safari to hide date picker styles
    }}
  />
</div>
      </div>

    

    <div className="border-2 border-gray-200 rounded-md flex flex-col">
        <div className="font-bold h-[52px] flex items-center px-4 border-b-2 border-gray-200">
            17,OCT,2020
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 py-4 px-2">
        {products1.map((product,index) => (
          <div
            key={product.id}
            className={`bg-white rounded-sm overflow-hidden  h-[320px] ${index==products1.length-1?"border-none":"border-r-[1.5px] border-gray-200"}`}
          >
            <div className="relative">
              <div
                className={`absolute left-3 top-3 rounded-sm px-4 py-2 ${
                  product.tag == "HOT"
                    ? "bg-[#EE5858] text-white"
                    : product.tag == "BEST DEALS"
                    ? "bg-[#0B5D51] text-white "
                    : product.tag == "25% OFF"
                    ? "bg-[#EFD33D] text-black"
                    : product.tag == "SALE"
                    ? "bg-[#2DB224] text-white"
                    : ""
                }`}
              >
                {product.tag}
              </div>
              <img
                src={product.image}
                alt={product.name}
                className="w-full h-[172px] object-cover"
              />
            </div>
            <div className="p-4">
              <div className="flex gap-[1px] text-[#0B5D51] items-center">
                <MdOutlineStarPurple500 />
                <MdOutlineStarPurple500 />
                <MdOutlineStarPurple500 />
                <MdOutlineStarPurple500 />
                <MdOutlineStarPurple500 />({product.stars})
              </div>
              <h2 className="text-[#191C1F] text-[14px] ">{product.name}</h2>
              <p className="text-[#191C1F] text-[14px] mb-2">
                {product.description}
              </p>
              <div className="text-[14px] font-bold mb-2 text-[#0B5D51]">
                {product.price}
              </div>
            </div>
          </div>
        ))}
      </div>


    </div>
      
      <div className="navigators flex gap-4 mt-4  m-auto">
        <button className="flex mr-3 justify-center items-center rounded-full h-[40px] w-[40px] text-[#0B5D51] border-2 border-[#0B5D51]">
          <MdArrowBack size={24} />
        </button>
        <div className="flex gap-2  m-auto">
          <button className="flex justify-center items-center rounded-full h-[40px] bg-[#0B5D51] w-[40px] text-white border-[1.5px] border-gray-200">
            01
          </button>
          <button className="flex justify-center items-center rounded-full h-[40px] w-[40px] text-black  border-[2px] border-gray-200">
            02
          </button>
          <button className="flex justify-center items-center rounded-full h-[40px] w-[40px] text-black  border-[2px] border-gray-200">
            03
          </button>
          <button className="flex justify-center items-center rounded-full h-[40px] w-[40px] text-black  border-[2px] border-gray-200">
            04
          </button>
          <button className="flex justify-center items-center rounded-full h-[40px] w-[40px] text-black  border-[2px] border-gray-200">
            05
          </button>
          <button className="flex justify-center items-center rounded-full h-[40px] w-[40px] text-black  border-[2px] border-gray-200">
            06
          </button>
        </div>
        <button className="flex ml-3 justify-center items-center rounded-full h-[40px] w-[40px] text-[#0B5D51] border-2 border-[#0B5D51]">
          <MdArrowForward size={24} />
        </button>
      </div>
    </div>
  );
};

export default BrowsingHistory;