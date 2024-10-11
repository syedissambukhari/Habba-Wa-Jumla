import React, { useState } from "react";
import { CiSearch } from "react-icons/ci";
import { IoIosArrowDown } from "react-icons/io";
import { RxCross1 } from "react-icons/rx";
import {
  MdArrowForward,
  MdDownloading,
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
  },
];

const products2 = [
  {
    id: 5,
    name: "Tablet",
    price: "$399",
    image: "https://via.placeholder.com/150",
    description: "Portable and powerful tablet",
    stars: 652,
    tag: "BEST DEALS",
  },
  {
    id: 6,
    name: "Gaming Console",
    price: "$599",
    image: "https://via.placeholder.com/150",
    description: "Next-gen gaming console",
    stars: 945,
  },
  {
    id: 7,
    name: "Bluetooth Speaker",
    price: "$129",
    image: "https://via.placeholder.com/150",
    description: "High-quality Bluetooth speaker",
    stars: 311,
    tag: "HOT ",
  },
];
const products3 = [
  {
    id: 1,
    name: "Tablet",
    price: "$299",
    image: "https://via.placeholder.com/150",
    description: "Portable tablet with high-resolution display",
    stars: 432,
    tag: "HOT",
  },
  {
    id: 2,
    name: "Gaming Console",
    price: "$399",
    image: "https://via.placeholder.com/150",
    description: "Next-gen gaming console with ultra-HD graphics",
    stars: 589,
    tag: "BEST DEALS",
  },
  {
    id: 3,
    name: "Bluetooth Speaker",
    price: "$99",
    image: "https://via.placeholder.com/150",
    description: "Waterproof Bluetooth speaker with rich sound",
    stars: 287,
    tag: "HOT",
  },
  {
    id: 4,
    name: "Camera",
    price: "$749",
    image: "https://via.placeholder.com/150",
    description: "DSLR camera with 24MP resolution",
    stars: 918,
    tag: "BEST DEALS",
  },
  {
    id: 5,
    name: "4K Monitor",
    price: "$499",
    image: "https://via.placeholder.com/150",
    description: "Ultra-wide 4K monitor for productivity",
    stars: 651,
    tag: "HOT",
  },
];


const BrowsingHistory = () => {
  const [isOn, setIsOn] = useState(false);

  const handleToggle = () => {
    setIsOn(!isOn);
  };

  return (
    <div className="flex flex-col gap-5">
      <div className=" flex justify-between">
        <h2 className="font-bold">Browsing History</h2>
        <div className="flex gap-2">
        <p>turn browsing history on/off</p>

        <div
          onClick={handleToggle}
          className={`w-12 h-6 flex items-center rounded-full p-1 cursor-pointer transition-colors duration-300 ${
            isOn ? "bg-[#0B5D51]" : "bg-gray-300"
          }`}
        >
          <div
            className={`bg-white w-4 h-4 rounded-full shadow-md transform transition-transform duration-300 ${
              isOn ? "translate-x-6" : "translate-x-0"
            }`}
          />
        </div>{" "}
        </div>

      </div>
      <div className="topBar flex  w-full gap-5">
        <div className="searchbar w-[424px] flex  border-[1px] rounded-sm border-gray-200 items-center px-4 py-2 h-[44px]">
          <CiSearch size={25} className="text-[#0B5D51]"/>
          <input
            type="text"
            className="text-[14px] w-full focus:border-none  focus:outline-none px-2 h-full border-none"
            placeholder="Search in browsing history..."
          />
        </div>
        <div className="searchbar flex justify-between border-[1px] w-[312px] rounded-sm border-gray-200 items-center px-4 py-2 h-[44px]">
          {/* Date Icon */}
          <MdOutlineDateRange size={20}  className="text-[#0B5D51]" />

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
          {products1.map((product, index) => (
            <div
              key={product.id}
              className={`bg-white rounded-sm overflow-hidden  h-[320px] ${
                index == products1.length - 1
                  ? "border-none"
                  : "border-r-[1.5px] border-gray-200"
              }`}
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
      <div className="border-2 border-gray-200 rounded-md flex flex-col">
        <div className="font-bold h-[52px] flex items-center px-4 border-b-2 border-gray-200">
          17,OCT,2020
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 py-4 px-2">
          {products2.map((product, index) => (
            <div
              key={product.id}
              className={`bg-white rounded-sm overflow-hidden  h-[320px] ${
                index == products2.length - 1
                  ? "border-none"
                  : "border-r-[1.5px] border-gray-200"
              }`}
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
      
      <div className="border-2 border-gray-200 rounded-md flex flex-col">
        <div className="font-bold h-[52px] flex items-center px-4 border-b-2 border-gray-200">
          17,OCT,2020
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 py-4 px-2">
          {products3.map((product, index) => (
            <div
              key={product.id}
              className={`bg-white rounded-sm overflow-hidden  h-[320px] ${
                index == products3.length - 1
                  ? "border-none mt-3"
                  : "border-r-[1.5px] border-b-[1.5px] border-gray-200"
              }`}
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
      <div className="border-2 border-gray-200 rounded-md flex flex-col">
        <div className="font-bold h-[52px] flex items-center px-4 border-b-2 border-gray-200">
          17,OCT,2020
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 py-4 px-2">
          {products1.map((product, index) => (
            <div
              key={product.id}
              className={`bg-white rounded-sm overflow-hidden  h-[320px] ${
                index == products1.length - 1
                  ? "border-none"
                  : "border-r-[1.5px] border-gray-200"
              }`}
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
      <div className="border-2 border-gray-200 rounded-md flex flex-col">
  <div className="font-bold h-[52px] flex items-center px-4 border-b-2 border-gray-200">
    17,OCT,2020
  </div>
  <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 py-4 px-2">
    <div className="bg-white rounded-sm overflow-hidden h-[320px] border-none">
      <div className="relative">
        <div className="absolute left-3 top-3 rounded-sm px-4 py-2 bg-[#EE5858] text-white">
          HOT
        </div>
        <img
          src="https://via.placeholder.com/150"
          alt="Laptop"
          className="w-full h-[172px] object-cover"
        />
      </div>
      <div className="p-4">
        <div className="flex gap-[1px] text-[#0B5D51] items-center">
          <MdOutlineStarPurple500 />
          <MdOutlineStarPurple500 />
          <MdOutlineStarPurple500 />
          <MdOutlineStarPurple500 />
          <MdOutlineStarPurple500 />(720)
        </div>
        <h2 className="text-[#191C1F] text-[14px]">Laptop</h2>
        <p className="text-[#191C1F] text-[14px] mb-2">
          High-performance laptop
        </p>
        <div className="text-[14px] font-bold mb-2 text-[#0B5D51]">
          $999
        </div>
      </div>
    </div>
  </div>
</div>

     <div className="loading flex w-full items-center justify-center text-[#0B5D51]">
     <button className= " rounded-sm border border-red-200 p-3 flex gap-2 uppercase items-center justify-center">
      <MdDownloading />

      Load more

     </button>
     </div>
    </div>
  );
};

export default BrowsingHistory;
