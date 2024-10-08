import React from "react";
import mirror from "../assets/Mirror.png";
import galaxy from "../assets/Product1.png";
import keyboard from "../assets/Keyboard.png";
import portable from "../assets/portable.png";
import wireless from "../assets/wireless.png";
// Sample data for the grid
const productData = [
  {
    id: 1,
    img: mirror,
    description:
      "Bose Sport Earbuds - Wireless Earphones - Bluetooth In Ear...",
    price: "$50",
  },
  {
    id: 2,
    img: galaxy,
    description: "Samsung Electronics Samsung Galaxy S21 5G",
    price: "$75",
  },
  {
    id: 3,
    img: portable,
    description: "Portable Washing Machine, 11lbs capacity Model 18NMF..",
    price: "$100",
  },
  {
    id: 4,
    img: wireless,
    description: "Portable Washing Machine, 11lbs capacity Model 18NMF..",
    price: "$25",
  },
  {
    id: 5,
    img: wireless,
    description: "Simple Mobile 4G LTE Prepaid Smartphone",
    price: "$25",
  },
  {
    id: 6,
    img: wireless,
    description: "Simple Mobile 5G LTE Galaxy 12 Mini 512GB Gaming Phone",
    price: "$25",
  },
  {
    id: 7,
    img: wireless,
    description: "Sony DSCHX8 High Zoom Point & Shoot Camera",
    price: "$25",
  },
  {
    id: 8,
    img: wireless,
    description: "JBL FLIP 4 - Waterproof Portable Bluetooth Speaker...",
    price: "$25",
  },
  {
    id: 9,
    img: wireless,
    description: "4K UHD LED Smart TV with Chromecast Built-in",
    price: "$25",
  },
  {
    id: 10,
    img: wireless,
    description: "Sony DSCHX8 High Zoom Point & Shoot Camera",
    price: "$25",
  },
  {
    id: 11,
    img: wireless,
    description: "Dell Optiplex 7000x7480 All-in-One Computer Monitor",
    price: "$25",
  },
  {
    id: 12,
    img: wireless,
    description: "Wyze Cam Pan v2 1080p Pan/Tilt/Zoom Wi-Fi Indoor Sma",
    price: "$25",
  },
];
const headings = [
  "FLASH SALE TODAY",
  "BEST SELLERS",
  "TOP RATED",
  "NEW ARRIVAL",
];

const Itemcard = () => {
  return (
    <div className="grid grid-cols-4 gap-3 p-4">
      {headings.map((heading, index) => (
        <div key={index}>
          <h2 className="text-black text-[16px] font-[600] mb-3">{heading}</h2>
          {productData.slice(index * 3, (index + 1) * 3).map((product) => (
            <div
              key={product.id}
              className="bg-white border border-gray-500 flex items-center gap-1 p-3 text-center mb-4"
            >
              <div>
                <img
                  src={product.img}
                  alt={product.description}
                  className="w-full h-32 object-cover mb-2"
                />
              </div>
              <div>
                <p className="text-gray-600 text-[14px] mb-2">
                  {product.description}
                </p>
                <span className="text-[#0B5D51] text-[14px] font-[600] text-xl">
                  {product.price}
                </span>
              </div>
            </div>
          ))}
        </div>
      ))}
    </div>
  );
};

export default Itemcard;
