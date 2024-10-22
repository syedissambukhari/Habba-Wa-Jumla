import React from "react";
import { useState } from "react";
import DashboardSider from "../DashboardSider";
import { PiNotebookBold } from "react-icons/pi";
import { LuPackage } from "react-icons/lu";
import { FiTruck } from "react-icons/fi";
import { PiHandshakeFill } from "react-icons/pi";
import { PiChecks } from "react-icons/pi";
import { FaRegUser } from "react-icons/fa6";
import { PiMapPinLine } from "react-icons/pi";
import { PiMapTrifold } from "react-icons/pi";
import { BsCheckCircle } from "react-icons/bs";
import { PiNotepad } from "react-icons/pi";
import { GoArrowLeft } from "react-icons/go";
import gamepade from "../../assets/gamepad.png";
import { FaPlus } from "react-icons/fa6";
import ReviewModel from "./ReviewModel";

const UserOrderDetail = () => {
  const [showReviewForm, setShowReviewForm] = useState(false);

  const handleArrowClick = () => {
    // Navigate back, for example:
    window.history.back();
  };

  const addresses = [
    {
      title: "Billing Address",
      name: "Kevin Gilbert",
      address:
        "East Tejturi Bazar, Ward No. 04, Road No. 13/a, House No. 1320/C, Flat No. 5D, Dhaka-1200, Bangladesh",
      phone: "+1-202-555-0118",
      Email: "XYZ@gmail.com",
    },
    {
      title: "Shipping Address",
      name: "Kevin Gilbert",
      address:
        "East Tejturi Bazar, Ward No. 04, Road No. 13/a, House No. 1320/C, Flat No. 5D, Dhaka-1200, Bangladesh",
      phone: "+1-202-555-0118",
      Email: "XYZ@gmail.com",
    },
    {
      title: "Order Notes",
      address:
        "Donec ac vehicula turpis. Aenean sagittis est eu arcu ornare, eget venenatis purus lobortis. Aliquam erat volutpat. Aliquam magna odio.",
    },
  ];

  return (
    <div className="flex p-[5%]">
      <div className="w-full h-full  flex gap-5 ">
        <div className="h-full basis-1/4 ">
          <DashboardSider />
        </div>
        <div className="h-full basis-3/4 border-2 ">
          <div className="container mx-auto">
            {/* Label Section  */}
            <div className="flex justify-between items-center p-4 border-b border-gray-300 w-full">
              <div className="flex items-center">
                <button
                  onClick={handleArrowClick}
                  className="focus:outline-none"
                >
                  <GoArrowLeft />
                </button>
                <span className="ml-2 font-medium text-[14px] leading-[20px] text-left text-[#191C1F] font-public-sans">
                  ORDER DETAILS
                </span>
              </div>

              <div className="flex items-center">
                <button
                  onClick={() => setShowReviewForm(true)} // This line triggers the modal
                  className="mr-2 font-semibold text-[14px] leading-[20px] text-left text-[#0B5D51] font-public-sans"
                >
                  Leave a rating
                </button>
                <FaPlus className="text-[#0B5D51]" />
              </div>
            </div>

            {/* Order Summary */}
            <div className="bg-yellow-100 p-4 rounded-md mt-5">
              <div className="flex justify-between items-center">
                <div>
                  <h2 className="text-lg font-semibold">Order #96459761</h2>
                  <p className="text-sm text-gray-600">
                    4 Product . Order Placed on 17 Jan, 2021 at 7:32 PM
                  </p>
                </div>
                <div className="text-3xl font-bold text-green-600">
                  $1199.00
                </div>
              </div>
            </div>

            <div className="p-5">
              <p className="text-sm">
                Order expected arrival{" "}
                <span className=" text-green-600">23 Jan, 2021</span>
              </p>
            </div>

            {/* Order Status */}
            <div className="bg-white  space-y-5 p-4  ">
              <div className="flex  items-center justify-center w-[920px] h-[24px]">
                <div className="flex ">
                  <div className="flex items-center text-center w-[702px] h-[8px]">
                    <div className="flex flex-col items-center">
                      <div
                        className=" text-white rounded-full w-8 h-8 flex items-center justify-center"
                        style={{ backgroundColor: "#0B5D51" }}
                      >
                        ✓
                      </div>
                    </div>
                    <div
                      className="flex-1 h-1 mx-2"
                      style={{ backgroundColor: "#0B5D51" }}
                    ></div>
                    <div className="flex flex-col items-center">
                      <div
                        className=" text-white rounded-full w-8 h-8 flex items-center justify-center"
                        style={{ backgroundColor: "#0B5D51" }}
                      ></div>
                    </div>
                    <div className="flex-1 h-1 bg-gray-300 mx-2"></div>
                    <div className="flex flex-col items-center">
                      <div className="bg-gray-300 text-white rounded-full w-8 h-8 flex items-center justify-center"></div>
                    </div>
                    <div className="flex-1 h-1 bg-gray-300 mx-2"></div>
                    <div className="flex flex-col items-center">
                      <div className="bg-gray-300 text-white rounded-full w-8 h-8 flex items-center justify-center"></div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="flex justify-between items-center w-[936px] h-[64px] gap-0 my-5">
                <div className="flex flex-col items-center w-[234px] h-[64px] gap-0">
                  <PiNotebookBold className="w-[32px] h-[32px]" />
                  <p className="text-sm mt-2 text-[#191C1F] font-publicSans font-medium leading-[20px] text-center">
                    Order Placed
                  </p>
                </div>
                <div className="flex flex-col items-center w-[234px] h-[64px] gap-0">
                  <LuPackage className="w-[32px] h-[32px]" />
                  <p className="text-sm mt-2 text-[#191C1F] font-publicSans font-medium leading-[20px] text-center">
                    Packaging
                  </p>
                </div>
                <div className="flex flex-col items-center w-[234px] h-[64px] gap-0">
                  <FiTruck className="w-[32px] h-[32px]" />
                  <p className="text-sm mt-2 text-[#191C1F] font-publicSans font-medium leading-[20px] text-center">
                    On The Road
                  </p>
                </div>
                <div className="flex flex-col items-center w-[234px] h-[64px] gap-0">
                  <PiHandshakeFill className="w-[32px] h-[32px]" />
                  <p className="text-sm mt-2 text-[#191C1F] font-publicSans font-medium leading-[20px] text-center">
                    Devilered
                  </p>
                </div>
              </div>
            </div>

            {/* Order Activity */}
            <div className="bg-white mt-6 p-4 border-t">
              <h3 className="font-semibold mb-4">Order Activity</h3>
              <div className="space-y-4">
                {[
                  {
                    date: "23 Jan, 2021 at 7:32 PM",
                    text: "Your order has been delivered. Thank you for shopping at Clixon!",
                    icon: <PiChecks />,
                  },
                  {
                    date: "23 Jan, 2021 at 2:00 PM",
                    text: "Our delivery man (John Wick) has picked up your order for delivery.",
                    icon: <FaRegUser />,
                  },
                  {
                    date: "22 Jan, 2021 at 8:00 AM",
                    text: "Your order has reached the last mile hub.",
                    icon: <PiMapPinLine />,
                  },
                  {
                    date: "21 Jan, 2021 at 5:32 AM",
                    text: "Your order is on the way to the last mile hub.",
                    icon: <PiMapTrifold />,
                  },
                  {
                    date: "20 Jan, 2021 at 7:32 PM",
                    text: "Your order is successfully verified.",
                    icon: <BsCheckCircle />,
                  },
                  {
                    date: "19 Jan, 2021 at 2:01 PM",
                    text: "Your order has been confirmed.",
                    icon: <PiNotepad />,
                  },
                ].map((activity, index) => (
                  <div key={index} className="flex items-start">
                    {/* Icon with applied styles */}
                    <div
                      className="flex items-center justify-center rounded-l-sm border border-l-0 bg-[#EAF7E9] h-[48px] w-[48px] p-[12px] gap-[10px]"
                      style={{
                        borderRadius: "2px 0 0 0",
                        border: "1px solid #D5F0D3",
                      }}
                    >
                      {activity.icon}
                    </div>

                    {/* Text and Date */}
                    <div className="ml-2">
                      <p className="font-medium">{activity.text}</p>
                      <span className="text-gray-500 text-sm">
                        {activity.date}
                      </span>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Product List */}
            <div className="bg-white mt-6 p-4 border-t border-b border-gray-300">
              <h3 className="font-semibold mb-4">Product (02)</h3>
              <table className="w-full text-left border-collapse">
                <thead>
                  <tr
                    className="bg-[#F2F4F5]"
                    style={{ border: "1px solid #E4E7E9" }}
                  >
                    <th className="border-b-2 ">PRODUCTS</th>
                    <th className="border-b-2 ">PRICE</th>
                    <th className="border-b-2 ">QUANTITY</th>
                    <th className="border-b-2 ">SUB-TOTAL</th>
                  </tr>
                </thead>

                <tbody>
                  {[
                    {
                      image: gamepade, // Example image URL
                      name: "Smart Phone",
                      text: "Google Pixel 6 Pro - 5G Android Phone...",
                      price: 899,
                      quantity: 1,
                      total: 899,
                    },
                    {
                      image: gamepade, // Example image URL
                      name: "Smart Phone",
                      text: "Tech21 Evo Clear for Google Pixel 6 Pro...",
                      price: 39,
                      quantity: 1,
                      total: 39,
                    },
                  ].map((product, index) => (
                    <tr key={index}>
                      <td className="py-2 flex items-center">
                        <img
                          src={product.image}
                          alt="Product"
                          className="w-12 h-12 mr-4"
                        />
                        <div>
                          <p className="font-semibold">{product.name}</p>
                          <p className="text-sm text-gray-600">
                            {product.text}
                          </p>
                        </div>
                      </td>
                      <td className="py-2 ">${product.price}</td>
                      <td className="py-2 ">x{product.quantity}</td>
                      <td className="py-2">${product.total}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            {/* Address Section */}
            <div className="bg-white mt-6 p-4 grid grid-cols-3 gap-4">
              {addresses.map((item, index) => {
                return (
                  <div className={index < 2 ? "border-r-2" : ""} key={index}>
                    {/* Title */}
                    <h4 className="font-semibold text-[18px] leading-[24px] text-[#191C1F] mb-2">
                      {item.title}
                    </h4>

                    {/* Name */}
                    {item.name && (
                      <p className="font-semibold text-[14px] leading-[20px] text-left mb-2">
                        {item.name}
                      </p>
                    )}

                    {/* Address */}
                    {item.address && (
                      <p className="font-normal text-[14px] leading-[20px] text-[#5F6C72] text-left mb-2">
                        {item.address}
                      </p>
                    )}

                    {/* Phone */}
                    {item.phone && (
                      <p className="text-left mb-2">
                        <span className="font-normal text-[14px] leading-[20px] text-[#191C1F]">
                          Phone:
                        </span>
                        <span className="font-normal text-[14px] leading-[20px] text-[#5F6C72] text-left pl-1">
                          {item.phone}
                        </span>
                      </p>
                    )}
                    {item.Email && (
                      <p className="text-left ">
                        <span className="font-normal text-[14px] leading-[20px] text-[#191C1F]">
                          Email:
                        </span>
                        <span className="font-normal text-[14px] leading-[20px] text-[#5F6C72] text-left pl-1">
                          {item.Email}
                        </span>
                      </p>
                    )}
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
      <ReviewModel
        showModal={showReviewForm}
        onClose={() => setShowReviewForm(false)}
      />{" "}
    </div>
  );
};

export default UserOrderDetail;
