import React from "react";
import VendorHeader from "../components/VendorHeader";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa6";
import { BsMailbox } from "react-icons/bs";

const PostList = () => {
  return (
    <div className="flex flex-col gap-6 p-4 pt-10">
      <div>
        <h2 className="font-semibold text-[36px] text-[#111927]">Blog</h2>
        <p className="flex gap-2 font-medium text-[14px]">
          Dashboard . Blog . <span className="text-gray-500"> List</span>
        </p>
      </div>
      <div className="flex rounded-xl items-center justify-between px-5 shadow-md h-[72px]">
        Hello, Vendor
        <button className="bg-[#0B5D51] text-white w-[104px] flex justify-center items-center py-2 rounded-lg">
          New Post
        </button>
      </div>
      <div className="w-[600px]">
        <h2 className="font-semibold text-[36px] text-[#111927]">
          Recent Articles
        </h2>
        <p>
          Discover the latest news, tips and user research insights from Acme.
          You will learn about web infrastructure, design systems and devops
          APIs best practices.
        </p>
      </div>
      <div className="flex flex-wrap w-full gap-5">
        {/* Row 1 */}
        <div className="w-[48%] h-[533px] rounded-xl shadow-lg">
          <div className="h-full w-full overflow-hidden rounded-xl">
            <img
              src="https://via.placeholder.com/150"
              alt=""
              className="h-1/2 w-full"
            />
            <div className="h-1/2 w-full flex flex-col mt-2 p-4 gap-2">
              <h2 className="p-2  text-[14px] w-[107px] bg-gray-300 flex items-center justify-center rounded-full">
                Programming
              </h2>
              <h1 className="font-semibold text-[23px] text-[#111927]">
                Why I Still Lisp, and You Should Too
              </h1>
              <p className="text-[14px] text-gray-500">
                Aliquam dapibus elementum nulla at malesuada. Ut mi nisl,
                aliquet non mollis vel, feugiat non nibh.
              </p>
              <div className="flex gap-2 items-center justify-between">
                <div className="flex gap-2 items-center">
                  <img
                    src="https://via.placeholder.com/150"
                    alt=""
                    className="h-[40px] w-[40px] rounded-full"
                  />

                  <p className="font-semibold">By Jie Yan Song • Feb 1, 2024</p>
                </div>
                <p className="text-gray-500">5 min read</p>
              </div>
            </div>
          </div>
        </div>
        <div className="w-[48%] h-[533px] rounded-xl shadow-lg">
          <div className="h-full w-full overflow-hidden rounded-xl">
            <img
              src="https://via.placeholder.com/150"
              alt=""
              className="h-1/2 w-full"
            />
            <div className="h-1/2 w-full flex flex-col mt-2 p-4 gap-2">
              <h2 className="p-2  text-[14px] w-[107px] bg-gray-300 flex items-center justify-center rounded-full">
                Programming
              </h2>
              <h1 className="font-semibold text-[23px] text-[#111927]">
                Why I Still Lisp, and You Should Too
              </h1>
              <p className="text-[14px] text-gray-500">
                Aliquam dapibus elementum nulla at malesuada. Ut mi nisl,
                aliquet non mollis vel, feugiat non nibh.
              </p>
              <div className="flex gap-2 items-center justify-between">
                <div className="flex gap-2 items-center">
                  <img
                    src="https://via.placeholder.com/150"
                    alt=""
                    className="h-[40px] w-[40px] rounded-full"
                  />

                  <p className="font-semibold">By Jie Yan Song • Feb 1, 2024</p>
                </div>
                <p className="text-gray-500">5 min read</p>
              </div>
            </div>
            <div className="h-1/2 w-full flex flex-col mt-2 p-4 gap-2">
              <h2 className="p-2  text-[14px] w-[107px] bg-gray-300 flex items-center justify-center rounded-full">
                Programming
              </h2>
              <h1 className="font-semibold text-[23px] text-[#111927]">
                Why I Still Lisp, and You Should Too
              </h1>
              <p className="text-[14px] text-gray-500">
                Aliquam dapibus elementum nulla at malesuada. Ut mi nisl,
                aliquet non mollis vel, feugiat non nibh.
              </p>
              <div className="flex gap-2 items-center justify-between">
                <div className="flex gap-2 items-center">
                  <img
                    src="https://via.placeholder.com/150"
                    alt=""
                    className="h-[40px] w-[40px] rounded-full"
                  />

                  <p className="font-semibold">By Jie Yan Song • Feb 1, 2024</p>
                </div>
                <p className="text-gray-500">5 min read</p>
              </div>
            </div>
          </div>
        </div>

        {/* Row 2 */}
        <div className="w-[48%] h-[533px] rounded-xl shadow-lg">
          <div className="h-full w-full overflow-hidden rounded-xl">
            <img
              src="https://via.placeholder.com/150"
              alt=""
              className="h-1/2 w-full"
            />
            <div className="h-1/2 w-full flex flex-col mt-2 p-4 gap-2">
              <h2 className="p-2  text-[14px] w-[107px] bg-gray-300 flex items-center justify-center rounded-full">
                Programming
              </h2>
              <h1 className="font-semibold text-[23px] text-[#111927]">
                Why I Still Lisp, and You Should Too
              </h1>
              <p className="text-[14px] text-gray-500">
                Aliquam dapibus elementum nulla at malesuada. Ut mi nisl,
                aliquet non mollis vel, feugiat non nibh.
              </p>
              <div className="flex gap-2 items-center justify-between">
                <div className="flex gap-2 items-center">
                  <img
                    src="https://via.placeholder.com/150"
                    alt=""
                    className="h-[40px] w-[40px] rounded-full"
                  />

                  <p className="font-semibold">By Jie Yan Song • Feb 1, 2024</p>
                </div>
                <p className="text-gray-500">5 min read</p>
              </div>
            </div>
            <div className="h-1/2 w-full"></div>
          </div>
        </div>
        <div className="w-[48%] h-[533px] rounded-xl shadow-lg">
          <div className="h-full w-full overflow-hidden rounded-xl">
            <img
              src="https://via.placeholder.com/150"
              alt=""
              className="h-1/2 w-full"
            />
            <div className="h-1/2 w-full flex flex-col mt-2 p-4 gap-2">
              <h2 className="p-2  text-[14px] w-[107px] bg-gray-300 flex items-center justify-center rounded-full">
                Programming
              </h2>
              <h1 className="font-semibold text-[23px] text-[#111927]">
                Why I Still Lisp, and You Should Too
              </h1>
              <p className="text-[14px] text-gray-500">
                Aliquam dapibus elementum nulla at malesuada. Ut mi nisl,
                aliquet non mollis vel, feugiat non nibh.
              </p>
              <div className="flex gap-2 items-center justify-between">
                <div className="flex gap-2 items-center">
                  <img
                    src="https://via.placeholder.com/150"
                    alt=""
                    className="h-[40px] w-[40px] rounded-full"
                  />

                  <p className="font-semibold">By Jie Yan Song • Feb 1, 2024</p>
                </div>
                <p className="text-gray-500">5 min read</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="flex items-center justify-center h-[42px] w-full gap-8 ">
        <div className="flex gap-2 items-center text-gray-500">
          <FaArrowLeft /> Newer
        </div>
        <div className="flex gap-2 items-center text-blue-600">
          Older posts
          <FaArrowRight />
        </div>
      </div>

      <div className="mt-5 w-full h-[373px] p-20 flex justify-center flex-col shadow-lg border rounded-3xl mb-5">
        <h1 className="font-semibold text-[36px] text-[#111927]">
          Join the developer list
        </h1>
        <p className="text-[14px] text-gray-500">
          Subscribe to our newsletter to make sure you don't miss anything.
        </p>
        <div className="flex mt-5 items-center border border-gray-300 rounded-lg p-2 w-[600px] ">
          <input
            type="email"
            placeholder="Enter email"
            className="flex-grow p-2 outline-none border-none text-gray-700"
          />
          <BsMailbox size={24} className="text-[#0B5D51]" />
        </div>
        <button className="w-[600px] p-4 text-white rounded-lg bg-[#0B5D51] mt-5">
          Subscribe
        </button>
      </div>
    </div>
  );
};

export default PostList;
