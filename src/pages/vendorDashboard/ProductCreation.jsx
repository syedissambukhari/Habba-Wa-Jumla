import React from "react";
import { useState } from "react";
import { useRef } from "react";
import { GoDotFill } from "react-icons/go";
import {
  FaBold,
  FaItalic,
  FaUnderline,
  FaListOl,
  FaListUl,
} from "react-icons/fa";
import { IoMdArrowDropdown } from "react-icons/io";
import { FiUpload } from "react-icons/fi";
import { FaCheck, FaTimes } from "react-icons/fa";
const ProductCreation = () => {
  const descriptionRef = useRef(null); // Create a reference for the textarea
  const [price, setPrice] = useState("05");
  const [bulkPrice, setBulkPrice] = useState(0.5);
  const [discount, setDiscount] = useState(10);
  const [isFeatureEnabled, setIsFeatureEnabled] = useState(false);

  // Function to format the text
  const formatText = (command) => {
    document.execCommand(command, false, null);
    descriptionRef.current.focus(); // Focus back on the textarea after formatting
  };

  const [featureProduct, setFeatureProduct] = useState(false); // State for Feature Product
  const [bestDeals, setBestDeals] = useState(false); // State for Best Deals

  const handleFeatureProductToggle = () => {
    setFeatureProduct(!featureProduct); // Toggle feature product state
  };

  const handleBestDealsToggle = () => {
    setBestDeals(!bestDeals); // Toggle best deals state
  };
  const incrementPrice = () => {
    setPrice((prevPrice) => {
      const newPrice = Number(prevPrice) + 1; // Ensure prevPrice is treated as a number
      return newPrice.toFixed(2); // Return the formatted price
    });
  };

  const decrementPrice = () => {
    setPrice((prevPrice) => {
      const newPrice = Number(prevPrice) - 1; // Ensure prevPrice is treated as a number
      return newPrice >= 0 ? newPrice.toFixed(2) : "0.00"; // Prevent negative values
    });
  };
  const incrementBulkPrice = () => {
    setBulkPrice((prevBulkPrice) => {
      const newBulkPrice = Number(prevBulkPrice) + 0.5; // Ensure prevBulkPrice is treated as a number
      return newBulkPrice.toFixed(2); // Return the formatted bulk price
    });
  };

  const decrementBulkPrice = () => {
    setBulkPrice((prevBulkPrice) => {
      const newBulkPrice = Number(prevBulkPrice) - 0.5; // Ensure prevBulkPrice is treated as a number
      return newBulkPrice >= 0 ? newBulkPrice.toFixed(2) : "0.00"; // Prevent negative values
    });
  };
  const incrementDiscount = () => {
    setDiscount((prevDiscount) => prevDiscount + 10); // Increment by 10%
  };

  const decrementDiscount = () => {
    setDiscount((prevDiscount) => {
      const newDiscount = prevDiscount - 10; // Decrement by 10%
      return newDiscount >= 0 ? newDiscount : 0; // Prevent negative values
    });
  };
  const handleFeatureToggle = () => {
    setIsFeatureEnabled((prev) => !prev); // Toggle the feature state
  };

  return (
    <div className="mt-[50px] flex flex-col space-y-6 px-[30px]">
      <h1 className="text-[33.3px] font-[700]">Create a new product</h1>
      <div className=" flex items-center gap-3  ">
        <div className="flex gap-2 items-center">
          <p className="text-[#111927] text-[14px] font-[500]">Dashboard</p>
        </div>
        <div className="flex gap-3 items-center">
          <GoDotFill color="#5F6C72" />
          <p className="text-[#111927] text-[14px] font-[500]">Products</p>
        </div>
        <div className="flex gap-3 items-center">
          <GoDotFill color="#5F6C72" />
          <p className="text-[#6C737F] text-[14px]">Create</p>
        </div>
      </div>
      <div className="mt-[20px] py-4 bg-white shadow-custom-1 shadow-custom-2 rounded-lg grid grid-cols-12 ">
        <div className="col-span-5 px-5 py-2">
          <h4 className="text-[16.7px] font-[700]">Basic Details</h4>
        </div>
        <div className="col-span-7 flex flex-col space-y-5">
          <input
            type="text"
            placeholder="Product Name"
            className="p-2 w-[500px] h-[50px] border "
          />
          <h6>Description</h6>
          <div className="flex flex-col gap-5 border rounded-md w-[500px]">
            <div className="flex items-center justify-between p-2">
              <button onClick={() => formatText("bold")} className="p-2">
                <p className="text-black hover:text-gray-800">Normal</p>
              </button>
              <div className="flex gap-3 m-3 p-2 ">
                <button onClick={() => formatText("bold")}>
                  <FaBold className="text-gray-600 hover:text-gray-800" />
                </button>
                <button onClick={() => formatText("italic")}>
                  <FaItalic className="text-gray-600 hover:text-gray-800" />
                </button>
                <button onClick={() => formatText("underline")}>
                  <FaUnderline className="text-gray-600 hover:text-gray-800" />
                </button>
                <button onClick={() => formatText("insertOrderedList")}>
                  <FaListOl className="text-gray-600 hover:text-gray-800" />
                </button>
                <button onClick={() => formatText("insertUnorderedList")}>
                  <FaListUl className="text-gray-600 hover:text-gray-800" />
                </button>
              </div>
            </div>
            <hr className="border-gray-300 mb-2" />
            <div className="relative">
              <div
                contentEditable
                ref={descriptionRef}
                className="border-none outline-none h-40 w-full resize-none p-2 overflow-y-auto"
                style={{ maxHeight: "200px", minHeight: "100px" }}
                placeholder="Write Something..."
              ></div>
            </div>
          </div>
        </div>
      </div>
      <div className="grid grid-cols-12 space-x-8 ">
        <div className=" col-span-6 mt-[20px] py-4 rounded-lg bg-white shadow-custom-1 shadow-custom-2">
          <div className="p-2 flex flex-col gap-3">
            <h1 className="text-[16.7px] font-[700] px-2">Images</h1>
            <div className="bg-[#F2F4F7] flex flex-col gap-3 shadow-xl p-3 px-6 mx-5">
              <p className="text-[14px] text-[#6C737F]">
                Images will appear in the store front of your website.
              </p>
              <div className="flex items-center gap-3">
                <div className="bg-[#E5E7EB] rounded-full p-2">
                  <FiUpload size={23} />
                </div>
                <div className="flex flex-col gap-1">
                  <h6 className="text-[16.7px]">
                    Click to upload or drag and drop
                  </h6>
                  <p className="text-[14px] text-[#6C737F]">
                    SVG, JPG, PNG, or gif maximum 900x400
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="col-span-5 mt-[20px] rounded-lg py-4 bg-white shadow-custom-1 shadow-custom-2 flex">
          <div className="flex flex-col gap-8  p-4">
            <h1 className="text-[16.7px] font-[700]">Feature Product</h1>
            <button
              onClick={handleFeatureProductToggle}
              className={` relative inline-flex items-center w-14 h-6 rounded-full transition-colors duration-200 focus:outline-none ${
                featureProduct ? "bg-[#0B5D51]" : "bg-[#939393]" // Dark green for ON, gray for OFF
              }`}
            >
              <span
                className={`absolute left-0 w-4 h-4  rounded-full transition-transform duration-200 ${
                  featureProduct
                    ? "transform translate-x-9 bg-white"
                    : "bg-white"
                }`}
              />
              <span
                className={`px-1 absolute text-xs text-white transition-opacity duration-200 ${
                  featureProduct ? "opacity-100" : "opacity-0"
                }`}
                style={{ marginLeft: "10px" }} // Add margin to create gap
              >
                ON
              </span>
              <span
                className={`px-1 absolute text-xs text-white transition-opacity duration-200 ${
                  featureProduct ? "opacity-0" : "opacity-100"
                }`}
                style={{ marginLeft: "10px" }} // Add margin to create gap
              >
                OFF
              </span>
            </button>
          </div>
          <div className="border-l border-gray-300 h-full mx-2"></div>{" "}
          <div className="flex flex-col gap-8  p-4">
            {" "}
            <h1 className="text-[16.7px] font-[700]">Best deals</h1>
            <button
              onClick={handleBestDealsToggle}
              className={`relative inline-flex items-center w-14 h-6 rounded-full transition-colors duration-200 focus:outline-none ${
                bestDeals ? "bg-[#0B5D51]" : "bg-[#939393]" // Dark green for ON, gray for OFF
              }`}
            >
              <span
                className={`absolute left-0 w-4 h-4 rounded-full transition-transform duration-200 ${
                  bestDeals ? "transform translate-x-9 bg-white" : "bg-white" // Circle color is white for both states
                }`}
              />
              <span
                className={`px-1 absolute text-xs text-white transition-opacity duration-200 ${
                  bestDeals ? "opacity-100" : "opacity-0"
                }`}
                style={{ marginLeft: "10px" }} // Add margin to create gap
              >
                ON
              </span>
              <span
                className={`px-1 absolute text-xs text-white transition-opacity duration-200 ${
                  bestDeals ? "opacity-0" : "opacity-100"
                }`}
                style={{ marginLeft: "10px" }} // Add margin to create gap
              >
                OFF
              </span>
            </button>
          </div>
        </div>
      </div>
      <div className="mt-[20px] py-4 bg-white shadow-custom-1 shadow-custom-2 rounded-lg flex flex-col gap-5 ">
        <h1 className="px-2 text-[16.7px] font-[700]">Pricing</h1>
        <div className="flex items-center gap-10 px-2">
          <div className="flex flex-col rounded-md border px-3 py-2">
            <p className="text-[#6C737F]">Old Price</p>
            <input
              type="text"
              defaultValue={0}
              className="border-none outline-none"
            />
          </div>
          <div className="flex flex-col rounded-md border px-3 py-2">
            <p className="text-[#6C737F]">New Price </p>
            <input
              type="text"
              defaultValue={0}
              className="border-none outline-none"
            />
          </div>

          <div className="flex flex-col rounded-md border px-3 py-2">
            <p className="text-[#6C737F]">Quantity</p>

            <div className="flex items-center">
              <button onClick={decrementPrice} className="px-2 py-1 ">
                -
              </button>

              <input
                type="text"
                value={price}
                readOnly
                className="border-none outline-none text-center w-full"
              />

              <button onClick={incrementPrice} className="px-2 py-1 ">
                +
              </button>
            </div>
          </div>
          <div className="flex flex-col rounded-md border px-3 py-2">
            <p className="text-[#6C737F]">Bulk</p>

            <div className="flex items-center">
              <button onClick={decrementBulkPrice} className="px-2 py-1 ">
                -
              </button>

              <input
                type="text"
                value={bulkPrice}
                readOnly
                className="border-none outline-none text-center w-full"
              />

              <button onClick={incrementBulkPrice} className="px-2 py-1 ">
                +
              </button>
            </div>
          </div>
          <div className="flex flex-col rounded-md border px-3 py-2">
            <p className="text-[#6C737F]">Discount</p>

            <div className="flex items-center">
              <button onClick={decrementDiscount} className="px-2 py-1">
                -
              </button>

              <input
                type="text"
                value={`${discount}%`} // Show the discount as a percentage
                readOnly
                className="border-none outline-none text-center w-full"
              />

              <button onClick={incrementDiscount} className="px-2 py-1">
                +
              </button>
            </div>
          </div>
        </div>
        <div className="flex gap-4 justify-center">
          <button
            onClick={handleFeatureToggle}
            className={`relative inline-flex items-center w-14 h-6 rounded-full transition-colors duration-200 focus:outline-none ${
              isFeatureEnabled ? "bg-[#0B5D51]" : "bg-[#939393]" // Dark green for ON, gray for OFF
            }`}
          >
            <span
              className={`absolute left-0 w-4 h-4 rounded-full transition-transform duration-200 ${
                isFeatureEnabled
                  ? "transform translate-x-9 bg-white"
                  : "bg-white"
              }`}
            />
            {/* Removed ON and OFF text spans */}
          </button>

          <p className="text-[16px]">Keep selling when stock is empty</p>
        </div>
      </div>
      <div className="mt-[20px] py-4 bg-white shadow-custom-1 shadow-custom-2 rounded-lg grid grid-cols-12 ">
        <div className="col-span-6">
          <h1 className="font-[700] text-[16.7px] px-2">Category</h1>
        </div>
        <div className="col-span-6 flex flex-col gap-4">
          <div className="px-3 flex items-center justify-between border p-2 w-[400px]">
            <input
              type="text"
              placeholder="Category"
              name=""
              id=""
              className="outline-none border-none"
            />
            <IoMdArrowDropdown />
          </div>
          <div className="px-3 flex items-center justify-between border p-2 w-[400px]">
            <input
              type="text"
              placeholder="BarCode"
              name=""
              id=""
              className="outline-none border-none"
            />
          </div>
          <div className="px-3 flex items-center justify-between border p-2 w-[400px]">
            <input
              type="text"
              placeholder="SKU"
              name=""
              id=""
              className="outline-none border-none"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductCreation;
