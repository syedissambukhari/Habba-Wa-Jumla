import React from "react";
import { BsMailbox } from "react-icons/bs";
import { CiFaceSmile } from "react-icons/ci";
import { GoPaperclip } from "react-icons/go";
import { RiGalleryFill } from "react-icons/ri";

const AdminPostDetails = () => {
  return (
    <div className="flex flex-col gap-6 p-4 pt-10">
      <h2 className="font-bold font-plusjakartasans text-[36px] text-[#111927]">Post</h2>
      <p className="flex gap-2 font-inter font-medium text-[14px]">
          Dashboard <span className="bg-[#6C737F] w-1 h-1 rounded-sm mt-2.5"></span> Blog <span className="bg-[#6C737F] w-1 h-1 rounded-sm mt-2.5"></span> <span className="text-gray-500"> Details</span>
        </p>
        <div className="shadow-[0_3px_10px_0px_rgba(11,93,81,0.5)]
font-inter font-medium flex rounded-[20px] items-center justify-between px-5  h-[72px] ]


">   <h5>
        Hello, Vendor </h5>
        <button className="w-[100px] px-2 text-white rounded-lg h-[40px] bg-[#0B5D51]">
          Edit Post
        </button>
      </div>

      <h2 className="p-2 text-[13px] w-[107px] bg-[#1119271F] flex items-center justify-center rounded-[16px] font-inter font-[500]">
          Programming
        </h2>

        <h1 className="font-bold font-plusjakartasans text-[23px] text-[#111927]">
          Why I Still Lisp, and You Should Too
        </h1>
        <p className="font-inter font-normal text-[16px] text-[#6C737F]">
          Aliquam dapibus elementum nulla at malesuada. Ut mi nisl, aliquet non mollis vel, feugiat non nibh.
        </p>
        <div className="flex items-center gap-4">
  <img
    src="/blog/avatar1.svg"
    alt="author"
    className="h-[40px] w-[40px] rounded-full"
  />
  <div className="flex flex-col">
    <p className="font-semibold truncate">By Jie Yan Song • Feb 1, 2024</p>
    <p className="text-gray-500">5 min read</p>
  </div>
</div>


      <div className="h-[380px] w-full rounded-lg overflow-hidden">
        <img
          src="/blog/detail1.svg"
          alt="detail"
          className="w-full h-full"
        />
      </div>
      <div className="max-w-[80%] m-auto text-[#111927] flex flex-col gap-3">
        <h4 className="font-bold font-inter text-[20px]">
          Cras at molestie lacus. Phasellus feugiat leo quis sem iaculis, sed
          mattis nibh accumsan.
        </h4>
        <p className="text-[16px] font-inter font-normal">
          Phasellus ullamcorper ultrices ullamcorper. Nunc auctor porttitor ex,
          non consequat ipsum aliquam at. Duis dapibus dolor in nisi viverra, a
          elementum nulla viverra. Etiam feugiat turpis leo, nec finibus diam
          rhoncus ac. Sed at metus et orci consequat facilisis vel vel diam.
        </p>
        <h4 className="font-bold font-inter   text-[20px]">
          Cras at molestie lacus. Phasellus feugiat leo quis sem iaculis, sed
          mattis nibh accumsan.
        </h4>
        <p className="text-[16px] font-inter font-normal">
          Etiam faucibus massa auctor gravida finibus. Cras nulla magna, dapibus
          sit amet accumsan nec, ullamcorper sit amet dolor.
        </p>
        <p className="text-[16px] font-inter font-normal">
          Donec leo nisi, porta et gravida nec, tincidunt ac velit. Aliquam in
          turpis a quam tempus dapibus. Morbi in tellus tempor, hendrerit mi
          vel, aliquet tellus. Quisque vel interdum ante. Nunc quis purus sem.
          Donec at risus lacinia ipsum cursus condimentum at ac dui. Nulla
          bibendum feugiat tellus ac tristique. Proin auctor, lectus et accumsan
          varius, justo odio vulputate neque, et efficitur augue leo id ex.
          Aliquam eget turpis nisl. Nam sapien massa, sollicitudin et vehicula
          a, fringilla vitae purus. Praesent a vestibulum felis.
        </p>

        <div className="h-[90px] w-full rounded-lg flex gap-4 flex-col p-3 bg-[#1C2536]">
          <p className="text-[14px] text-[#6272A4]">// This is a comment </p>
          <p className="text-white">
            <span className="text-blue-300">const</span> x = () =&gt; {"{"}{" "}
            {"}"}{" "}
          </p>
        </div>
        <p className="text-[16px] font-inter font-normal">
          amet luctus est fringilla. Aenean imperdiet rhoncus justo, ut pharetra
          lorem gravida placerat. Duis et enim lorem. Aliquam placerat elit est,
          vitae fermentum ipsum finibus sed. Donec dapibus magna non tortor
          commodo rhoncus. Suspendisse luctus tincidunt eros, aliquet
          pellentesque neque venenatis quis. Aliquam auctor felis nec orci
          ornare gravida. Fusce ac neque sit amet nibh scelerisque molestie.
          Nullam in lorem viverra, aliquam nunc vel, interdum orci. Fusce mattis
          est neque, et tincidunt justo blandit quis. Etiam tincidunt purus in
          libero semper, vitae placerat dui vehicula. Pellentesque sit amet
          imperdiet purus, quis lacinia eros.
        </p>
        <p className="text-[16px] font-inter font-normal">
          Duis placerat turpis non metus dapibus sagittis. Vestibulum ex massa,
          tempus pulvinar varius at, placerat non justo. Ut tristique nisl sed
          porta pulvinar. Nunc ex nibh, tempor eget elit vel, fringilla ornare
          risus. Praesent vel lacus finibus, laoreet nulla quis, semper tellus.
          Interdum et malesuada fames ac ante ipsum primis in faucibus. Donec
          volutpat quis dui ac varius. Suspendisse potenti. Maecenas sagittis
          lacus vitae ex rhoncus, eu fringilla urna luctus.
        </p>
        <h4 className="font-bold font-inter text-[20px]">
          Donec vel erat augue. Aenean ut nisl cursus nulla tempus ultricies vel
          eget lorem.
        </h4> 
        <p className="text-[16px] font-inter font-normal">
          Suspendisse pharetra dolor in massa molestie, vel molestie nunc
          accumsan. Cras varius aliquet pellentesque. Curabitur ac mi fermentum
          nibh congue pharetra in eu nunc. Vivamus mattis urna a fringilla
          facilisis. Cras finibus nulla in nulla imperdiet pharetra. Morbi vel
          tortor turpis.
        </p>
        
      </div>
      <hr className="w-full border-b-[1.11px]  border-[#F2F4F7]"/>
      <div className="w-full flex flex-col gap-4">
        <div className="flex gap-2 ">
          <img
            src="/blog/avatar3.svg"
            alt=""
            className="h-[40px] w-[40px] rounded-full"
          />
          <div className="p-4 bg-[#F3F4F6] rounded-lg w-full">
          <div className="flex justify-between">
            <h3 className="font-inter font-medium text-[14px]">Alcides Antonio</h3>
            <p className="font-inter font-medium text-[12px] text-[#6C737F]">about 2 hours ago</p>
            </div>
            <p className="font-inter font-normal text-[14px] mt-2" >

              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua.
            </p>
          </div>
        </div>
        <div className="flex gap-2 ">
          <img
            src="/blog/avatar1.svg"
            alt=""
            className="h-[40px] w-[40px] rounded-full"
          />
          <div className="p-4 bg-[#F3F4F6] rounded-lg w-full">
            <div className="flex justify-between">
            <h3 className="font-inter font-medium text-[14px]">Jie Yan Song</h3>
            <p className="font-inter font-medium text-[12px] text-[#6C737F]">about 8 hours ago</p>
            </div>
            <p className="font-inter font-normal text-[14px] mt-2">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor.
            </p>
          </div>
        </div>
        <hr />

        <div className="flex gap-2  w-full">
          <img
            src="/Avatar.svg"
            alt=""
            className="h-[40px] w-[40px] rounded-full"
          />
          <div className="w-full">
            <input
              type="text"
              placeholder="Add a comment"
              className=" w-full bg-[#1119270A] rounded-lg p-5 h-[104px]"
            />
            <div className="flex justify-between mt-4">
            <div className="flex gap-3 mt-3 px-2">
              <RiGalleryFill size={20} className="text-gray-500" />
              <GoPaperclip size={20} className="text-gray-500" />
              <CiFaceSmile size={20} className="text-gray-500" />
            </div>
            <button className="w-[74.76px] h-[40.45px] bg-[#0B5D51] text-white rounded-[12px]"> Send
            </button>
              </div>
          </div>
        </div>

        <div className="mt-5 w-full sm:h-[373px] h-full  p-20 flex justify-center flex-col  border rounded-[20px] mb-5  
      shadow-[0_5px_25px_0_rgba(11,93,81,0.5)]">
        <div className="flex justify-between items-center flex-col lg:flex-row gap-4">
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
        <div className=" right-5 -top-12 bg-[#0B5D51] text-white rounded-[22px] w-11 h-11 flex items-center justify-center font-bold text-sm">
          <img src="/setting.svg" alt="badge" /> 
        </div>
        </div>
        
      </div>
      </div>
    </div>
  );
};

export default AdminPostDetails;
