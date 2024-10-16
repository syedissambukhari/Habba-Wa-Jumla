import React from "react";
import samsung from "../../assets/Samsungg.png";
import accenture from "../../assets/Accenture.png";
import aws from "../../assets/Aws.png";
import bolt from "../../assets/Bolt.png";
import visma from "../../assets/Visma.png";
import att from "../../assets/ATT.png";
import logo from "../../assets/MP-Logo.png";
import background from "../../assets/GradientBackground.png";

const VendorApprovalLoading = () => {
  return (
    <div className="grid grid-cols-12 h-screen w-screen">
      <div
        className="col-span-7 bg-[#0A1A17] flex flex-col space-y-6 justify-center"
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
      <div className="col-span-5 flex flex-col px-8 mt-16 space-y-20">
        <img src={logo} width={104} height={82} alt="" />

        <div className="flex flex-col items-center justify-center">
          <div className="loader"></div>
          <p className="mt-2 text-[#0B5D51] text-[18px]">
            Waiting for the Admin approval..
          </p>
        </div>

        <button className=" mt-10 w-[472px] h-[48px] bg-[#0B5D51] text-[15px] font-[600] text-[#FFFFFF] p-2 rounded-md">
          Back
        </button>
      </div>
    </div>
  );
};

export default VendorApprovalLoading;
