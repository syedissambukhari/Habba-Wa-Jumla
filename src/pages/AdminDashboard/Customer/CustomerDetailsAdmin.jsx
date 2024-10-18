import React from "react";
import { BiChevronDown } from "react-icons/bi";
import { FaArrowLeftLong, FaArrowRight } from "react-icons/fa6";

const CustomerDetailsAdmin= () => {
  return (
    <div className="h-[1443px] flex flex-col py-10 px-5 gap-10">
      <div className="flex gap-3 items-center font-medium">
        <FaArrowLeftLong size={22} />
        Customers
      </div>

      <div className="flex items-center justify-between h-[72px] w-full">
        <div className="flex items-center gap-3">
          <img
            src="https://via.placeholder.com/50"
            alt=""
            className="h-[64px] w-[64px] rounded-full"
          />
          <div>
            <h2 className="text-[#111927] text-[33.3px] font-bold">
              miron.vitold@devias.io
            </h2>
            <p className="flex gap-2 items-center font-semibold">
              user_id:{" "}
              <span className="bg-gray-200 rounded-full p-2">
                5e86805e2bafd54f66cc95c3
              </span>
            </p>
          </div>
        </div>
        <button className="flex gap-3 text-white rounded-xl w-[115px] items-center justify-center p-2 bg-[#0B5D51]">
          Actions
          <BiChevronDown />
        </button>
      </div>

      <div className="w-full h-[73px] flex gap-5 items-center">
        <p className="h-full border-b-2 border-[#0B5D51] flex items-center">
          Details
        </p>
        <p className="h-full flex items-center">Invoices</p>
        <p className="h-full flex items-center">Logs</p>
      </div>

      <div className="flex gap-8 h-[1043px]">
        <div className="flex h-[558px] w-[429px] rounded-xl shadow-lg flex-col">
          <h2 className="font-semibold w-full  p-5">Basic Details</h2>
          <div className="mt-[144px] w-full ">
            <div className="flex gap-2 border-b h-[72px] flex-col justify-center px-4">
              <h2 className="font-semibold">Country</h2>
              <p className="text-gray-500">USA</p>
            </div>
            <div className="flex gap-2 border-b h-[72px] flex-col justify-center px-4">
              <h2 className="font-semibold">State/Region</h2>
              <p className="text-gray-500">New York</p>
            </div>
            <div className="flex gap-2 border-b h-[72px] flex-col justify-center px-4">
              <h2 className="font-semibold">Address 1</h2>
              <p className="text-gray-500">New York</p>
            </div>
            <div className="flex gap-2 border-b h-[72px] flex-col justify-center px-4">
              <h2 className="font-semibold">Address 2</h2>
              <p className="text-gray-500">House #25</p>
            </div>
          </div>
        </div>
        <div className="flex flex-col gap-8">
          <div className="flex h-[450px] w-[890px] rounded-xl shadow-lg flex-col">
            <h2 className="font-semibold w-full  p-5">Payment</h2>
            <div className="mt-[34px] w-full ">
              <div className="flex gap-2 border-b h-[46px]  items-center px-4">
                <div className="flex w-[45%] justify-between">
                  <h2 className="font-semibold">Paid</h2>
                  <p className="text-gray-500 ">2 ($50.00)</p>
                </div>
              </div>
              <div className="flex gap-2 border-b h-[46px] items-center px-4">
                <div className="flex w-[45%] justify-between">
                  <h2 className="font-semibold">Draft</h2>
                  <p className="text-gray-500 ">1 ($5.00)</p>
                </div>
              </div>
              <div className="flex gap-2 border-b h-[46px] items-center px-4">
                <div className="flex w-[45%] justify-between">
                  <h2 className="font-semibold">State/Region</h2>
                  <p className="text-gray-500 ">2 ($50.00) </p>
                </div>
              </div>
              <div className="flex gap-2 border-b h-[46px] items-center px-4">
                <div className="flex w-[45%] justify-between">
                  <h2 className="font-semibold">Unpaid/Due</h2>
                  <p className="text-gray-500 ">1 ($12.00)</p>
                </div>
              </div>
              <div className="flex gap-2 border-b h-[46px] items-center px-4">
                <div className="flex w-[45%] justify-between">
                  <h2 className="font-semibold">Refunded</h2>
                  <p className="text-gray-500 ">0 ($0.00)</p>
                </div>
              </div>
              <div className="flex gap-2 border-b h-[46px] items-center px-4">
                <div className="flex w-[45%] justify-between">
                  <h2 className="font-semibold">Gross Income</h2>
                  <p className="text-gray-500 ">$1,200.00</p>
                </div>
              </div>
            </div>
            <div className="w-full h-[70px] flex gap-5 items-center p-3 text-[#0B5D51] font-bold ">
              <button className="border  h-[37px] border-[#0B5D51] flex items-center justify-center rounded-xl py-3 px-5">
                Create Invoice
              </button>
              Resend Due Invoices
            </div>
          </div>

          <div className="flex h-[356px] w-[890px] rounded-xl shadow-lg flex-col">
            <h2 className="font-semibold w-full p-5">Emails</h2>
            <div className="w-[350px] pl-[30px]">
              <div className="relative cursor-pointer">
                <select
                  name=""
                  id=""
                  defaultValue="Select"
                  className="appearance-none w-full h-[58px] border border-[#0B5D51] px-3  rounded-lg"
                >
                  <option value="Resend last invoice " className="font-semibold">
                    Resend last invoice
                  </option>
                  <option value="a">a</option>
                  <option value="b">b</option>
                </select>
                <div className="pointer-events-none cursor-pointer absolute right-0 top-[1.5rem]  flex items-center px-2">
                  <svg
                    className="w-4 h-4 text-gray-500"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M19 9l-7 7-7-7"
                    />
                  </svg>
                </div>
              </div>
            </div>
            <button className="border ml-[30px] mt-5 flex gap-2 text-white h-[40px] border-[#0B5D51] bg-[#0B5D51]  items-center justify-center rounded-xl py-3 w-[138px] text-[14px]">
              Send Email
              <FaArrowRight />
            </button>
            <div className="mt-5 w-full flex text-[12px]  text-[#2F3746] h-[42px] uppercase bg-[#F8F9FA] font-semibold items-center">
                <div className="w-1/2 px-3 ">
                    mail type
                </div>
                <div className="w-1/2 px-3">
                    Date
                </div>
            </div>
            <div className=" w-full text-[12px] border-b  text-[#2F3746] flex h-[52px]  bg-[#fff] font-semibold items-center">
                <div className="w-1/2 px-3">
                    Order Confirmation
                </div>
                <div className="w-1/2 px-3">
                29/01/2024 | 09:45
                </div>
            </div>
            <div className=" text-[12px]  text-[#2F3746] w-full flex h-[52px]  bg-[#fff] font-semibold items-center">
                <div className="w-1/2 px-3 ">
                    Order Confirmation
                </div>
                <div className="w-1/2 px-3">
                28/01/2024 | 03:30
                </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CustomerDetailsAdmin;
