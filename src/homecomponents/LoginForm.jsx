import React, { useState } from "react";
import { IoEyeOutline } from "react-icons/io5";

const LoginForm = ({ isOpen, onClose }) => {
  if (!isOpen) return null;
  const [passwordVisible, setPasswordVisible] = useState(false);

  return (
    <div className="absolute z-40 top-[70px] right-[-75px] ">
      <div className="w-[424px] bg-white p-[32px] shadow-md rounded-lg  ">
        <h2 className="text-2xl font-[20px] text-center mb-6">
          Sign in to your account
        </h2>
        <form className="space-y-4">
          {/* Email Input */}
          <div>
            <label className="block text-sm font-medium text-gray-700">
              Email Address
            </label>
            <input
              type="email"
              className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>

          {/* Password Input */}
          <div className="relative">
            <div className="flex justify-between items-center mb-2">
              <span className="text-sm text-gray-950 cursor-pointer">
                Password{" "}
              </span>
              <label className="block text-sm font-medium text-gray-700">
                Forgot Password
              </label>
            </div>
            <input
              type={passwordVisible ? "text" : "password"}
              className="w-full px-4 py-2 border border-gray-300  rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 pr-10" // Add padding to the right for the icon
            />
            <button
              type="button"
              onClick={() => setPasswordVisible(!passwordVisible)}
              className="absolute right-3 top-[60%] text-gray-500" // Adjust position
            >
              <IoEyeOutline className="h-5 w-5" />
            </button>
          </div>

          {/* Forget Password Link */}

          {/* Login Button */}
          <button
            type="submit"
            className="w-full bg-[#0B5D51] text-white py-2 flex justify-center items-center space-x-2 hover:bg-green-800"
          >
            <span>LOGIN</span>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M17 9l4 4m0 0l-4 4m4-4H7"
              />
            </svg>
          </button>
          <label className="flex items-center text-sm font-medium text-gray-700">
            <hr className="flex-1 border-t border-gray-300 mr-2" />
            Don’t have an account
            <hr className="flex-1 border-t border-gray-300 ml-2" />
          </label>
          {/* Create Account */}
          <div className="flex  justify-center items-center py-2  border border-solid-[3px] border-[#0B5D51]">
            <a href="#" className="ml-2 ">
              CREATE ACCOUNT
            </a>
          </div>
        </form>
      </div>
    </div>
  );
};

export default LoginForm;
