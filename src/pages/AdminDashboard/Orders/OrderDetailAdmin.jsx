import React from "react";
import { FaCartShopping } from "react-icons/fa6";
import { MdOutlineEdit } from "react-icons/md";

export const OrderDetailAdmin = () => {
  return (
    <div className="p-10 min-h-screen">
      {/* Header Section */}
      <div className="flex justify-between items-center mb-6 ">
        <div>
          <h1 className="text-2xl font-bold text-gray-800">DEV-103</h1>
          <p className="text-sm text-gray-500">
            Placed on <span className="font-medium">31/01/2024 11:19</span>
          </p>
        </div>
        <div className="flex space-x-4 ">
          <button className="text-black flex items-center gap-2 ">
            Edit <MdOutlineEdit />
          </button>
          <div className="relative">
            <button className="bg-[#0B5D51] text-white py-2 px-4 rounded-lg">
              Action
            </button>
          </div>
        </div>
      </div>

      {/* Basic Info Section */}
      <div className="bg-white p-6 rounded-lg shadow-xl mb-6 flex flex-col gap-5 h-[520px]">
        <h2 className="font-bold mb-4">Basic info</h2>

        <div className="flex space-x-4 mb-4">
          <span className="w-[150px] font-bold">Customer</span>
          <div className="flex flex-col">
            <span className="font-bold">Miron Vitold</span>
            <span>Street John Wick, no. 7, San Diego, USA</span>
          </div>
        </div>

        <div className="flex space-x-4 mb-4">
          <span className="w-[150px] font-bold">ID</span>
          <div className="flex flex-col">
            <span>5ecb8a6879877087d4aa2690</span>
          </div>
        </div>

        <div className="flex space-x-4 mb-4">
          <span className="w-[150px] font-bold">Invoice</span>
          <div className="flex flex-col">
            <span>DEV-103</span>
          </div>
        </div>

        <div className="flex space-x-4 mb-4">
          <span className="w-[150px] font-bold">Date</span>
          <div className="flex flex-col">
            <span>31/01/2024 11:19</span>
          </div>
        </div>

        <div className="flex space-x-4 mb-4">
          <span className="w-[150px] font-bold">Total Amount</span>
          <div className="flex flex-col">
            <span>$500</span>
          </div>
        </div>

        <div className="flex space-x-4 mb-4">
          <span className="w-[150px] font-bold">Status</span>
          <div className="flex w-full flex-col">
            {/* Status Dropdown Component */}
            <div className="bg-white flex items-center p-4 rounded-lg w-full border space-x-3 border-gray-300">
              <div className="w-full">
                <label className="text-gray-400 text-xs">Status</label>
                <div className="flex w-full justify-between items-center mt-1 bg-white text-gray-200 p-2 rounded-lg cursor-pointer">
                  <span className="text-black">Canceled</span>
                  <svg
                    className="w-4 h-4 text-gray-400"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M19 9l-7 7-7-7"
                    ></path>
                  </svg>
                </div>
              </div>
              <button className="w-[70px] rounded-lg text-white h-[40px] mt-6 bg-[#0B5D51]">
                Save
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Order Items Section */}
      <div className="bg-white p-6 rounded-lg mb-6 shadow-xl h-[267px]">
        <h2 className="text-xl font-semibold mb-4">Order Items</h2>
        <table className="min-w-full table-auto">
          <thead className="bg-gray-100">
            <tr>
              <th className="text-left py-2 px-4 text-gray-600">Description</th>
              <th className="text-left py-2 px-4 text-gray-600">
                Billing Cycle
              </th>
              <th className="text-left py-2 px-4 text-gray-600">Amount</th>
            </tr>
          </thead>
          <tbody>
            <tr className="border-b">
              <td className="py-2 px-4">Project Points x 25</td>
              <td className="py-2 px-4">Monthly</td>
              <td className="py-2 px-4">$50.25</td>
            </tr>
            <tr className="border-b">
              <td className="py-2 px-4">Freelancer Subscription x 1</td>
              <td className="py-2 px-4">Monthly</td>
              <td className="py-2 px-4">$5.00</td>
            </tr>
          </tbody>
        </table>
      </div>

      {/* Logs Section */}
      <div className="bg-white flex flex-col p-6 rounded-lg shadow-md mb-6 h-[321px] justify-center">
        <h2 className="text-xl font-semibold mb-4">Logs</h2>
        <div className="space-y-4">
          <div className="flex items-start space-x-4">
            <div className="bg-gray-200 rounded-full w-8 h-8 flex items-center justify-center">
              <FaCartShopping />
            </div>
            <div>
              <p className="text-gray-700">
                Stripe charge complete (Charge ID: 5ecb8a687987087d4aa2690)
              </p>
              <p className="text-sm text-gray-500">Jan 31, 9:19 PM</p>
            </div>
          </div>
          <div className="flex items-start space-x-4">
            <div className="bg-gray-200 rounded-full w-8 h-8 flex items-center justify-center">
              <FaCartShopping />
            </div>
            <div>
              <p className="text-gray-700">
                Order status changed from Pending payment to Completed.
              </p>
              <p className="text-sm text-gray-500">Jan 31, 6:19 PM</p>
            </div>
          </div>
        </div>
        <button className="text-black font-bold mt-4">Load more</button>
      </div>
    </div>
  );
};

export default OrderDetailAdmin;
