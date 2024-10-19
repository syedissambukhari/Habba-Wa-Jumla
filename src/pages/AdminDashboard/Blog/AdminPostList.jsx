import React from "react";
// import VendorHeader from "../components/VendorHeader";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa6";
import { BsMailbox } from "react-icons/bs";

const AdminPostList = () => {
  return (
    <div className="flex flex-col gap-6 p-6 pt-10">
      <div>
        <h2 className="font-bold font-plusjakartasans text-[36px] text-[#111927]">Blog</h2>
        <p className="flex gap-2 font-inter font-medium text-[14px]">
          Dashboard <span className="bg-[#6C737F] w-1 h-1 rounded-sm mt-2.5"></span> Blog <span className="bg-[#6C737F] w-1 h-1 rounded-sm mt-2.5"></span> <span className="text-gray-500"> List</span>
        </p>
      </div>
      <div className="shadow-[0_3px_10px_0px_rgba(11,93,81,0.5)]
font-inter font-medium flex rounded-[20px] items-center justify-between px-5  h-[72px] ]
">   <h5>
        Hello, Vendor </h5>
        <button className="bg-[#0B5D51] text-white w-[104px] flex justify-center items-center py-2 rounded-lg">
          New Post
        </button>
      </div>
      <div className="w-[600px]">
        <h2 className="font-bold font-plusjakartasans text-[36px] text-[#111927]">
          Recent Articles
        </h2>
        <p className="font-inter font-normal text-4 text-[#6C737F] w-[665px]">
          Discover the latest news, tips and user research insights from Acme.
          You will learn about web infrastructure, design systems and devops
          APIs best practices.
        </p>
      </div>
      <div className="flex flex-wrap w-full  gap-5">
        {/* Row 1 */}
        
        
  
  <div className="w-full md:w-[48%] rounded-[20px] shadow-[0_5px_25px_0_rgba(11,93,81,0.5)]">
    <div className="h-full w-full flex flex-col rounded-[20px] ">
      <div className="h-1/2 w-full">
        <img
          src="/blog/program.svg"
          alt="program"
          className="h-full w-full object-cover rounded-t-[20px]"
        />
      </div>
      <div className="h-1/2 w-full flex flex-col mt-2 p-4 gap-2">
        <h2 className="p-2 text-[13px] w-[107px] bg-[#1119271F] flex items-center justify-center rounded-[16px] font-inter font-[500]">
          Programming
        </h2>
        <h1 className="font-bold font-plusjakartasans text-[23px] text-[#111927]">
          Why I Still Lisp, and You Should Too
        </h1>
        <p className="font-inter font-normal text-[16px] text-[#6C737F]">
          Aliquam dapibus elementum nulla at malesuada. Ut mi nisl, aliquet non mollis vel, feugiat non nibh.
        </p>
        <div className="flex gap-2 items-center justify-between flex-wrap mb-6">
          <div className="flex gap-2 items-center min-w-0">
            <img
              src="/blog/avatar1.svg"
              alt="author"
              className="h-[40px] w-[40px] rounded-full"
            />
            <p className="font-semibold truncate">By Jie Yan Song • Feb 1, 2024</p>
          </div>
          <p className="text-gray-500">5 min read</p>
        </div>
      </div>
    </div>
  </div>

  <div className="w-full md:w-[48%] rounded-[20px] shadow-[0_5px_25px_0_rgba(11,93,81,0.5)]">
    <div className="h-full w-full flex flex-col rounded-[20px]">
      <div className="h-1/2 w-full">
        <img
          src="/blog/productivity.svg"
          alt="productivity"
          className="h-full w-full object-cover rounded-t-[20px]"
        />
      </div>
      <div className="h-1/2 w-full flex flex-col mt-2 p-4 gap-2">
        <h2 className="p-2 text-[13px] w-[107px]  flex items-center justify-center rounded-[16px] font-inter font-[500] bg-[#1119271F]">
          Productivity
        </h2>
        <h1 className="font-bold font-plusjakartasans text-[23px] text-[#111927]">
        Scrum Has Hit the Glass Ceiling
        </h1>
        <p className="font-inter font-normal text-[16px] text-[#6C737F]">
        Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos.
        </p>
        <div className="flex gap-2 items-center justify-between flex-wrap mb-6">
          <div className="flex gap-2 items-center">
            <img
              src="/blog/avatar2.svg"
              alt="author"
              className="h-[40px] w-[40px] rounded-full"
            />
            <p className="font-semibold">By Omar Darobe • Feb 1, 2024</p>
          </div>
          <p className="text-gray-500">6 min read</p>
        </div>
      </div>
    </div>
  </div>
{/* </div> */}

        

        {/* Row 2 */}
        <div className="w-full md:w-[48%] rounded-[20px] shadow-[0_5px_25px_0_rgba(11,93,81,0.5)]">
    <div className="h-full w-full flex flex-col rounded-[20px] ">
      <div className="h-1/2 w-full">
        <img
          src="/blog/enterpr.svg"
          alt="program"
          className="h-full w-full object-cover rounded-t-[20px]"
        />
      </div>
      <div className="h-1/2 w-full flex flex-col mt-2 p-4 gap-2">
        <h2 className="p-2 text-[13px] w-[107px] bg-gray-300 flex items-center justify-center rounded-[16px] font-inter font-[500] bg-[#1119271F]">
          Entreprenuers
        </h2>
        <h1 className="font-bold font-plusjakartasans text-[23px] text-[#111927]">
        How Model View Controller (MVC) Architectures Work
        </h1>
        <p className="font-inter font-normal text-[16px] text-[#6C737F]">
        Praesent eget leo mauris. Morbi ac vulputate nibh. In hac habitasse platea
        dictumst.
        </p>
        <div className="flex gap-2 items-center justify-between flex-wrap">
          <div className="flex gap-2 items-center min-w-0">
            <img
              src="/blog/avatar3.svg"
              alt="author"
              className="h-[40px] w-[40px] rounded-full"
            />
            <p className="font-semibold truncate">By Siegbert Gottfried • Jan 31, 2024</p>
          </div>
          <p className="text-gray-500">3 min read</p>
        </div>
      </div>
    </div>
  </div>

  <div className="w-full md:w-[48%] rounded-[20px] shadow-[0_5px_25px_0_rgba(11,93,81,0.5)]">
    <div className="h-full w-full flex flex-col rounded-[20px]">
      <div className="h-1/2 w-full">
        <img
          src="/blog/inovation.svg"
          alt="productivity"
          className="h-full w-full object-cover rounded-t-[20px]"
        />
      </div>
      <div className="h-1/2 w-full flex flex-col mt-2 p-4 gap-2">
        <h2 className="p-2 text-[13px] w-[107px] bg-gray-300 flex items-center justify-center rounded-[16px] font-inter font-[500] bg-[#1119271F]">
          Innovations
        </h2>
        <h1 className="font-bold font-plusjakartasans text-[23px] text-[#111927]">
        Generating Passive Income Is Hard, Here Is a Better Option
        </h1>
        <p className="font-inter font-normal text-[16px] text-[#6C737F]">
        Phasellus eu commodo lacus, eget tristique nunc. Ut ullamcorper semper nunc
        sit amet vehicula.
        </p>
        <div className="flex gap-2 items-center justify-between flex-wrap mb-6">
          <div className="flex gap-2 items-center">
            <img
              src="/blog/avatar4.svg"
              alt="author"
              className="h-[40px] w-[40px] rounded-full"
            />
            <p className="font-semibold">By Iulia Albu • Jan 27, 2024</p>
          </div>
          <p className="text-gray-500">1 min read</p>
        </div>
      </div>
    </div>
  </div>
      </div>

      <div className="flex items-center justify-center h-[42px] w-full gap-8 ">
        <div className="flex gap-2 items-center font-inter font-semibold text-[14px] text-[#11192761]">
          <FaArrowLeft /> Newer
        </div>
        <div className="flex gap-2 font-inter font-semibold text-[14px] items-center text-[#0B5D51]">
          Older posts
          <FaArrowRight />
        </div>
      </div>

      <div className="mt-5 w-full h-[373px]  p-20 flex justify-center flex-col  border rounded-[20px] mb-5  
      shadow-[0_5px_25px_0_rgba(11,93,81,0.5)]">
        <div className="flex justify-between flex-col lg:flex-row gap-4">
          <div>
        <h1 className="font-bold font-plusjakartasans text-[33px] text-[#111927]">
          Join the developer list
        </h1>
      <p className="text-[14px] font-inter font-normal text-[#6C737F]">
          Subscribe to our newsletter to make sure you don't miss anything.
        </p>
        <div className="flex mt-5 items-center border border-gray-300 rounded-lg p-2 w-full sm:w-[600px] ">
          <input
            type="email"
            placeholder="Email address"
            className="flex-grow p-2 outline-none border-none text-gray-700"
          />
          <BsMailbox size={24} className="text-[#0B5D51]" />
        </div>
        <button className="sm:w-[600px] w-full p-4 font-inter font-semibold text-white rounded-[12px] bg-[#0B5D51] mt-5">
          Subscribe
        </button>
        </div>
        <img src="/blog/iconly-glass.svg" alt="glass" className="sm:w-[260px] w-full sm:h-[183px] h-[80px] mt-4"/>
        </div>
      </div>
    </div>
  );
};

export default AdminPostList;
