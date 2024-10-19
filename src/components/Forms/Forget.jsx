import React, { useState } from "react";
import { FaArrowRight } from "react-icons/fa6";
import { Link } from "react-router-dom";

const Forget = () => {
  const [email, setEmail] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(`Password reset email sent to: ${email}`);
    // Here add API call logic to send the password reset email
  };

  return (
    <div className="flex justify-center items-center min-h-screen ">
      <div className="w-[424px] bg-white shadow-[0_8px_40px_rgba(0,0,0,0.12)] border border-[#E4E7E9] rounded-[4px] p-[32px] gap-[24px]">
        <h2 className="font-public-sans text-[20px] font-semibold text-[#191C1F] text-center mb-[8px]">
          Forget Password
        </h2>
        <p className="font-public-sans text-[14px] font-normal text-[#5F6C72] text-center mb-[24px]">
          Enter the email address or mobile phone number associated with your
          account.
        </p>
        <form className="mb-[20px]" onSubmit={handleSubmit}>
          <div className="mb-[20px]">
            <label
              htmlFor="email"
              className="block font-public-sans text-[14px] text-[#191C1F] mb-[8px]"
            >
              Email Address
            </label>
            <input
              type="email"
              id="email"
              className="w-full p-[10px] border border-[#E4E7E9] rounded-[2px] text-[16px] outline-none"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>

          <div className="w-full flex justify-center items-center">
            <button
              type="submit"
              className="w-full h-[48px] bg-[#0B5D51] text-white rounded-[2px] font-public-sans text-[14px] font-bold flex justify-center items-center relative"
            >
              <div className="flex justify-center items-center  w-full">
                <div className="flex justify-center ml-[-20px] items-center w-full">
                  <Link
                    to="/User Account/Sign In/Forget Password/Reset Password"
                    className="w-full flex justify-center items-center"
                  >
                    SEND CODE
                  </Link>
                </div>

                <div className="absolute right-[120px]">
                  <FaArrowRight className="text-white w-[20px] h-[20px]" />
                </div>
              </div>
            </button>
          </div>
        </form>

        <div className="mt-[15px] text-left">
          <a
            href="/signin"
            className="block font-public-sans text-[14px] text-[#5F6C72] mb-[8px]"
          >
            Already have an account?{" "}
            <span className="font-semibold text-[#2DA5F3]">Sign In</span>
          </a>
          <a
            href="/signup"
            className="block font-public-sans text-[14px] text-[#5F6C72] mb-[5px]"
          >
            Don’t have an account?{" "}
            <span className="font-semibold text-[#2DA5F3]">Sign Up</span>
          </a>
        </div>
        <hr className="my-[20px] h-[1px] bg-[#E4E7E9] border-none border-b border-[#E4E7E9]" />
        <p className="font-public-sans text-[14px] text-[#5F6C72] text-left mt-[20px]">
          You may contact{" "}
          <a href="/support" className="text-[#0B5D51] font-semibold">
            Customer Service
          </a>{" "}
          for help restoring access to your account.
        </p>
      </div>
    </div>
  );
};

export default Forget;
