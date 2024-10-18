import React from "react";
import { useState } from "react";
import { Link } from "react-router-dom";
import { MdOutlineEdit } from "react-icons/md";
import { FaAngleDown } from "react-icons/fa6";
import person from "../../../assets/Vendor.png";
import { MdArrowDropDown } from "react-icons/md";
import { FaArrowRight } from "react-icons/fa";
import { FaArrowLeft } from "react-icons/fa6";
const VendorsDetails = () => {
  const [vendors, setVendors] = useState([
    {
      id: "1",
      name: "Vendor A",
      email: "vendorA@example.com",
      country: "USA",
      state: "New York",
      address1: "123 Main St, City",
      address2: "123 Main St, City",
      phone: "123-456-7890",
      paymentInfo: {
        dueInvoices: [
          {
            creditcard: "**** **** **** **** 4142",
            paid: "2 ($50.00)",
            draft: "$100",
            state: "Due",
            due: "1 ($12.00)",
            refund: "0 ($0.00)",
            grossincome: "$1,200.00",
          },
        ],
      },
      orders: [
        { orderId: "ORD-001", date: "2024-10-05" },
        { orderId: "ORD-002", date: "2024-09-20" },
      ],
    },
  ]);
  return (
    <div className="ml-8 flex flex-col gap-6 py-10 ">
      <div className="flex items-center gap-3">
        <span>
          <FaArrowLeft />
        </span>
        <p className="text-[14px] font-[500]">Vendors</p>
      </div>
      <div className="flex items-center justify-between pr-2">
        <div className="flex items-center gap-3">
          <span>
            <img src={person} className="rounded-full" alt="" />
          </span>
          <div className="flex flex-col gap-2">
            <h1 className="text-[33.3px] font-[700]">miron.vitold@devias.io</h1>
            <p className="text-[13px]">
              user_id:{" "}
              <span className="text-[13px] bg-gray-300 rounded-full px-2 ">
                5e86805e2bafd54f66cc95c3
              </span>
            </p>
          </div>
        </div>
        <div className="flex items-center gap-4">
          <div className="flex items-center gap-2">
            <p className="text-[14px]">Edit</p>
            <span>
              {" "}
              <MdOutlineEdit />
            </span>
          </div>
          <div className="flex items-center gap-2 text-white bg-[#0B5D51] px-3 py-2 rounded-xl">
            <p>Actions</p>
            <span>
              {" "}
              <FaAngleDown size={15} />
            </span>
          </div>
        </div>
      </div>
      <div className="flex items-center gap-5">
        <Link className="text-[14px] hover:text-[#0B5D51]">Details</Link>
        <Link className="text-[14px] hover:text-[#0B5D51]">Invoices</Link>
        <Link className="text-[14px] hover:text-[#0B5D51]">Logs</Link>
      </div>
      <div className="grid grid-cols-12 gap-8 p-6">
        <div className="h-[560px] p-4 col-span-4  bg-white shadow-custom-1 shadow-custom-2 rounded-lg flex flex-col space-y-5">
          <h1 className="text-[16.7px] font-[700]">Basic Details</h1>
          {vendors.map((vendor) => (
            <div key={vendor.id} className=" mb-4 flex flex-col space-y-4">
              <div>
                <h3 className="text-[14px] font-[500]">Email</h3>
                <p className="text-[14px] text-[#6C737F]">{vendor.email}</p>
              </div>
              <hr />
              <div>
                <h3 className="text-[14px] font-[500]">Phone</h3>
                <p className="text-[14px] text-[#6C737F]">{vendor.phone}</p>
              </div>
              <hr />
              <div>
                <h3 className="text-[14px] font-[500]">Country</h3>
                <p className="text-[14px] text-[#6C737F]">{vendor.country}</p>
              </div>
              <hr />
              <div>
                <h3 className="text-[14px] font-[500]">State/Region</h3>
                <p className="text-[14px] text-[#6C737F]">{vendor.state}</p>
              </div>
              <hr />
              <div>
                <h3 className="text-[14px] font-[500]">Address 1</h3>
                <p className="text-[14px] text-[#6C737F]">{vendor.address1}</p>
              </div>
              <hr />
              <div>
                <h3 className="text-[14px] font-[500]">Address 2</h3>
                <p className="text-[14px] text-[#6C737F]">{vendor.address2}</p>
              </div>
              <hr />
              <button className="text-[13px] font-[600] text-start">
                Reset Password
              </button>
            </div>
          ))}
        </div>
        <div className="col-span-8 flex flex-col gap-10">
          <div className=" p-4  bg-white shadow-custom-1 shadow-custom-2 rounded-lg flex flex-col space-y-5">
            <h1 className="text-[16.7px] font-[700]">Payment</h1>

            {vendors.map((vendor) => (
              <div key={vendor.id} className="flex flex-col space-y-3">
                {vendor.paymentInfo.dueInvoices.map((invoice, index) => (
                  <div key={index} className="flex flex-col space-y-5">
                    <div className="flex items-center justify-between">
                      <h2 className="text-[14px] font-[500]">Credit Card</h2>
                      <p className="text-[14px] text-[#6C737F]">
                        {invoice.creditcard}
                      </p>
                    </div>
                    <hr />
                    <div className="flex items-center justify-between">
                      <h2 className="text-[14px] font-[500]">Paid</h2>
                      <p className="text-[14px] text-[#6C737F]">
                        {invoice.paid}
                      </p>
                    </div>
                    <hr />
                    <div className="flex items-center justify-between">
                      <h2 className="text-[14px] font-[500]">Draft</h2>
                      <p className="text-[14px] text-[#6C737F]">
                        {invoice.draft}
                      </p>
                    </div>
                    <hr />
                    <div className="flex items-center justify-between">
                      <h2 className="text-[14px] font-[500]">State/Region</h2>
                      <p className="text-[14px] text-[#6C737F]">
                        {invoice.state}
                      </p>
                    </div>
                    <hr />
                    <div className="flex items-center justify-between">
                      <h2 className="text-[14px] font-[500]">Unpaid/Due</h2>
                      <p className="text-[14px] text-[#6C737F]">
                        {invoice.due}
                      </p>
                    </div>
                    <hr />
                    <div className="flex items-center justify-between">
                      <h2 className="text-[14px] font-[500]">Refunded</h2>
                      <p className="text-[14px] text-[#6C737F]">
                        {invoice.refund}
                      </p>
                    </div>
                    <hr />
                    <div className="flex items-center justify-between">
                      <h2 className="text-[14px] font-[500]">Gross Income</h2>
                      <p className="text-[14px] text-[#6C737F]">
                        {invoice.grossincome}
                      </p>
                    </div>
                    <hr />
                  </div>
                ))}
              </div>
            ))}
            <div className="flex items-center space-x-5">
              <button className="border border-[#0B5D51] text-[#0B5D51] text-[13px] font-[600] rounded-xl px-6 py-2">
                {" "}
                Create Invoice
              </button>
              <button className=" text-[#0B5D51] text-[13px] font-[600] ">
                {" "}
                Resend Due Invoices
              </button>
            </div>
          </div>
          <div className=" p-4 col-span-8 bg-white shadow-custom-1 shadow-custom-2 rounded-xl flex flex-col space-y-5">
            <h1 className="text-[16.7px] font-[700]">Emails</h1>
            <div className=" w-[300px] h-[60px] border border-[#0B5D51] px-8 py-4 rounded-xl flex  items-center justify-between text-[15px] font-[600]">
              Resend Last Invoice
              <span>
                <MdArrowDropDown size={20} />
              </span>
            </div>
            <button className="w-[140px] h-[40px] flex items-center gap-4  bg-[#0B5D51]  p-3 rounded-xl text-white  text-[14px] font-[600]">
              Send Email
              <span>
                <FaArrowRight size={18} color="white" />
              </span>
            </button>
            <table className="w-full border-collapse">
              <thead>
                <tr className="bg-gray-100 text-[15px]">
                  <th className="py-2 px-4 text-left text-gray-600">
                    Mail Type
                  </th>
                  <th className="py-2 px-4 text-left text-gray-600">Date</th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-b hover:bg-gray-50 text-[14px]">
                  <td className="py-2 px-4 text-gray-800">
                    Order Confirmation
                  </td>
                  <td className="py-2 px-4 text-gray-800">
                    29/01/2024 | 09:45
                  </td>
                </tr>
                <tr className="border-b hover:bg-gray-50 text-[14px]">
                  <td className="py-2 px-4 text-gray-800">
                    Order Confirmation
                  </td>
                  <td className="py-2 px-4 text-gray-800">
                    28/01/2024 | 03:30
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
          <div className=" p-4 col-span-8 bg-white shadow-custom-1 shadow-custom-2 rounded-xl flex flex-col space-y-5">
            <h1 className="text-[17px] font-[700]">Data Managment</h1>
            <button className="border border-[#0B5D51] text-[#0B5D51] w-[140px] h-[40px] rounded-xl ">
              Delete Vendor
            </button>
            <p className="text-[#6C737F] text-[14px]">
              Remove this customer’s chart if he requested that, if not please
              be aware that what has been deleted can never brought back
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default VendorsDetails;
