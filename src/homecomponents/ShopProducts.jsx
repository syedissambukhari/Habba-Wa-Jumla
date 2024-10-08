import React from "react";
import { CiSearch } from "react-icons/ci";
import { IoIosArrowDown } from "react-icons/io";
import { RxCross1 } from "react-icons/rx";
import { MdArrowForward, MdOutlineStarPurple500 } from "react-icons/md";
import { MdArrowBack } from "react-icons/md";

const products = [
  {
    id: 1,
    name: "Laptop",
    price: "$999",
    image: "https://via.placeholder.com/150",
    description: "High-performance laptop",
    stars: 720,
    tag:"HOT"
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
    tag:"BEST DEALS"

  },
  {
    id: 4,
    name: "Smartwatch",
    price: "$299",
    image: "https://via.placeholder.com/150",
    description: "Feature-rich smartwatch",
    stars: 122,
  },
  {
    id: 5,
    name: "Tablet",
    price: "$399",
    image: "https://via.placeholder.com/150",
    description: "Portable tablet device",
    stars: 723,
  },
  {
    id: 6,
    name: "Camera",
    price: "$799",
    image: "https://via.placeholder.com/150",
    description: "Professional camera",
    stars: 340,
    tag:"25% OFF"

  },
  {
    id: 7,
    name: "Gaming Console",
    price: "$599",
    image: "https://via.placeholder.com/150",
    description: "Next-gen gaming console",
    stars: 890,
  },
  {
    id: 8,
    name: "Speakers",
    price: "$149",
    image: "https://via.placeholder.com/150",
    description: "Wireless Bluetooth speakers",
    stars: 120,
    tag:"SALE"

  },
  {
    id: 9,
    name: "Monitor",
    price: "$299",
    image: "https://via.placeholder.com/150",
    description: "4K Ultra HD monitor",
    stars: 430,
    tag:"BEST DEALS"

  },
  {
    id: 10,
    name: "Keyboard",
    price: "$99",
    image: "https://via.placeholder.com/150",
    description: "Mechanical gaming keyboard",
    stars: 510,
  },
  {
    id: 11,
    name: "Mouse",
    price: "$49",
    image: "https://via.placeholder.com/150",
    description: "Wireless optical mouse",
    stars: 600,
    tag:"HOT"

  },
  {
    id: 12,
    name: "Printer",
    price: "$159",
    image: "https://via.placeholder.com/150",
    description: "All-in-one laser printer",
    stars: 250,
  },
  {
    id: 13,
    name: "Router",
    price: "$79",
    image: "https://via.placeholder.com/150",
    description: "High-speed Wi-Fi router",
    stars: 290,
  },
  {
    id: 14,
    name: "External Hard Drive",
    price: "$129",
    image: "https://via.placeholder.com/150",
    description: "1TB portable external hard drive",
    stars: 390,
    tag:"SALE"

  },
  {
    id: 15,
    name: "Smart TV",
    price: "$899",
    image: "https://via.placeholder.com/150",
    description: "55-inch Smart LED TV",
    stars: 800,
  },
  {
    id: 16,
    name: "Gaming Chair",
    price: "$249",
    image: "https://via.placeholder.com/150",
    description: "Ergonomic gaming chair",
    stars: 350,
    tag:"25% OFF"

  },
  {
    id: 17,
    name: "Fitness Tracker",
    price: "$89",
    image: "https://via.placeholder.com/150",
    description: "Waterproof fitness tracker",
    stars: 460,
    tag:"HOT"

  },
  {
    id: 18,
    name: "Drone",
    price: "$599",
    image: "https://via.placeholder.com/150",
    description: "4K camera drone",
    stars: 630,
  },
  {
    id: 19,
    name: "VR Headset",
    price: "$399",
    image: "https://via.placeholder.com/150",
    description: "Virtual reality headset",
    stars: 720,
    tag:"BEST DEALS"

  },
  {
    id: 20,
    name: "Bluetooth Earbuds",
    price: "$149",
    image: "https://via.placeholder.com/150",
    description: "Noise-cancelling Bluetooth earbuds",
    stars: 510,
  },
  {
    id: 21,
    name: "Portable Charger",
    price: "$59",
    image: "https://via.placeholder.com/150",
    description: "10,000mAh portable power bank",
    stars: 410,
    tag:"BEST DEALS"

  },
  {
    id: 22,
    name: "Smart Home Hub",
    price: "$199",
    image: "https://via.placeholder.com/150",
    description: "Voice-controlled smart home hub",
    stars: 330,
  },
  {
    id: 23,
    name: "Action Camera",
    price: "$299",
    image: "https://via.placeholder.com/150",
    description: "Waterproof action camera",
    stars: 620,
  },
  {
    id: 24,
    name: "Electric Scooter",
    price: "$499",
    image: "https://via.placeholder.com/150",
    description: "Foldable electric scooter",
    stars: 540,
    tag:"HOT"
  },
];



