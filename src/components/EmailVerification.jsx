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
      <div className="w-[420px] bg-white shadow-2xl border border-gray-300 rounded-[4px] p-8">
        <h2 className="text-2xl font-semibold text-gray-900 text-center mb-4">
          Verify Your Phone Number
        </h2>
        <p className="text-gray-500 text-center mb-6">
          Nam ultricies lectus a risus blandit elementum. Quisque arcu arcu,
          tristique a eu in diam.
        </p>
        <form onSubmit={handleSubmit}>
          <div className="mb-6">
            <div className="flex justify-between items-center mb-2">
              <label htmlFor="code" className="text-sm text-gray-900">
                Verification Code
              </label>
              <button
                type="button"
                className="text-blue-500  text-sm"
                onClick={handleResendCode}
              >
                Resend Code
              </button>
            </div>
            <input
              type="text"
              id="code"
              className="w-full p-3 border border-gray-300 rounded-[2px] text-lg focus:outline-none "
              value={code}
              onChange={(e) => setCode(e.target.value)}
              required
            />
          </div>
          <button
            type="submit"
            className="w-full h-12 bg-teal-700 text-white font-bold rounded-[2px] flex justify-center items-center  "
          >
            VERIFY ME
            <FaArrowRight className="ml-2 text-white" />
          </button>
        </form>
      </div>
    </div>
  );
};

export default EmailVerification;
