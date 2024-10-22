import React from "react";
import mp4 from "../../../assets/mp4.png";
import pdf from "../../../assets/pdf.png";
import png from "../../../assets/png.png";
import document from "../../../assets/document.png";
import { AiOutlineThunderbolt } from "react-icons/ai";

const StorageCard = () => {
  return (
    <div
      className="bg-white p-6 rounded-xl mr-2 h-[680px] "
      style={{
        boxShadow: "0px 0px 0px 0.5px #00000008, 0px 5px 25px 0px #0B5D5180",
      }}
    >
      <h2 className="text-lg font-semibold">Storage</h2>
      <p className="text-gray-500">Upgrade before reaching it</p>

      <div className="relative flex justify-center my-6">
        {/* Semi-circle progress graph */}
        <div className="w-32 h-16 overflow-hidden">
          <div className="w-32 h-32 border-[10px] border-t-transparent border-l-transparent rounded-full border-green-500"></div>
        </div>
        <div className="absolute top-6 flex justify-center items-center w-32 h-16">
          <p className="text-xl font-bold">75 GB</p>
        </div>
      </div>

      <p className="text-center text-gray-600 ">
        You've almost reached your limit
      </p>
      <p className="text-center text-gray-400 text-sm mb-5 ">
        You have used 75% of your available storage.
      </p>

      {/* File types list */}
      <div className="mt-16">
        <div className="flex justify-between items-center my-2 mb-8 ">
          <div className="flex items-center">
            <img className="w-6 h-6" src={mp4} alt="MP4" />
            <span className="ml-2">MP4</span>
          </div>
          <div>22.75 GB • 25 items</div>
        </div>
        <div className="flex justify-between items-center my-2 mb-8">
          <div className="flex items-center">
            <img className="w-6 h-6" src={png} alt="PNG" />
            <span className="ml-2">PNG</span>
          </div>
          <div>54.69 GB • 591 items</div>
        </div>
        <div className="flex justify-between items-center my-2 mb-8">
          <div className="flex items-center">
            <img className="w-6 h-6" src={pdf} alt="PDF" />
            <span className="ml-2">PDF</span>
          </div>
          <div>412.39 MB • 95 items</div>
        </div>
        <div className="flex justify-between items-center my-2 mb-8">
          <div className="flex items-center">
            <img className="w-6 h-6" src={document} alt="Other" />
            <span className="ml-2">Other</span>
          </div>
          <div>261.43 MB • 210 items</div>
        </div>
      </div>

      <div className="flex justify-end">
        <button
          className="flex justify-center items-center w-[140.52px] h-[34.72px] text-white mt-4 space-x-2"
          style={{
            padding: "8.37px 13.99px 8.36px 15.99px",
            borderRadius: "12px",
            backgroundColor: "#0B5D51",
            boxShadow: "0px 1px 5px 0px #00000014",
          }}
        >
          <span className="w-[84.9px] h-[15.56px] font-inter text-[13px] font-semibold leading-[22.75px] text-[#ffff]]">
            Upgrade Plan
          </span>{" "}
          <AiOutlineThunderbolt />
        </button>
      </div>
    </div>
  );
};

export default StorageCard;
