import React from "react";
import { IoIosArrowRoundForward } from "react-icons/io";
import { FaArrowRight, FaStar } from "react-icons/fa";
import { FaCamera, FaPlay, FaHeart } from "react-icons/fa"; // Import new icons
import electronic from "../assets/Electronic.png";
import computer from "../assets/Computer1.png";
import drone1 from "../assets/Drone.png";
import mobile2 from "../assets/mobile2.png";
import remote from "../assets/remote.png";
import headphones from "../assets/headphones.png";
import mobile from "../assets/mobile.png";
import drone from "../assets/drone.png";
import camara from "../assets/camara.png";
// import ac from "../assets/AC.png";
import lcd from "../assets/LCD.png";
import { GrFavorite } from "react-icons/gr";
import { IoEyeOutline } from "react-icons/io5";
import { IoCartOutline } from "react-icons/io5";
import bluetooth from "../assets/Blutooth.png";
// Function to render stars based on rating
const renderStars = (rating) => {
  return (
    <div className="flex space-x-1 mb-2">
      {[...Array(5)].map((_, index) => (
        <FaStar
          key={index}
          color={index < rating ? "#0B5D51" : "lightgray"}
          size={20}
        />
      ))}
    </div>
  );
};

const columnData = [
  {
    id: 1,
    image: drone1,
    description: "TOZO T6 True Wireless Earbuds Bluetooth Headphon...",
    price: "$2,300",
    sale: "HOT",
    rating: 5,
  },
  {
    id: 2,
    image: mobile2,
    description: "Samsung Electronics Samsung Galaxy S21 5G",
    price: "$220",
    rating: 4,
  },
  {
    id: 3,
    image: mobile2,
    description: "Amazon Basics High-Speed HDMI Cable (18 Gbps, 4K/6...",
    price: "$1,500",
    sale: "BEST DEALS",
    rating: 3,
  },
  {
    id: 4,
    image: headphones,
    description: "Portable Washing Machine, 11lbs capacity Model 18NMF...",
    price: "$1,200",
    rating: 4,
  },
  {
    id: 5,
    image: mobile,
    description: "Wired Over-Ear Gaming Headphones with USB",
    price: "$299",
    rating: 5,
  },
  {
    id: 6,
    image: drone,
    description: "Polaroid 57-Inch Photo/Video Tripod with Deluxe Tripod Ca...",
    price: "$200.00",
    sale: "25% OFF",
    rating: 2,
  },
  {
    id: 7,
    image: lcd,
    description: "2-Barrel Carburetor Carb 2100 Engine Increase Horsepower",
    price: "$200.00",
    rating: 3,
  },
  {
    id: 8,
    image: camara,
    description:
      "Dell Optiplex 7000x7480 All-in-One Computer Monitor4K UHD LED Smart TV with Chromecast Built-in",
    price: "$200.00",
    sale: "SALE",
    rating: 4,
  },
];
const Accessories = () => {
  return (
    <div className="mt-[50px] grid grid-cols-12 justify-start gap-10 px-[40px]">
      {/* Left Column
   
      {/* Right Column */}
      <div className="col-span-8 flex flex-col h-full">
        <div className="flex items-center justify-between">
          <h3 className="font-[600] text-[24px]">Computer Accessories</h3>
          <div className="flex gap-4 items-center">
            <div className="flex gap-3 items-center">
              <a
                href=""
                className="text-[14px] hover:underline hover:decoration-orange-500"
              >
                All Products
              </a>
              <a href="" className="text-[14px]">
                Smart Phone
              </a>
              <a href="" className="text-[14px]">
                Laptop
              </a>
              <a href="" className="text-[14px]">
                Headphone
              </a>
              <a href="" className="text-[14px]">
                TV
              </a>
            </div>
            <div className="flex gap-6">
              <a
                href=""
                className="text-[14px] text-[#FA8232] flex gap-3 items-center"
              >
                Browse All Product
                <span>
                  <FaArrowRight />
                </span>
              </a>
            </div>
          </div>
        </div>
        <div className="grid grid-cols-4 gap-4 mt-4 flex-grow">
          {columnData.map((product) => (
            <div
              key={product.id}
              className={`border border-[#0B5D51] p-4 flex flex-col items-center relative`}
            >
              <p
                className={`px-2 py-1 font-bold self-start ${
                  product.sale === "HOT"
                    ? "bg-red-500 text-white"
                    : product.sale === "BEST DEALS"
                    ? "bg-green-800 text-white"
                    : product.sale === "25% OFF"
                    ? "bg-yellow-500 text-white"
                    : product.sale === "SALE"
                    ? "bg-[#2DB224] text-white"
                    : "hidden"
                }`}
              >
                {product.sale}
              </p>

              <div
                className={`mb-2 relative flex items-center justify-center ${
                  product.id === 7 ? "bg-gray-300" : ""
                }`}
              >
                <img
                  src={product.image}
                  alt={product.description}
                  className={`w-full h-auto ${
                    product.id === 7 ? "border-0" : ""
                  }`}
                />
                {product.id === 7 && (
                  <div className="absolute inset-0 flex items-center justify-center space-x-4">
                    <div className="flex gap-2">
                      <div className="bg-[#0B5D51] p-2 rounded-full">
                        <GrFavorite size={24} color="white" />
                      </div>

                      <div className="bg-white p-2 rounded-full shadow">
                        <IoCartOutline size={24} color="black" />
                      </div>

                      <div className="bg-white p-2 rounded-full shadow">
                        <IoEyeOutline size={24} color="black" />
                      </div>
                    </div>
                  </div>
                )}
              </div>

              {renderStars(product.rating)}
              <h4 className="text-[14px] font-[400]">{product.description}</h4>
              <p className="text-[#0B5D51] font-semibold">{product.price}</p>
            </div>
          ))}
        </div>
      </div>
      <div className="col-span-4  p-4 flex flex-col gap-4 h-full">
        <div className="bg-[#F7E99E] h-[428px] w-[312px] flex flex-col gap-4 items-center  justify-center text-center">
          {" "}
          <img src={bluetooth} width={108} height={108} alt="" />
          <h1 className="text-[28px] font-[600]">
            Xiaomi True <br /> Wireless Earbuds
          </h1>
          <p className="text-[16px] leading-[24px]">
            Escape the noise, It’s time to hear the magic with Xiaomi Earbuds.
          </p>
          <div className="flex gap-3 items-center justify-center">
            {" "}
            {/* Added justify-center */}
            <p className="text-[14px]">Only for:</p>
            <p className="text-[16px] bg-white p-3">$299 USD</p>
          </div>
          <button className="bg-[#0B5D51] text-white font-[700] w-[248px] h-[48px] py-2 flex items-center justify-center">
            <span>Shop Now</span>
            <IoIosArrowRoundForward size={25} />
          </button>
        </div>
        <div
          className="bg-[#124261] w-[312px] h-[312px]  
flex flex-col items-center justify-center gap-4 
"
        >
          <p className="bg-[#FFFFFF1F] text-[white] text-[14px] p-2">
            SUMMER SALES
          </p>
          <h1 className="text-[28px] font-[600] text-white">37% DISCOUNT</h1>
          <p className="text-[18px]">
            only for{" "}
            <span
              className="text-[#EFD33D]
"
            >
              {" "}
              SmartPhone
            </span>{" "}
            product.
          </p>
          <button className="bg-[#2DA5F3] text-white font-[700] w-[248px] h-[48px] py-2 flex items-center justify-center">
            <span>Shop Now</span>
            <IoIosArrowRoundForward size={25} />
          </button>
        </div>
      </div>{" "}
    </div>
  );
};

export default Accessories;
