import React from "react";
import { useState } from "react";
import { FaArrowLeft } from "react-icons/fa6";
import { MdOutlineEdit } from "react-icons/md";
import { FaAngleDown } from "react-icons/fa6";
import person from "../../../assets/Vendor.png";
const VendorsEdit = () => {
  const [ispublic, setIsPublic] = useState(false);
  const [ishire, setIsHire] = useState(false);
  const [vendorData, setVendorData] = useState({
    id: "5e86805e2bafd54f66cc95c3",
    name: "Vendor A",
    email: "vendorA@example.com",
    country: "USA",
    state: "New York",
    address1: "123 Main St, City",
    address2: "123 Main St, City",
    phone: "123-456-7890",
    visibility: "private", // Default visibility is private
  });
  const handleformData = (e) => {
    const { name, value } = e.target;
    setVendorData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };
  const handlePublicToggle = () => {
    setIsPublic((prev) => !prev); // Toggle the feature state
  };

  const handleHireToggle = () => {
    setIsHire((prev) => !prev); // Toggle the feature state
  };

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
            <h1 className="text-[33.3px] font-[700]">{vendorData.email}</h1>
            <p className="text-[13px]">
              user_id:{" "}
              <span className="text-[13px] bg-gray-300 rounded-full px-2 ">
                {vendorData.id}
              </span>
            </p>
          </div>
        </div>
      </div>
      <div className=" px-4 mt-[20px] ml-[8px] mr-[10px]  py-4 bg-white shadow-custom-1 shadow-custom-2 rounded-lg flex flex-col space-y-5">
        <h1 className="text-[17px] font-[700]">Edit Vendor</h1>
        <form action="" className="flex flex-col gap-4">
          <div className="flex items-center justify-between gap-4">
            <div className="flex flex-col  border rounded-md w-[480px] h-[50px] px-2">
              <label htmlFor="" className="text-[12px] text-[#6C737F]">
                Full Name
              </label>
              <input
                type="text"
                name="name"
                value={vendorData.name}
                onChange={handleformData}
                className="text-[14px] border-none outline-none bg-white "
              />
            </div>

            <div className="flex flex-col  border rounded-md w-[480px] h-[50px] px-2">
              <label htmlFor="" className="text-[12px] text-[#6C737F]">
                Email
              </label>
              <input
                type="text"
                name="email"
                value={vendorData.email}
                onChange={handleformData}
                className="text-[14px] border-none outline-none bg-white"
              />
            </div>
          </div>
          <div className="flex items-center justify-between gap-4">
            <div className="flex flex-col  border rounded-md w-[480px] h-[50px] px-2">
              <label htmlFor="" className="text-[12px] text-[#6C737F]">
                Country
              </label>
              <input
                type="text"
                name="country"
                value={vendorData.country}
                onChange={handleformData}
                className="text-[14px] border-none outline-none bg-white "
              />
            </div>
            <div className="flex flex-col  border rounded-md w-[480px] h-[50px] px-2">
              <label htmlFor="" className="text-[12px] text-[#6C737F]">
                State/Region
              </label>
              <input
                type="text"
                name="state"
                value={vendorData.state}
                onChange={handleformData}
                className="text-[14px] border-none outline-none bg-white"
              />
            </div>
          </div>
          <div className="flex items-center justify-between gap-4">
            <div className="flex flex-col  border rounded-md w-[480px] h-[50px] px-2">
              <label htmlFor="" className="text-[12px] text-[#6C737F]">
                Address 1
              </label>
              <input
                type="text"
                name="address1"
                value={vendorData.address1}
                onChange={handleformData}
                className="text-[14px] border-none outline-none bg-white "
              />
            </div>
            <div className="flex flex-col  border rounded-md w-[480px] h-[50px] px-2">
              <label htmlFor="" className="text-[12px] text-[#6C737F]">
                Address 2
              </label>
              <input
                type="text"
                name="address2"
                value={vendorData.address1}
                onChange={handleformData}
                className="text-[14px] border-none outline-none bg-white "
              />
            </div>
          </div>
          <div className="flex items-center justify-between gap-4">
            <div className="flex flex-col  border rounded-md w-[480px] h-[50px] px-2">
              <label htmlFor="" className="text-[12px] text-[#6C737F]">
                Phone
              </label>
              <input
                type="value"
                name="phone"
                value={vendorData.phone}
                onChange={handleformData}
                className="text-[14px] border-none outline-none bg-white "
              />
            </div>
          </div>
        </form>
        <div className="flex flex-col gap-3">
          <h3 className="text-[16px] font-[500]">Make Contact Info Public</h3>
          <div className="flex items-center justify-between gap-2 ">
            <p className="text-[14px] text-[#6C737F]">
              Means that anyone viewing your profile will be able to see your
              contacts details
            </p>
            <button
              onClick={handlePublicToggle}
              className={`relative inline-flex items-center w-12 h-4 rounded-full transition-colors duration-200 focus:outline-none ${
                ispublic ? "bg-[#0B5D51]" : "bg-[#939393]" // Dark green for ON, gray for OFF
              }`}
            >
              <span
                className={`absolute left-0 w-6 h-6 rounded-full transition-transform duration-200 ${
                  ispublic
                    ? "transform translate-x-8 bg-gray-300"
                    : "bg-[#0B5D51]"
                }`}
              />
              {/* Removed ON and OFF text spans */}
            </button>
          </div>
          <hr />
          <h3 className="text-[16px] font-[500]">Available to hire</h3>
          <div className="flex items-center justify-between gap-2 ">
            <p className="text-[14px] text-[#6C737F]">
              Toggling this will let your teammates know that you are available
              for acquiring new projects
            </p>
            <button
              onClick={handleHireToggle}
              className={`relative inline-flex items-center w-12 h-4 rounded-full transition-colors duration-200 focus:outline-none ${
                ishire ? "bg-[#0B5D51]" : "bg-[#939393]"
              }`}
            >
              <span
                className={`absolute left-0 w-6 h-6 rounded-full transition-transform duration-200 ${
                  ishire
                    ? "transform translate-x-8 bg-gray-300"
                    : "bg-[#0B5D51]"
                }`}
              />
              {/* Removed ON and OFF text spans */}
            </button>
          </div>
          <hr />
          <button className="font-[600] text-[14px] text-start">Cancel</button>
        </div>
      </div>
    </div>
  );
};

export default VendorsEdit;
