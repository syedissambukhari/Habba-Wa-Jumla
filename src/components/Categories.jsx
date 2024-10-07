import React, { useRef } from "react";
import headphones from "../assets/Headphones.png"; // Importing the product image
import mobile from "../assets/Mobile3.png";
import computer from "../assets/Computer1.png";
import keyboard from "../assets/Keyboard.png";
import camara from "../assets/Camara1.png";
import mobile3 from "../assets/Mobile.png";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";
const products = [
  {
    id: 1,
    image: computer,
    name: "Computer & Laptop",
  },
  {
    id: 2,
    image: mobile,
    name: "SmartPhone",
  },
  {
    id: 3,
    image: headphones,
    name: "Headphones",
  },
  {
    id: 4,
    image: keyboard,
    name: "Accessories",
  },
  {
    id: 5,
    image: camara,
    name: "Camera & Photo",
  },
  {
    id: 6,
    image: mobile3,
    name: "TV & Homes",
  },
  {
    id: 7,
    image: headphones,
    name: "Accessory 7",
  },
  {
    id: 8,
    image: headphones,
    name: "Accessory 8",
  },
  {
    id: 9,
    image: headphones,
    name: "Accessory 9",
  },
  {
    id: 10,
    image: headphones,
    name: "Accessory 10",
  },
];

const Categories = () => {
  const scrollRef = useRef(null);
  const itemWidth = 205;
  const itemSpacing = 16;
  const scrollLeft = () => {
    if (scrollRef.current) {
      scrollRef.current.scrollBy({
        left: -(itemWidth + itemSpacing),
        behavior: "smooth",
      });
    }
  };
  const scrollRight = () => {
    if (scrollRef.current) {
      scrollRef.current.scrollBy({
        left: itemWidth + itemSpacing,
        behavior: "smooth",
      });
    }
  };

  return (
    <div className="mt-[50px] flex flex-col justify-between gap-5 px-[40px]">
      <div className="text-[32px] font-[600] text-center">
        Shop with Categories
      </div>
      <div className="relative">
        {/* Left Arrow Button */}
        <button
          onClick={scrollLeft}
          className="absolute left-0 top-1/2 transform -translate-y-1/2 bg-[#0B5D51] rounded-full p-4 z-10"
        >
          <FaArrowLeft color="white" />
        </button>

        {/* Scrollable Container */}
        <div
          ref={scrollRef}
          className="flex overflow-x-hidden p-4"
          style={{ scrollBehavior: "smooth", maxWidth: "100%" }}
        >
          <div className="flex space-x-4">
            {products.map((product) => (
              <div
                key={product.id}
                className="flex flex-col items-center bg-white border border-gray-300 p-2 rounded-md shadow-lg"
                style={{ width: "205px", height: "236px" }}
              >
                <img
                  src={product.image}
                  alt={product.name}
                  className="mb-2 w-full h-4/5 object-cover"
                  style={{ maxHeight: "188px" }}
                />
                <p className="text-lg font-semibold">{product.name}</p>
              </div>
            ))}
          </div>
        </div>
        <button
          onClick={scrollRight}
          className="absolute right-0 top-1/2 transform -translate-y-1/2 bg-[#0B5D51] rounded-full p-4 z-10"
        >
          <FaArrowRight color="white" />
        </button>
      </div>
    </div>
  );
};

export default Categories;
