import React, { useState } from "react";
import Laptop from "../src/assets/Laptop.png";
import img1 from "../src/assets/im1.png";
import img2 from "../src/assets/img2.png";
import img3 from "../src/assets/img3.png";
import img4 from "../src/assets/img4.png";
import img5 from "../src/assets/img5.png";
import img6 from "../src/assets/img6.png";
import img7 from "../src/assets/img7.png";
import img8 from "../src/assets/img8.png";
import img9 from "../src/assets/img9.png";
import img10 from "../src/assets/img10.png";
import img11 from "../src/assets/img11.png";
import img12 from "../src/assets/img12.png";
import img13 from "../src/assets/img13.png";
import img14 from "../src/assets/img14.png";
import img15 from "../src/assets/img15.png";
import mobile from "../src/assets/mobile.png";
import bankimages from "../src/assets/bankimages.png";
import { CiShoppingCart } from "react-icons/ci";
import { PiMedalLight } from "react-icons/pi";
import { FiTruck } from "react-icons/fi";
import { PiHandshakeLight } from "react-icons/pi";
import { PiHeadphonesBold } from "react-icons/pi";
import { HiOutlineCreditCard } from "react-icons/hi";
import {
  FaHeart,
  FaSyncAlt,
  FaFacebook,
  FaTwitter,
  FaPinterest,
} from "react-icons/fa";

// import img4 from "../src/assets/img4.png";
// import img4 from "../src/assets/img4.png";

const imageArray = [
  { src: Laptop, alt: "Thumbnail 1" },
  { src: img1, alt: "Thumbnail 2" },
  { src: img2, alt: "Thumbnail 3" },
  { src: img3, alt: "Thumbnail 4" },
  { src: img4, alt: "Thumbnail 5" },
];

const pricingData = [
  { price: "$1699", quantity: "1 piece" },
  { price: "$1699", quantity: "1 piece" },
  { price: "$1699", quantity: "1 piece" },
];

const relatedProducts = [
  {
    img: img1,
    name: "Bose Sport Earbuds – Wireless Earphones",
    price: "$1,500",
  },
  { img: img2, name: "Sony WH-1000XM4", price: "$2,000" },
  { img: img2, name: "Sony WH-1000XM4", price: "$2,000" },
];

const productAccessories = [
  { img: img6, name: "Samsung Electronics Galaxy S21 5G", price: "$1,500" },
  { img: img8, name: "Samsung Galaxy Buds Pro", price: "$200" },
  { img: mobile, name: "Samsung Wireless Charger", price: "$50" },
];

const appleProducts = [
  { img: img10, name: "TOZO T6 True Wireless Earbuds", price: "$1,500" },
  { img: img11, name: "Apple AirPods Pro", price: "$1,800" },
  { img: img12, name: "Apple MagSafe Charger", price: "$100" },
];

const featuredProducts = [
  { img: img13, name: "Portable Washing Machine", price: "$1,500" },
  { img: img14, name: "Mini Fridge", price: "$300" },
  { img: img15, name: "Dyson Air Purifier", price: "$500" },
];

