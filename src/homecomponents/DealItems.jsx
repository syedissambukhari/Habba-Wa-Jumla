import React from "react";
import product from "../assets/Product1.png"; // Use the product image from your assets
import { GrFavorite } from "react-icons/gr";
import { IoEyeOutline } from "react-icons/io5";
import { IoCartOutline } from "react-icons/io5";
import { FaStar } from "react-icons/fa";
import camara from "../assets/Camara.png";
import computer from "../assets/Computer.png";
import drone from "../assets/Drone.png";
import mobile from "../assets/Mobile2.png";
import headphones from "../assets/Headphone.png";
import remote from "../assets/Remote.png";
import mobile2 from "../assets/Mobile3.png";
import drone1 from "../assets/Drone2.png";
const columnData = [
  {
    id: 1,
    image: drone1,
    description:
      "Bose Sport Earbuds - Wireless Earphones - Bluetooth In Ear...",
    price: "$2,300",
    sale: "SOLD OUT",
    bgColor: "",
  },
  {
    id: 2,
    image: mobile2,
    description: "Simple Mobile 4G LTE Prepaid Smartphone",
    price: "$220",
    bgColor: "",
  },
  {
    id: 3,
    image: remote,
    description: "4K UHD LED Smart TV with Chromecast Built-in",
    price: "$1,50",
    sale: "19% OFF",
    bgColor: "",
  },
  {
    id: 4,
    image: headphones,
    description: "Sony DSCHX8 High Zoom Point & Shoot Camera",
    price: "$1,200",
    bgColor: "bg-gray-300",
  },
  {
    id: 5,
    image: mobile,
    description: "Dell Optiplex 7000x7480 All-in-One Computer Monitor",
    price: "$299",
    bgColor: "",
  },
  {
    id: 6,
    image: drone,
    description: "Portable Washing Machine, 11lbs capacity Model 18NMFIAM",
    price: "$200.00",
    sale: "HOT",
    bgColor: "",
  },
  {
    id: 7,
    image: computer,
    description: "2-Barrel Carburetor Carb 2100 Engine Increase Horsepower",
    price: "$200.00",
    bgColor: "",
  },
  {
    id: 8,
    image: camara,
    description: "JBL FLIP 4 - Waterproof Portable Bluetooth Speaker - Black",
    price: "$200.00",
    sale: "32% OFF",
    bgColor: "",
  },
];

const DealItems = () => {
  return (
    <div className="mt-4 grid grid-cols-12">
      {/* Left Big Div */}
      <div className="col-span-4 flex flex-col gap-4 border border-[#E4E7E9] p-4">
        <div>
          <p className="inline-block  bg-[#F3DE6D] text-black px-3 py-1">
            32% OFF
          </p>
        </div>
        <div className="flex gap-2 mt-3">
          <div>
            <p className="inline-block bg-[#EE5858] px-3 py-1">HOT</p>
          </div>
          <img src={product} alt="" />
        </div>
        <div className="flex items-center gap-1">
          {[...Array(5)].map((_, index) => (
            <span key={index} className="text-[#EBC80C]">
              <FaStar />
            </span>
          ))}
        </div>
        <p className="text-[16px] line-clamp-2">
          Xbox Series S - 512GB SSD Console with Wireless Controller - EU
          Version...
        </p>
        <p className="text-[16px] text-[#ADB7BC]">
          <span className="line-through">$865.99</span>
          <span className="ml-2 text-[18px] text-[#2DA5F3]">$442.12</span>
        </p>

        <p className="text-[14px] leading-[20px] text-[#5F6C72] line-clamp-3 mb-0">
          Games built using the Xbox Series X|S development kit showcase
          unparalleled load times, visuals.
        </p>
        <div className="flex gap-3 items-center mt-auto justify-center">
          <div className="bg-[#FFE7D6] h-[48px] w-[48px] flex items-center justify-center">
            <GrFavorite color="" size={20.4} />
          </div>
          <button className="flex items-center justify-center gap-2 bg-[#FA8232] h-[48px] w-[174px] text-white">
            <span>
              <IoCartOutline color="white" size={20.4} />
            </span>
            <span>Add to cart</span>
          </button>
          <div className="bg-[#FFE7D6] h-[48px] w-[48px] flex items-center justify-center">
            <IoEyeOutline size={20.4} />
          </div>
        </div>
      </div>

      {/* Right Div with 2 rows and 4 columns, borders only on right, top, and bottom */}
      <div className="col-span-8 grid grid-cols-4 border-t border-r border-b border-[#0B5D51]">
        {columnData.map((item, index) => (
          <div
            key={item.id}
            className={`p-4 flex flex-col items-start border-t border-b border-[#0B5D51] ${
              index % 4 !== 3 ? "border-r border-[#0B5D51]" : ""
            }`}
          >
            {/* Sale offer for specific columns */}
            {item.sale && (
              <p
                className={`inline-block px-2 py-1 mb-2 ${
                  item.sale === "SOLD OUT"
                    ? "bg-gray-500 text-white"
                    : item.sale === "19% OFF" || item.sale === "32% OFF"
                    ? "bg-yellow-400 text-black"
                    : item.sale === "HOT"
                    ? "bg-red-500 text-white"
                    : ""
                }`}
              >
                {item.sale}
              </p>
            )}

            {/* Conditionally add background color only to the 4th column */}
            <div
              className={`relative ${item.id === 4 ? "bg-gray-300 p-4" : ""}`}
            >
              <img src={item.image} alt="Product" className="mb-4" />

              {/* Conditionally render icons only in the 4th column, centered over the image */}
              {item.id === 4 && (
                <div className="absolute inset-0 flex justify-center items-center">
                  <div className="flex gap-2">
                    {/* First icon with green background */}
                    <div className="bg-[#0B5D51] p-2 rounded-full">
                      <GrFavorite size={24} color="white" />
                    </div>
                    {/* Second icon with white background */}
                    <div className="bg-white p-2 rounded-full shadow">
                      <IoCartOutline size={24} color="black" />
                    </div>
                    {/* Third icon with white background */}
                    <div className="bg-white p-2 rounded-full shadow">
                      <IoEyeOutline size={24} color="black" />
                    </div>
                  </div>
                </div>
              )}
            </div>

            <p className="text-[16px]">{item.description}</p>
            <p className="text-[#0B5D51] ">{item.price}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default DealItems;
