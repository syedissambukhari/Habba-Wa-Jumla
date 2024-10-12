import React, { useState } from "react";
import { FaArrowRight } from "react-icons/fa6";
import { FiEye } from "react-icons/fi";

const Reset = () => {
  const [passwordVisible, setPasswordVisible] = useState(false);
  const [confirmPasswordVisible, setConfirmPasswordVisible] = useState(false);

  const togglePasswordVisibility = () => {
    setPasswordVisible(!passwordVisible);
  };

  const toggleConfirmPasswordVisibility = () => {
    setConfirmPasswordVisible(!confirmPasswordVisible);
  };

  return (
    <div className="flex justify-center items-center min-h-screen">
      <div className="w-[424px] p-[32px] rounded-[4px] bg-white shadow-[0px_8px_40px_0px_#0000001F] border border-[#E4E7E9] gap-[24px]">
        <h2 className="font-['Public Sans'] text-[20px] font-semibold text-[#191C1F] mb-[10px] text-center leading-[28px]">
          Reset Password
        </h2>
        <p className="font-['Public Sans'] text-[14px] text-[#5F6C72] mb-[24px] text-center font-normal leading-[20px]">
          Duis sagittis molestie tellus, at eleifend sapien pellque quis. Fusce
          lorem nunc, fringilla sit amet nunc.
        </p>

        <div className="w-full mb-[20px] relative">
          <label
            className="font-['Public Sans'] text-[14px] text-[#191C1F] font-normal leading-[20px] text-left"
            htmlFor="password"
          >
            Password
          </label>
          <input
            type={passwordVisible ? "text" : "password"}
            id="password"
            placeholder="8+ characters"
            className="w-full h-[48px] p-[10px_40px_10px_15px] rounded-[2px] border border-[#E4E7E9] text-[16px] font-['Public Sans'] box-border mt-[10px] outline-none"
          />
          <span
            className="absolute right-[15px] top-[68%] translate-y-[-50%] cursor-pointer text-[18px]"
            onClick={togglePasswordVisibility}
          >
            <FiEye className=" w-[20px] h-[20px]" />
          </span>
        </div>

        <div className="w-full mb-[20px] relative">
          <label
            className="font-['Public Sans'] text-[14px] text-[#191C1F] font-normal leading-[20px]"
            htmlFor="confirm-password"
          >
            Confirm Password
          </label>
          <input
            type={confirmPasswordVisible ? "text" : "password"}
            id="confirm-password"
            className="w-full h-[48px] p-[10px_40px_10px_15px] rounded-[2px] border border-[#E4E7E9] text-[16px] font-['Public Sans'] box-border mt-[10px] outline-none"
          />
          <span
            className="absolute right-[15px] top-[68%] translate-y-[-50%] cursor-pointer text-[18px]"
            onClick={toggleConfirmPasswordVisibility}
          >
            <FiEye className=" w-[20px] h-[20px]" />
          </span>
        </div>

       
         <button
      type="submit"
      className="w-full h-[48px] bg-[#0B5D51] text-white rounded-[2px] font-public-sans text-[14px] font-bold flex justify-center items-center relative"
           >
     
      <div className="flex justify-center items-center  w-full">
        <div className="flex justify-center ml-[-25px] items-center w-full">
        RESET PASSWORD
        </div>
        <div className="absolute right-[98px]">
          <FaArrowRight className="text-white w-[20px] h-[20px]" />
        </div>
      </div>
    </button>
      </div>
    </div>
  );
};

export default Reset;