const ShopProducts = () => {
  return (
    <div className="flex flex-col gap-5">
      <div className="topBar flex justify-between w-full">
        <div className="searchbar flex justify-between border-[1px] rounded-sm border-gray-200 items-center px-5 py-2 h-[44px]">
          <input
            type="text"
            className="text-[14px] focus:border-none  focus:outline-none px-2 h-full w-[424px] border-none"
            placeholder="Search for anything..."
          />
          <CiSearch size={25} />
        </div>
        <div className="sortby flex gap-2 items-center text-[#475156]  rounded-sm">
          <h3 className="text-black">Sort by:</h3>
          <div className="flex justify-between px-5 py-2 h-[44px] border-[1px] border-gray-200 items-center gap-3">
            Most popular
            <IoIosArrowDown />
          </div>
        </div>
      </div>

      <div className="filters flex w-full h-[44px] px-8 py-2 bg-[#F2F4F5] justify-between">
        <div className="flex gap-4 items-center">
          <p className="text-gray-600">Active Filters:</p>
          <div className="flex gap-2 items-center justify-center font-semibold">
            Electronic Devices
            <RxCross1 size={13} className="text-gray-600" />
          </div>
          <div className="flex gap-2 items-center justify-center font-semibold  ">
            5 Star Rating
            <RxCross1 size={13} className="text-gray-600" />
          </div>
        </div>
        <div className="font-bold">
          65867{" "}
          <span className="text-gray-600 font-normal">Results found.</span>
        </div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-[16px] ">
        {products.map((product) => (
          <div
            key={product.id}
            className="bg-white shadow-md rounded-sm overflow-hidden border-[1.5px] border-[#073741] h-[320px]"
          >
           <div className="relative">
            <div className={`absolute left-3 top-3 rounded-sm px-4 py-2 ${product.tag=="HOT"?"bg-[#EE5858] text-white":product.tag=="BEST DEALS"?"bg-[#0B5D51] text-white ":product.tag=="25% OFF"?"bg-[#EFD33D] text-black":product.tag=="SALE"?"bg-[#2DB224] text-white":""}`}>{product.tag}</div>
           <img
              src={product.image}
              alt={product.name}
              className="w-full h-[172px] object-cover"
            />
           </div>
            <div className="p-4">
              <div className="flex gap-[1px] text-[#0B5D51] items-center">
                <MdOutlineStarPurple500/>
                <MdOutlineStarPurple500/>
                <MdOutlineStarPurple500/>
                <MdOutlineStarPurple500/>
                <MdOutlineStarPurple500/>
                ({product.stars})
              </div>
              <h2 className="text-[#191C1F] text-[14px] ">{product.name}</h2>
              <p className="text-[#191C1F] text-[14px] mb-2">
                {product.description}
              </p>
              <div className="text-[14px] font-bold mb-2 text-[#0B5D51]">{product.price}</div>
              
            </div>
          </div>
        ))}
      </div>
      <div className="navigators flex gap-4 mt-4  m-auto">
        <button className="flex mr-3 justify-center items-center rounded-full h-[40px] w-[40px] text-[#0B5D51] border-2 border-[#0B5D51]">
          <MdArrowBack size={24}/>
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
          <MdArrowForward size={24}/>
        </button>
      </div>
    </div>
  );
};

export default ShopProducts;
