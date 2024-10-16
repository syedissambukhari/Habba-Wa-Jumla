import React, { useState } from "react";
import samsung from "../../assets/Samsungg.png";
import accenture from "../../assets/Accenture.png";
import aws from "../../assets/Aws.png";
import bolt from "../../assets/Bolt.png";
import visma from "../../assets/Visma.png";
import att from "../../assets/ATT.png";
import logo from "../../assets/MP-Logo.png";
import background from "../../assets/GradientBackground.png";
import { FaArrowLeftLong } from "react-icons/fa6";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";
const VendorRegistration = () => {
  const navigate = useNavigate();
  const [Name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState({ Name: "", email: "", password: "" });
  const handleSignup = (e) => {
    e.preventDefault();
    let formErrors = {};
    if (!Name) {
      formErrors.Name = "Name is Required";
    }
    if (!email) {
      formErrors.email = "Email is required";
    }
    if (!password) {
      formErrors.password = "Password is required";
    }
    setError(formErrors);
    if (Object.keys(formErrors).length === 0) {
      console.log("Login in ", { email, password });
    }
  };
  const handleDashboardClick = () => {
    navigate("/vendor"); // Navigate to the vendor path
  };
  return (
    <div className="grid grid-cols-12 h-screen w-screen">
      <div
        className="col-span-8 bg-[#0A1A17] flex flex-col space-y-2 justify-center"
        style={{
          backgroundImage: `url(${background})`, // Use the imported image here
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div className="flex flex-col">
          <h1 className="font-[700] text-[#FFFFFF] text-[33.3px] px-6">
            Welcome to Vendor Dashboard
          </h1>
          <p className="text-[#6C737F] text-[16px] flex items-center justify-center px-6">
            A professional kit that comes with ready-to-use MUI components
            developed with one common goal in mind, help you build faster &
            beautiful applications.
          </p>
        </div>
        <div className="flex flex-col space-y-8">
          <p className="text-[14px] font-[500] text-[#FFFFFF] px-6">
            Join 6,000+ forward-thinking companies:
          </p>
          <div className="px-6 flex space-x-6 text-white">
            <img src={samsung} height={10} alt="" />
            <img src={visma} height={10} alt="" />
            <img src={bolt} height={10} alt="" />
            <img src={aws} height={10} alt="" />
            <img src={accenture} height={10} alt="" />
            <img src={att} height={10} alt="" />
          </div>
        </div>
      </div>
      <div className="col-span-4 flex flex-col space-y-8  items-start px-8 mt-6 ">
        <img src={logo} width={104} height={82} alt="" />

        <div
          className="flex gap-3 items-center cursor-pointer"
          onClick={handleDashboardClick}
        >
          <span>
            <FaArrowLeftLong />
          </span>
          <p className="text-[14px] font-[500]">Dashboard</p>
        </div>
        <div className="flex flex-col gap-1">
          {" "}
          <h1 className="font-[700] text-[23.3px]">Register </h1>
          <p className="text-[14px] text-[#6C737F]">
            Already have an account?{" "}
            <Link to="/vendor/vendorlogin">
              <span className="text-[#0B5D51] font-[600]">Login</span>
            </Link>
          </p>
        </div>
        <form
          onSubmit={handleSignup}
          action=""
          className="flex flex-col space-y-4"
        >
          <input
            type="text"
            placeholder="Name"
            value={Name}
            onChange={(e) => setName(e.target.value)}
            className={`w-[400px] h-[50px] border-2 rounded-md p-1 outline-none ${
              error.Name ? "border-red-500" : "border-gray-300"
            }`}
          />
          {error.Name && <p className="text-red-500 text-sm">{error.Name}</p>}
          <input
            type="text"
            placeholder="Email Address"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className={`w-[400px] h-[50px] border-2 rounded-md p-1 outline-none ${
              error.email ? "border-red-500" : "border-gray-300"
            }`}
          />
          {error.email && <p className="text-red-500 text-sm">{error.email}</p>}
          <input
            type="text"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className={`w-[400px] h-[50px] border-2 rounded-md p-1 outline-none ${
              error.password ? "border-red-500" : "border-gray-300"
            }`}
          />
          {error.password && (
            <p className="text-red-500 text-sm">{error.password}</p>
          )}
          <div className="flex items-center gap-2 cursor-pointer">
            <input type="checkbox" className="form-checkbox" id="terms" />
            <label
              htmlFor="terms"
              className="font-[500] text-[14px] text-[#6C737F] cursor-pointer"
            >
              I have read the{" "}
              <span className="text-[#0B5D51] ">Terms and Conditions</span>
            </label>
          </div>
          <button className=" w-[400px] h-[48px] bg-[#0B5D51] text-[15px] font-[600] text-[#FFFFFF] p-2 rounded-md">
            Register
          </button>
        </form>
      </div>
    </div>
  );
};

export default VendorRegistration;
