import React from "react";
import { BsEye } from "react-icons/bs";
import { FaArrowLeftLong } from "react-icons/fa6";
import { LuEye } from "react-icons/lu";

const AccountSettings = () => {
  return (
    <div className="flex flex-col gap-5 w-full">
      <div className="h-[508px] border w-full rounded-sm">
        <div className="p-3 border-b uppercase">Account Settings</div>
        <div className="form flex gap-5 p-4 ">
          <div className="imageDiv h-[176px] w-[176px]">
            <img
              src="https://via.placeholder.com/150"
              alt=""
              className="rounded-full h-full w-full"
            />
          </div>
          <div className="flex flex-col gap-[16px] w-[736px]">
            <div className="flex gap-[16px] w-full items-center justify-center">
              <div className="flex-1">
                Display Name
                <input
                  type="text"
                  className="w-full h-10 border mt-3 px-3 rounded-sm"
                  placeholder="Kevin"
                />
              </div>
              <div className="flex-1">
                Username
                <input
                  type="text"
                  className="w-full h-10 border mt-3 px-3 rounded-sm"
                  placeholder="Display Name "
                />
              </div>
            </div>
            <div className="flex gap-[16px] w-full items-center justify-center">
              <div className="flex-1">
                Full Name
                <input
                  type="text"
                  className="w-full h-10 border mt-3 px-3 rounded-sm"
                  placeholder="Kevin Gilbert"
                />
              </div>
              <div className="flex-1">
                Email
                <input
                  type="email"
                  className="w-full h-10 border mt-3 px-3 rounded-sm"
                  placeholder="Kevin.gilbert@gmail.com "
                />
              </div>
            </div>
            <div className="flex gap-[16px] w-full items-center justify-center">
              <div className="flex-1">
                Secondary Email
                <input
                  type="email"
                  className="w-full h-10 border mt-3 px-3 rounded-sm"
                  placeholder="kevin12345@gmail.com"
                />
              </div>
              <div className="flex-1">
                Phone Number
                <input
                  type="number"
                  className="w-full h-10 border mt-3 px-3 rounded-sm"
                  placeholder="+1-202-555-0118"
                />
              </div>
            </div>
            <div className="flex gap-[16px] w-full items-center justify-center ">
              <div className="w-[360px] flex flex-col">
                Country/Region
                <div className="relative cursor-pointer">
                  <select
                    name=""
                    id=""
                    defaultValue="Pakistan"
                    className="appearance-none w-full h-10 border mt-3 px-3 rounded-sm pr-10"
                  >
                    <option value="Bangladesh">Bangladesh</option>
                    <option value="Pakistan">Pakistan</option>
                    <option value="India">India</option>
                  </select>
                  <div className="pointer-events-none cursor-pointer absolute right-0 top-6  flex items-center px-2">
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

              <div className="flex-1 flex flex-col">
                State
                <div className="relative cursor-pointer">
                  <select
                    name=""
                    id=""
                    defaultValue="Pakistan"
                    className="appearance-none w-full h-10 border mt-3 px-3 rounded-sm pr-10"
                  >
                    <option value="KPK">KPK</option>
                    <option value="Sindh">Sindh</option>
                    <option value="Punjab">Punjab</option>
                  </select>
                  <div className="pointer-events-none cursor-pointer absolute right-0 top-6  flex items-center px-2">
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
              <div className="flex-1">
                Zip Code
                <input
                  type="email"
                  className="w-full h-10 border mt-3 px-3 rounded-sm"
                  placeholder="1207 "
                />
              </div>
            </div>
            <button className="pt-2 pb-2 h-[48px] pl-3 pr-3 w-[162px] rounded-sm flex gap-2 bg-[#0B5D51] justify-center items-center">
              <p className="font-bold text-white text-sm leading-6">
                SAVE CHANGES
              </p>
            </button>
          </div>
        </div>
      </div>

      <div className="h-[860px] flex gap-5 w-full">
        <div className="border h-full flex-1">
          <div className="p-3 border-b uppercase">Billing Address</div>
          <div className="form flex gap-5 p-4 ">
            <div className="flex flex-col gap-[16px] w-full">
              <div className="flex gap-[16px] w-full items-center justify-center">
                <div className="flex-1">
                  First Name
                  <input
                    type="text"
                    className="w-full h-10 border mt-3 px-3 rounded-sm"
                    placeholder="Kevin"
                  />
                </div>
                <div className="flex-1">
                  Last Name
                  <input
                    type="text"
                    className="w-full h-10 border mt-3 px-3 rounded-sm"
                    placeholder="Gilbert"
                  />
                </div>
              </div>
              <div className="flex gap-[16px] w-full items-center justify-center">
                <div className="flex-1">
                  Company Name <span className="text-gray-500">(Optional)</span>
                  <input
                    type="text"
                    className="w-full h-10 border mt-3 px-3 rounded-sm"
                    placeholder=""
                  />
                </div>
              </div>
              <div className="flex gap-[16px] w-full items-center justify-center">
                <div className="flex-1">
                  Address
                  <input
                    type="text"
                    className="w-full h-10 border mt-3 px-3 rounded-sm"
                    placeholder="Road No. 13/x, House no. 1320/C, Flat No. 5D"
                  />
                </div>
              </div>
              <div className="w-full flex flex-col">
                Country
                <div className="relative cursor-pointer">
                  <select
                    name=""
                    id=""
                    defaultValue="Select"
                    className="appearance-none w-full h-10 border mt-3 px-3 rounded-sm pr-10"
                  >
                    <option value="Select">Select</option>
                    <option value="Bangladesh">Bangladesh</option>
                    <option value="Pakistan">Pakistan</option>
                    <option value="India">India</option>
                  </select>
                  <div className="pointer-events-none cursor-pointer absolute right-0 top-6  flex items-center px-2">
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
              <div className="w-full flex flex-col">
                Region/State
                <div className="relative cursor-pointer">
                  <select
                    name=""
                    id=""
                    defaultValue="Select"
                    className="appearance-none w-full h-10 border mt-3 px-3 rounded-sm pr-10"
                  >
                    <option value="Select">Select</option>
                    <option value="Bangladesh">Bangladesh</option>
                    <option value="Pakistan">Pakistan</option>
                    <option value="India">India</option>
                  </select>
                  <div className="pointer-events-none cursor-pointer absolute right-0 top-6  flex items-center px-2">
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
              <div className="flex gap-[16px]">
                <div className="flex-1 flex flex-col">
                  City
                  <div className="relative cursor-pointer">
                    <select
                      name=""
                      id=""
                      defaultValue="Select"
                      className="appearance-none w-full h-10 border mt-3 px-3 rounded-sm pr-10"
                    >
                      <option value="Select">Select</option>
                      <option value="Bangladesh">Bangladesh</option>
                      <option value="Pakistan">Pakistan</option>
                      <option value="India">India</option>
                    </select>
                    <div className="pointer-events-none cursor-pointer absolute right-0 top-6  flex items-center px-2">
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
                <div className="flex-1">
                  Zip Code
                  <input
                    type="number"
                    className="w-full h-10 border mt-3 px-3 rounded-sm"
                    placeholder="1207 "
                  />
                </div>
              </div>

              <div className="flex-1">
                Email
                <input
                  type="email"
                  className="w-full h-10 border mt-3 px-3 rounded-sm"
                  placeholder="Kevin.gilbert@gmail.com "
                />
              </div>

              <div className="flex-1">
                Phone Number
                <input
                  type="number"
                  className="w-full h-10 border mt-3 px-3 rounded-sm"
                  placeholder="+1-202-555-0118"
                />
              </div>

              <button className="pt-2 pb-2 h-[48px] pl-3 pr-3 w-[162px] rounded-sm flex gap-2 bg-[#0B5D51] justify-center items-center">
                <p className="font-bold text-white text-sm leading-6">
                  SAVE CHANGES
                </p>
              </button>
            </div>
          </div>
        </div>
        <div className="border h-full flex-1">
          <div className="p-3 border-b uppercase">Shipping Address</div>
          <div className="form flex gap-5 p-4 ">
            <div className="flex flex-col gap-[16px] w-full">
              <div className="flex gap-[16px] w-full items-center justify-center">
                <div className="flex-1">
                  First Name
                  <input
                    type="text"
                    className="w-full h-10 border mt-3 px-3 rounded-sm"
                    placeholder="Kevin"
                  />
                </div>
                <div className="flex-1">
                  Last Name
                  <input
                    type="text"
                    className="w-full h-10 border mt-3 px-3 rounded-sm"
                    placeholder="Gilbert"
                  />
                </div>
              </div>
              <div className="flex gap-[16px] w-full items-center justify-center">
                <div className="flex-1">
                  Company Name <span className="text-gray-500">(Optional)</span>
                  <input
                    type="text"
                    className="w-full h-10 border mt-3 px-3 rounded-sm"
                    placeholder=""
                  />
                </div>
              </div>
              <div className="flex gap-[16px] w-full items-center justify-center">
                <div className="flex-1">
                  Address
                  <input
                    type="text"
                    className="w-full h-10 border mt-3 px-3 rounded-sm"
                    placeholder="Road No. 13/x, House no. 1320/C, Flat No. 5D"
                  />
                </div>
              </div>
              <div className="w-full flex flex-col">
                Country
                <div className="relative cursor-pointer">
                  <select
                    name=""
                    id=""
                    defaultValue="Select"
                    className="appearance-none w-full h-10 border mt-3 px-3 rounded-sm pr-10"
                  >
                    <option value="Select">Select</option>
                    <option value="Bangladesh">Bangladesh</option>
                    <option value="Pakistan">Pakistan</option>
                    <option value="India">India</option>
                  </select>
                  <div className="pointer-events-none cursor-pointer absolute right-0 top-6  flex items-center px-2">
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
              <div className="w-full flex flex-col">
                Region/State
                <div className="relative cursor-pointer">
                  <select
                    name=""
                    id=""
                    defaultValue="Select"
                    className="appearance-none w-full h-10 border mt-3 px-3 rounded-sm pr-10"
                  >
                    <option value="Select">Select</option>
                    <option value="Bangladesh">Bangladesh</option>
                    <option value="Pakistan">Pakistan</option>
                    <option value="India">India</option>
                  </select>
                  <div className="pointer-events-none cursor-pointer absolute right-0 top-6  flex items-center px-2">
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
              <div className="flex gap-[16px]">
                <div className="flex-1 flex flex-col">
                  City
                  <div className="relative cursor-pointer">
                    <select
                      name=""
                      id=""
                      defaultValue="Select"
                      className="appearance-none w-full h-10 border mt-3 px-3 rounded-sm pr-10"
                    >
                      <option value="Select">Select</option>
                      <option value="Bangladesh">Bangladesh</option>
                      <option value="Pakistan">Pakistan</option>
                      <option value="India">India</option>
                    </select>
                    <div className="pointer-events-none cursor-pointer absolute right-0 top-6  flex items-center px-2">
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
                <div className="flex-1">
                  Zip Code
                  <input
                    type="number"
                    className="w-full h-10 border mt-3 px-3 rounded-sm"
                    placeholder="1207 "
                  />
                </div>
              </div>

              <div className="flex-1">
                Email
                <input
                  type="email"
                  className="w-full h-10 border mt-3 px-3 rounded-sm"
                  placeholder="Kevin.gilbert@gmail.com "
                />
              </div>

              <div className="flex-1">
                Phone Number
                <input
                  type="number"
                  className="w-full h-10 border mt-3 px-3 rounded-sm"
                  placeholder="+1-202-555-0118"
                />
              </div>

              <button className="pt-2 pb-2 h-[48px] pl-3 pr-3 w-[162px] rounded-sm flex gap-2 bg-[#0B5D51] justify-center items-center">
                <p className="font-bold text-white text-sm leading-6">
                  SAVE CHANGES
                </p>
              </button>
            </div>
          </div>
        </div>
      </div>
      <div className="h-[420px] w-full border">
        <div className="p-3 border-b uppercase">Change Password</div>
        <div className="form flex gap-5 p-4 ">
          <div className="flex flex-col gap-[16px] w-full">
            <div className="relative flex gap-[16px] w-full items-center justify-center">
              <div className="flex-1">
                Current Password
                <input
                  type="password"
                  className="w-full h-10 border mt-3 px-3 rounded-sm"
                  placeholder=""
                />
              </div>
              <LuEye className="absolute bottom-3 right-2"/>

            </div>
            <div className="relative flex gap-[16px] w-full items-center justify-center">
              <div className="flex-1">
                New Password
                <input
                  type="password"
                  className="w-full h-10 border mt-3 px-3 rounded-sm"
                  placeholder="8+ characters"
                />
              </div>
              <LuEye className="absolute bottom-3 right-2"/>
            </div>
            <div className="relative flex gap-[16px] w-full items-center justify-center">
              <div className="flex-1">
                Confirm Password
                <input
                  type="password"
                  className="w-full h-10 border mt-3 px-3 rounded-sm"
                  placeholder=""
                />
                <LuEye className="absolute bottom-3 right-2"/>
              </div>
            </div>
            <button className="pt-2 pb-2 h-[48px] pl-3 pr-3 w-[197px] rounded-sm flex gap-2 bg-[#0B5D51] justify-center items-center">
              <p className="font-bold text-white text-sm text-[14px]">
                CHANGE PASSWORD
              </p>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AccountSettings;
