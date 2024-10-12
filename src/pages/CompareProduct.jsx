import React from "react";
import Category2 from "../assets/Category2.png";
import Category3 from "../assets/category3.png";
import { GoXCircle } from "react-icons/go";
import { PiShoppingCartSimple } from "react-icons/pi";
import { FaRegHeart } from "react-icons/fa";

const CompareProduct = () => {
  const data = [
    {
      img1: Category2,
      text1: "Gamdias ARES M2 Gaming Keyboard, Mouse and Mouse Mat Combo",
    },
    {
      img2: Category2,
      text2: "Apple iMac 24” 4K Retina Display, 256GB SSD",
    },
    {
      img3: Category3,
      text3: "Samsung Galaxy S21 FE 5G Cell Phone",
    },
  ];

  const TableData = [
    {
      label: "Customer feedback:",
      values: ["★★★★★", "★★★★★", "★★★★★"],
    },
    {
      label: "Price:",
      values: ["$899.00", "$899.00", "$899.00"],
      className: "text-blue-600 font-bold",
    },
    {
      label: "Sold by:",
      values: ["Clicon", "Clicon", "Clicon"],
    },
    {
      label: "Brand:",
      values: ["StarTech", "StarTech", "StarTech"],
    },
    {
      label: "Model:",
      values: [
        "ARES M2 and ZEUS E2",
        "ARES M2 and ZEUS E2",
        "ARES M2 and ZEUS E2",
      ],
    },
    {
      label: "Stock status:",
      values: ["IN STOCK", "IN STOCK", "IN STOCK"],
      className: "text-green-500",
    },
    {
      label: "Size:",
      values: ["6.7 inches, 110.5 cm", "6.7 inches, 110.5 cm", ""],
    },
    {
      label: "Weight:",
      values: ["650 g (7.41 oz)", "650 g (7.41 oz)", "650 g (7.41 oz)"],
    },
  ];

  return (

      <div className="flex mt-10 items-center justify-center h-screen">
        {" "}
        {/* Flex container for centering */}
        <div
          className="p-4 border border-gray-300 bg-white"
          style={{
            width: "1320px",
            height: "896px",
            borderRadius: "4px 0px 0px 0px",
            position: "relative",
          }}
        >
          <div
            className="overflow-x-auto"
            style={{
              width: "100%",
              height: "100%",
              position: "absolute", // Position the child absolutely
              top: 0, // Align to the top
              left: 0,
            }}
          >
            <table className="w-full border-collapse h-full">
              <tbody>
                {/* First Row: Product Cards */}
                <tr>
                  {/* Empty Cell for Row Labels */}
                  <td className="p-2"></td>
                  {/* Product Cards */}
                  {data.map((product, index) => (
                    <td key={index} className="p-2 border border-gray-200">
                      <div className="flex justify-center items-center">
                        <div
                          className={`p-4 rounded-md flex flex-col justify-center items-center w-full max-w-[272px]`}
                          style={{
                            flexBasis: "272px",
                            flexGrow: "1",
                            height: "464px",
                          }}
                        >
                          {/* Close Button */}
                          <div className="mb-2">
                            {" "}
                            
                            <GoXCircle className="h-6 w-6" />{" "}
                            
                          </div>

                          {/* Product Image */}
                          <div className="w-[272px] h-[272px] flex justify-center items-center">
                            <img
                              src={product[`img${index + 1}`]}
                              alt={`Product ${index + 1}`}
                              className="h-full w-full object-contain" // Set the img to fill the div
                            />
                          </div>

                          {/* Product Name */}
                          <h2 className="text-lg font-bold mt-4 text-center">
                            {product[`text${index + 1}`]}
                          </h2>

                          {/* Add to Cart and Wishlist Button */}
                          <div className="flex justify-between items-center w-full mt-2  gap-[10px]">
                            <button
                              className="bg-[#0B5D51] text-white py-0 px-6 h-[48px] w-[212px] rounded-[2px] hover:bg-green-700 flex items-center gap-2" // Apply all the styles
                            >
                              ADD TO CART
                              <PiShoppingCartSimple />
                            </button>

                            <button
                              className="h-[48px] w-[48px] py-3 px-0 rounded-[2px] border-[1.5px] border-[#FFE7D6] flex items-center justify-center gap-[10px] hover:bg-gray-200" // Apply all the styles
                            >
                              <FaRegHeart className="h-6 w-6" />
                            </button>
                          </div>
                        </div>
                      </div>
                    </td>
                  ))}
                </tr>

                {/* Subsequent Rows: Table Data */}
                {TableData.map((row, rowIndex) => (
                  <tr key={rowIndex} className="">
                    {/* Row Label Column */}
                    <td className="p-2 border border-gray-200 text-gray-500">
                      {row.label}
                    </td>

                    {/* Row Data for Each Product */}
                    {data.map((product, productIndex) => (
                      <td
                        key={productIndex}
                        className="p-2 border border-gray-200 text-right"
                      >
                        {/* Displaying TableData.values under each product */}
                        {row.values[productIndex]}
                      </td>
                    ))}
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
 
  );
};

export default CompareProduct;
