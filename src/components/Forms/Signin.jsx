import React, { useState } from "react";
import { FaArrowRight } from "react-icons/fa6";
import { FaApple } from "react-icons/fa";
import { FiEye } from "react-icons/fi";
import googleLogo from "../../assets/google-logo.png";
import { Link } from "react-router-dom";
import BreadCrumb from "../../homecomponents/BreadCrumb"; // Adjust the path as necessary

const Signin = () => {
  const [isSignIn, setIsSignIn] = useState(false); // Toggle between sign-in and sign-up
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);

  // State for Sign In form
  const [signInPhoneNumber, setSignInPhoneNumber] = useState("");
  const [signInPassword, setSignInPassword] = useState("");

  // State for Sign Up form
  const [signUpName, setSignUpName] = useState("");
  const [signUpPhoneNumber, setSignUpPhoneNumber] = useState("+966");
  const [signUpEmail, setSignUpEmail] = useState("");
  const [signUpPassword, setSignUpPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  return (
    <>
      <BreadCrumb isSignIn={isSignIn} />
      <div className="flex justify-center items-center min-h-screen bg-[#f5f5f5]">
        <div
          className={`w-[424px]  rounded-[4px] bg-white shadow-[0_8px_40px_rgba(0,0,0,0.12)] border border-[#E4E7E9] pb-[32px]`}
        >
          <div className="flex mb-[20px] h-[60px] border-b border-[#E4E7E9] text-center">
            <span
              className={`w-[212px] font-public-sans font-[600] text-[20px] py-[20px] cursor-pointer ${
                isSignIn
                  ? "text-[#191C1F] font-[600] border-b-2 border-[#FA8232] font-bold"
                  : "text-[#77878F]"
              }`}
              onClick={() => setIsSignIn(true)}
            >
              Sign In
            </span>
            <span
              className={`w-[212px] font-public-sans font-[600] text-[20px] py-[20px] cursor-pointer ${
                !isSignIn
                  ? "text-[#191C1F]  border-b-2 border-[#FA8232] font-bold"
                  : "text-[#77878F]"
              }`}
              onClick={() => setIsSignIn(false)}
            >
              Sign Up
            </span>
          </div>

          {isSignIn ? (
            <form>
              <div className="mb-[15px] relative px-[30px] py-[5px] ">
                <label
                  htmlFor="Phone1"
                  className="block font-public-sans text-[14px] text-[#191C1F] font-normal leading-[20px]"
                >
                  Phone number
                </label>
                <input
                  type="text"
                  className="w-full p-[10px] border border-[#E4E7E9] rounded-[2px] mt-[10px] text-[16px] outline-none"
                  value={signInPhoneNumber}
                  onChange={(e) => setSignInPhoneNumber(e.target.value)}
                />
              </div>

              <div className="mb-[15px] relative px-[30px] items-center">
                <label
                  htmlFor="Password"
                  className="block font-public-sans text-[14px] text-[#191C1F] font-normal leading-[20px]"
                >
                  Password
                </label>
                <input
                  type={showPassword ? "text" : "password"}
                  className="w-full p-[10px] border border-[#E4E7E9] rounded-[2px] mt-[10px] text-[16px] outline-none"
                  value={signInPassword}
                  onChange={(e) => setSignInPassword(e.target.value)}
                />
                <span
                  className="absolute right-[40px] mt-[23px] cursor-pointer text-[18px]"
                  onClick={() => setShowPassword(!showPassword)}
                >
                  <FiEye />
                </span>
                <Link
                  to="/User%20Account/Sign%20In/Forget%20Password"
                  className="absolute right-[30px] top-[12%] transform -translate-y-1/2 text-decoration-none p-[20px] font-public-sans text-[14px] font-medium text-[#073741]"
                >
                  Forget Password
                </Link>
              </div>

              <button
                type="submit"
                className="w-[362px] h-[48px] mx-[30px] mt-[16px] mb-[10px] bg-[#0B5D51] text-white rounded-[2px] text-[14px] font-bold flex justify-center items-center relative"
              >
                <div className="flex justify-center ml-[-32px] items-center w-full">
                  <div className="flex justify-center items-center">
                    SIGN IN
                  </div>
                  <div className="absolute right-[140px]">
                    <FaArrowRight className="text-white w-[20px] h-[20px]" />
                  </div>
                </div>
              </button>
            </form>
          ) : (
            <form>
              <div className="mb-[15px] relative px-[30px]">
                <label
                  htmlFor="Name"
                  className="block font-public-sans text-[14px] text-[#191C1F] font-normal leading-[20px]"
                >
                  Name
                </label>
                <input
                  type="text"
                  className="w-full p-[10px] border border-[#E4E7E9] rounded-[2px] mt-[10px] text-[16px] outline-none"
                  value={signUpName}
                  onChange={(e) => setSignUpName(e.target.value)}
                />
              </div>
              <div className="mb-[15px] relative px-[30px]">
                <label
                  htmlFor="Phone"
                  className="block font-public-sans text-[14px] text-[#191C1F] font-normal leading-[20px]"
                >
                  Phone number
                </label>
                <input
                  type="text"
                  className="w-full p-[10px] border border-[#E4E7E9] rounded-[2px] mt-[10px] text-[16px] outline-none"
                  value={signUpPhoneNumber}
                  onChange={(e) => setSignUpPhoneNumber(e.target.value)}
                />
              </div>
              <div className="mb-[15px] relative px-[30px]">
                <label
                  htmlFor="Email"
                  className="block font-public-sans text-[14px] text-[#191C1F] font-normal leading-[20px]"
                >
                  Email Address
                </label>
                <input
                  type="email"
                  className="w-full p-[10px] border border-[#E4E7E9] rounded-[2px] mt-[10px] text-[16px] outline-none"
                  value={signUpEmail}
                  onChange={(e) => setSignUpEmail(e.target.value)}
                />
              </div>
              <div className="mb-[15px] relative px-[30px]">
                <label
                  htmlFor="Password"
                  className="block font-public-sans text-[14px] text-[#191C1F] font-normal leading-[20px]"
                >
                  Password
                </label>
                <input
                  type={showPassword ? "text" : "password"}
                  className="w-full p-[10px] border border-[#E4E7E9] rounded-[2px] mt-[10px] text-[16px] outline-none"
                  value={signUpPassword}
                  onChange={(e) => setSignUpPassword(e.target.value)}
                />
                <span
                  className="absolute right-[40px] mt-[23px] cursor-pointer text-[18px]"
                  onClick={() => setShowPassword(!showPassword)}
                >
                  <FiEye />
                </span>
              </div>
              <div className="mb-[15px] relative px-[30px]">
                <label
                  htmlFor="ConfirmPassword"
                  className="block font-public-sans text-[14px] text-[#191C1F] font-normal leading-[20px]"
                >
                  Confirm Password
                </label>
                <input
                  type={showConfirmPassword ? "text" : "password"}
                  className="w-full p-[10px] border border-[#E4E7E9] rounded-[2px] mt-[10px] text-[16px] outline-none"
                  value={confirmPassword}
                  onChange={(e) => setConfirmPassword(e.target.value)}
                />
                <span
                  className="absolute right-[40px] mt-[23px] cursor-pointer text-[18px]"
                  onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                >
                  <FiEye />
                </span>
              </div>

              <div className="flex px-[30px]">
                <input
                  type="checkbox"
                  id="checkbox1"
                  className="hidden"
                  onChange={(e) => {
                    const checkboxBox = document.getElementById("checkboxBox");
                    checkboxBox.style.backgroundColor = e.target.checked
                      ? "#0B5D51"
                      : "white";
                  }}
                />
                <label
                  htmlFor="checkbox1"
                  id="checkboxBox"
                  className="w-[23px] h-[19px] border border-[#0B5D51] rounded-[2px] bg-white cursor-pointer transition-colors duration-200 flex justify-center items-center"
                >
                  <span className="text-white text-[14px]" id="checkmark">
                    ✔
                  </span>
                </label>
                <label className="ml-[10px] mt-[-2px] text-[14px] text-[#475156]">
                  Are you agree to Clicon{" "}
                  <a href="#" className="text-[#2DA5F3]">
                    Terms of Condition
                  </a>{" "}
                  and{" "}
                  <a href="#" className="text-[#2DA5F3]">
                    Privacy Policy
                  </a>
                  .
                </label>
              </div>

              <button
                type="submit"
                className="w-[362px] h-[48px] mx-[30px] mt-[16px] mb-[10px] bg-[#0B5D51] text-white rounded-[2px] text-[14px] font-bold flex justify-center items-center relative"
              >
                <div className="flex justify-center ml-[-30px] items-center w-full">
                  <div className="flex justify-center items-center">
                    <Link
                      to="/User Account/Sign Up/Email Verification"
                      className="flex justify-center items-center w-full h-full"
                    >
                      SIGN UP{" "}
                    </Link>
                  </div>
                  <div className="absolute right-[138px]">
                    <FaArrowRight className=" text-white w-[20px] h-[20px]" />
                  </div>
                </div>
              </button>
            </form>
          )}

          <div className="flex items-center text-center my-[10px] mx-[30px]">
            <div className="flex-1 border-b border-[#E4E7E9] mr-[8px]" />
            <span className="text-[14px] text-[#77878F] bg-white px-[2px]">
              or
            </span>
            <div className="flex-1 border-b border-[#E4E7E9] ml-[8px]" />
          </div>

          <div className="flex flex-col space-y-[12px]">
            <div className="flex justify-center items-center">
              <button className="flex justify-center items-center p-[10px] border border-[#0B5D51] rounded-[2px] w-[363px] bg-white text-[#475156] font-public-sans text-[14px] relative">
                <img
                  src={googleLogo}
                  alt="Google"
                  className="w-[20px] h-[20px] absolute top-[12px] left-[16px]"
                />
                Login with Google
              </button>
            </div>
            <div className="flex justify-center items-center">
              <button className="flex justify-center items-center p-[10px] border border-[#0B5D51] rounded-[2px] w-[363px] bg-white text-[#475156] font-public-sans text-[14px] relative">
                <FaApple className="text-black w-[20px] h-[20px] absolute top-[12px] left-[16px]" />
                Login with Apple
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Signin;