const DetailsProduct = () => {
  // State to store the selected quantity
  const [quantity, setQuantity] = useState(1);

  // Function to handle increment
  const handleIncrease = () => {
    setQuantity((prevQuantity) => prevQuantity + 1);
  };

  // Function to handle decrement
  const handleDecrease = () => {
    if (quantity > 1) {
      setQuantity((prevQuantity) => prevQuantity - 1);
    }
  };

  return (
    <div className="container mx-auto p-4">
      {/* Main Container */}
      <div className="flex flex-col md:flex-row gap-8">
        {/* Left Column - Product Image and Thumbnails */}
        <div className="flex-1">
          <img
            src={Laptop}
            alt="laptop img"
            className="w-full h-auto object-cover rounded-lg shadow-lg"
          />

          {/* Thumbnails */}
          <div className="flex justify-center gap-4 mt-4">
            {imageArray.map((image, index) => (
              <button key={index} className="focus:outline-none">
                <img
                  src={image.src}
                  alt={image.alt}
                  className="w-20 h-20 object-cover border border-gray-300 rounded-lg"
                />
              </button>
            ))}
          </div>
        </div>

        {/* Right Column - Product Details */}
        <div className="flex-1 space-y-6">
          <div>
            <div className="flex items-center space-x-2 mt-2">
              <span className="text-yellow-500">
                ⭐⭐⭐⭐⭐ 4.7 Star Rating
              </span>
              <span className="text-sm text-gray-500">
                (21,671 User feedback)
              </span>
            </div>
            <h1 className="text-gray-500">
              2020 Apple MacBook Pro With apple M1 chip (13-inc, 8GB RAM, 256GB
              SSD Storage) - Space Gray
            </h1>
          </div>

          <div className="flex justify-between mt-2">
            <span className="text-sm text-gray-500">Brand: Apple</span>
            <span className="text-sm text-gray-500">
              Category: Electronic Device
            </span>
          </div>

          <div className="flex gap-4 justify-between items-center">
            <div className="space-y-1">
              <p className="text-gray-700 font-medium">Color</p>
              <div className="flex space-x-2">
                <button className="w-6 h-6 bg-gray-500 rounded-full border border-gray-300 focus:outline-none"></button>
                <button className="w-6 h-6 bg-white rounded-full border border-gray-300 focus:outline-none"></button>
              </div>
            </div>
            <div className="space-y-1">
              <p className="text-gray-700 font-medium">Size</p>
              <select className="border border-gray-300 rounded-lg p-2">
                <option>14-inch Liquid Retina XDR display</option>
              </select>
            </div>
          </div>

          {/* Second - Memory and Storage */}
          <div className="flex justify-between items-center gap-4">
            <div className="space-y-1 w-1/2">
              <p className="text-gray-700 font-medium">Memory</p>
              <select className="border border-gray-300 rounded-lg p-2 w-full">
                <option>16GB unified memory</option>
              </select>
            </div>
            <div className="space-y-1 w-1/2">
              <p className="text-gray-700 font-medium">Storage</p>
              <select className="border border-gray-300 rounded-lg p-2 w-full">
                <option>1TB SSD Storage</option>
              </select>
            </div>
          </div>

          {/* Pricing Section */}
          <div className="flex flex-col md:flex-row justify-between gap-4">
            {pricingData.map((item, index) => (
              <div
                key={index}
                className="flex-1 p-4 border border-gray-300 rounded-lg hover:shadow-lg transition-shadow duration-300"
              >
                <p className="text-2xl font-bold">{item.price}</p>
                <p className="text-gray-500">{item.quantity}</p>
              </div>
            ))}
          </div>

          {/* Button Section */}
          <div className="flex items-center space-x-4 mt-4 w-full">
            {/* Quantity Selector */}
            <div className="flex items-center border border-gray-300 rounded-lg">
              <button
                className="px-4 py-2  hover:bg-gray-300 rounded-l-lg"
                onClick={handleDecrease}
              >
                -
              </button>
              <span className="px-4 py-2">{quantity}</span>
              <button
                className="flex  items-center  px-[20px] py-[16px] gap-0  rounded-tl-[3px] rounded-tr-none rounded-br-none rounded-bl-none opacity-100"
                onClick={handleIncrease}
              >
                +
              </button>
            </div>

            {/* Add to Cart Button */}
            <button className="flex items-center justify-center w-[310px] h-[56px] bg-[#0B5D51] text-white rounded-tl-md py-0 px-8 shadow-lg hover:bg-green-700 gap-3 opacity-100">
              Add to Cart <CiShoppingCart className="ml-2" />
            </button>

            {/* Buy Now Button */}
            <button className="flex items-center justify-center w-[142px] h-[56px] bg-transparent text-[#0B5D51] border border-[#0B5D51] rounded-tl-md py-0 px-8 shadow-lg hover:bg-[#0B5D51] hover:text-white opacity-100">
              Buy Now
            </button>
          </div>

          <div className="max-w-4xl mx-auto p-4">
            {/* Action Buttons */}
            <div className="flex justify-between items-center mb-4">
              <div className="flex space-x-6">
                <button className="flex items-center text-gray-600 hover:text-gray-800">
                  <FaHeart className="mr-2" />
                  Add to Wishlist
                </button>
                <button className="flex items-center text-gray-600 hover:text-gray-800">
                  <FaSyncAlt className="mr-2" />
                  Add to Compare
                </button>
              </div>
              {/* Share Section */}
              <div className="flex items-center space-x-4">
                <span className="text-gray-600">Share product:</span>
                <a href="#" className="text-gray-600 hover:text-blue-600">
                  <FaFacebook />
                </a>
                <a href="#" className="text-gray-600 hover:text-blue-400">
                  <FaTwitter />
                </a>
                <a href="#" className="text-gray-600 hover:text-red-600">
                  <FaPinterest />
                </a>
              </div>
            </div>

            {/* Safe Checkout Section */}
            <div className="border p-4 rounded-md bg-gray-50">
              <p className="text-lg font-semibold mb-2">
                100% Guarantee Safe Checkout
              </p>
              <div className="flex space-x-4">
                <img src={bankimages} alt="Visa" className="h-6" />
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Additional Information Section */}
      <div className="mt-8">
        {/* Tabs Section */}
        <div className="flex justify-center items-center space-x-6 border-b border-gray-300">
          <button className="py-2 text-gray-700 font-medium border-b-2 border-orange-600">
            Description
          </button>
          <button className="py-2 text-gray-500 hover:text-gray-700">
            Additional Information
          </button>
          <button className="py-2 text-gray-500 hover:text-gray-700">
            Specification
          </button>
          <button className="py-2 text-gray-500 hover:text-gray-700">
            Review
          </button>
        </div>

        {/* Main Content Section */}
        <div className="mt-4 text-gray-700">
          {/* Parent Container */}
          <div className="w-full max-w-[1320px] h-auto p-0 pb-10 gap-10 rounded-tl-lg border border-gray-300 bg-white opacity-100">
            {/* Inner Container */}
            <div className="flex flex-col md:flex-row justify-between w-full max-w-[1240px] h-auto gap-6 opacity-100">
              {/* Description Section */}
              <div className="w-full md:w-[616px] h-auto gap-3 opacity-100">
                <h2 className="font-bold text-lg border-b border-gray-200 pb-2">
                  Description
                </h2>
                <p className="font-public-sans text-[14px] font-normal leading-[20px] text-[#191C1F]">
                  The most powerful MacBook Pro ever is here. With the
                  blazing-fast M1 Pro or M1 Max chip — the first Apple silicon
                  designed for pros — you get groundbreaking performance and
                  amazing battery life. Add to that a stunning Liquid Retina XDR
                  display, the best camera and audio ever in a Mac notebook, and
                  all the ports you need. The first notebook of its kind, the
                  MacBook Pro is a beast. M1 Pro takes the exceptional
                  performance of the M1 architecture to a whole new level for
                  pro users.
                  <br />
                  <br />
                  Even the most ambitious projects are easily handled with up to
                  10 CPU cores, up to 16 GPU cores, a 16-core Neural Engine, and
                  dedicated encode and decode media engines that support H.264,
                  HEVC, and ProRes codecs.
                </p>
              </div>

              {/* Feature Section */}
              <div className="w-full md:w-[280px] h-auto gap-4 opacity-100">
                <h2 className="font-bold text-lg border-b border-gray-200 pb-2">
                  Feature
                </h2>
                <ul className="space-y-2">
                  <li className="flex items-center font-public-sans text-[14px] font-normal leading-[20px] text-[#191C1F]">
                    <PiMedalLight className="mr-2" /> Free 1 Year Warranty
                  </li>
                  <li className="flex items-center font-public-sans text-[14px] font-normal leading-[20px] text-[#191C1F]">
                    <FiTruck className="mr-2" /> Free Shipping & Fast Delivery
                  </li>
                  <li className="flex items-center font-public-sans text-[14px] font-normal leading-[20px] text-[#191C1F]">
                    <PiHandshakeLight className="mr-2" /> 100% Money-back
                    guarantee
                  </li>
                  <li className="flex items-center font-public-sans text-[14px] font-normal leading-[20px] text-[#191C1F]">
                    <PiHeadphonesBold className="mr-2" /> 24/7 Customer support
                  </li>
                  <li className="flex items-center font-public-sans text-[14px] font-normal leading-[20px] text-[#191C1F]">
                    <HiOutlineCreditCard className="mr-2" /> Secure payment
                    method
                  </li>
                </ul>
              </div>

              {/* Shipping Information Section */}
              <div className="w-full md:w-[272px] h-auto opacity-100">
                <h2 className="font-bold text-lg border-b border-gray-200 pb-2">
                  Shipping Information
                </h2>
                <ul className="w-full md:w-[207px] h-auto text-left space-y-[20px]">
                  <li className="font-public-sans text-[14px] font-normal leading-[20px]">
                    Courier: 2 - 4 days, free shipping
                  </li>
                  <li className="font-public-sans text-[14px] font-normal leading-[20px]">
                    Local Shipping: up to one week
                  </li>
                  <li className="font-public-sans text-[14px] font-normal leading-[20px]">
                    UPS Ground Shipping: 4 - 6 days, $29.00
                  </li>
                  <li className="font-public-sans text-[14px] font-normal leading-[20px]">
                    Unishop Global Export: 3 - 4 days, $39.00
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-screen-xl mx-auto p-4 flex flex-wrap gap-4">
        {/* Related Products Section */}
        <div className="flex-1 min-w-[250px]  p-4 space-y-3">
          <h2 className="text-left font-bold mb-4">Related Products</h2>
          {relatedProducts.map((product) => (
            <div
              key={product.id}
              className="flex border-b border-[#0B5D51] border border-[#0B5D51]"
            >
              <img className="w-20 h-20" src={product.img} alt={product.name} />
              <div className="flex flex-col justify-between">
                <div className="text-left text-[#191C1F] font-[Public Sans] text-sm leading-5">
                  {product.name}
                </div>
                <div className="text-left text-[#191C1F] font-[Public Sans] text-sm leading-5">
                  {product.price}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Product Accessories Section */}
        <div className="flex-1 min-w-[250px]  p-4 space-y-3">
          <h2 className="text-left font-bold mb-4">Product Accessories</h2>
          {productAccessories.map((accessory) => (
            <div
              key={accessory.id}
              className="flex  border-b border-[#0B5D51] border border-[#0B5D51]"
            >
              <img
                className="w-20 h-20 "
                src={accessory.img}
                alt={accessory.name}
              />
              <div className="flex flex-col justify-between">
                <div className="text-left text-[#191C1F] font-[Public Sans] text-sm leading-5">
                  {accessory.name}
                </div>
                <div className="text-left text-[#191C1F] font-[Public Sans] text-sm leading-5">
                  {accessory.price}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Apple Products Section */}
        <div className="flex-1 min-w-[260px] p-4 space-y-3">
          <h2 className="text-left font-bold mb-4">Apple Products</h2>
          {appleProducts.map((appleProduct) => (
            <div
              key={appleProduct.id}
              className="flex  border-b border-[#0B5D51]  border border-[#0B5D51]"
            >
              <img
                className="w-20 h-20"
                src={appleProduct.img}
                alt={appleProduct.name}
              />
              <div className="flex flex-col justify-between">
                <div className="text-left text-[#191C1F] font-[Public Sans] text-sm leading-5">
                  {appleProduct.name}
                </div>
                <div className="text-left text-[#191C1F] font-[Public Sans] text-sm leading-5">
                  {appleProduct.price}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Featured Products Section */}
        <div className="flex-1 min-w-[260px] p-4 space-y-3">
          <h2 className="text-left font-bold mb-4">Featured Products</h2>
          {featuredProducts.map((featuredProduct) => (
            <div
              key={featuredProduct.id}
              className="flex border-b border-[#0B5D51] border border-[#0B5D51] "
            >
              <img
                className="w-20 h-20"
                src={featuredProduct.img}
                alt={featuredProduct.name}
              />
              <div className="flex flex-col justify-between">
                <div className="text-left text-[#191C1F] font-[Public Sans] text-sm leading-5">
                  {featuredProduct.name}
                </div>
                <div className="text-left text-[#191C1F] font-[Public Sans] text-sm leading-5">
                  {featuredProduct.price}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default DetailsProduct;
