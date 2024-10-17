import React, { useState } from "react";
import { FaArrowRight } from "react-icons/fa6";

const EmailVerification = () => {
  const [code, setCode] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(`Verification code submitted: ${code}`);
  };

  const handleResendCode = () => {
    console.log("Resend code clicked");
  };

  return (
    <div className="flex justify-center items-center min-h-screen ">
      <div className="w-[420px] bg-white shadow-[0_8px_40px_rgba(0,0,0,0.12)] border border-[#E4E7E9] rounded-[4px] p-[32px]">
        <h2 className="font-[Public_Sans] text-[20px] font-semibold text-[#191C1F] text-center mb-[15px]">
          Verify Your Phone Number
        </h2>
        <p className="font-[Public_Sans] text-[14px] text-[#77878F] text-center mb-[30px]">
          Nam ultricies lectus a risus blandit elementum. Quisque arcu arcu,
          tristique a eu in diam.
        </p>
        <form onSubmit={handleSubmit}>
          <div className="mb-[20px]">
            <div className="flex justify-between items-center mb-2">
              <label htmlFor="code" className="font-[Public_Sans] text-[#191C1F] text-[14px]  font-[400] block" >
                Verification Code
              </label>
              <button
                type="button"
                className="text-[#2DA5F3] bg-transparent font-[Public_Sans] font-[500] text-[14px] border-none cursor-pointer no-underline"
                onClick={handleResendCode}
              >
                Resend Code
              </button>
            </div>
            <input
              type="text"
              id="code"
              className="w-full p-[10px] border border-[#E4E7E9] rounded-[2px] text-[16px] focus:outline-none "
              value={code}
              onChange={(e) => setCode(e.target.value)}
              required
            />
          </div>
          <button
            type="submit"
            className="w-full h-12 bg-[#0B5D51] text-white font-[Public_Sans] font-[700] text-[14px]  rounded-[2px] flex justify-center items-center cursor-pointer relative tracking-[0.012em] "
          >
            VERIFY ME
            <FaArrowRight className="absolute right-[111px] h-[20px] w-[20px] text-white" />
          </button>
        </form>
      </div>
    </div>
  );
};

export default EmailVerification;
