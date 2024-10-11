import React from "react";
import blogimage from "../assets/BlogDetailPageimg.png";
import person from "../assets/PersonImg.png";
import robot from "../assets/Robot.png";
import t3 from "../assets/T3.png";
import news from "../assets/News.png";
import imagee from "../assets/News.png";
import { AiOutlineHome } from "react-icons/ai";
import { FaAngleRight } from "react-icons/fa6";
import { GoStack } from "react-icons/go";
import { VscAccount } from "react-icons/vsc";
import { FaRegCalendar } from "react-icons/fa";
import { AiOutlineMessage } from "react-icons/ai";
import { BsWhatsapp } from "react-icons/bs";
import { FaFacebookF } from "react-icons/fa";
import { TbBrandTwitterFilled } from "react-icons/tb";
import { FaLinkedinIn } from "react-icons/fa6";
import { FaPinterestP } from "react-icons/fa";
import { LuLink } from "react-icons/lu";
import { IoSearch } from "react-icons/io5";
import { PiArrowsClockwise } from "react-icons/pi";

const BlogDetail = () => {
  const products = [
    "All",
    "Electronics Devices",
    "Computer & Laptop",
    "Computer Accessories",
    "SmartPhone",
    "Headphone",
    "Mobile Accessories",
    "Gaming Console",
    "Camera & Photo",
  ];
  return (
    <div className="flex flex-col gap-10 ">
      <div className="bg-[#F2F4F5] flex items-center gap-3 px-[120px] p-3">
        <div className="flex gap-2 items-center">
          <AiOutlineHome color="#5F6C72" />
          <p className="text-[#5F6C72]">Home</p>
        </div>
        <div className="flex gap-3 items-center">
          <FaAngleRight color="#5F6C72" />
          <p className="text-[#5F6C72]">Pages</p>
        </div>
        <div className="flex gap-3 items-center">
          <FaAngleRight color="#5F6C72" />
          <p className="text-[#5F6C72]">Blog</p>
        </div>
        <div className="flex gap-3 items-center">
          <FaAngleRight color="#5F6C72" />
          <p className="text-[#0B5D51]">Blog Detail</p>
        </div>
      </div>
      <div className="flex flex-col gap-5 px-[120px]">
        <div>
          <img src={blogimage} width={1320} height={740} alt="" />
        </div>
        <div className="grid grid-cols-12 gap-4">
          <div className="col-span-8 flex-col space-y-5">
            <div className="flex gap-3">
              <div className="flex gap-1 items-center ">
                <span>
                  <GoStack color="#0B5D51" size={20} />
                </span>
                <p className="text-[#475156] text-[14px]">Electronics </p>{" "}
              </div>
              <div className="flex gap-1 items-center ">
                <span>
                  <VscAccount color="#0B5D51" size={20} />
                </span>
                <p className="text-[#475156] text-[14px]">Marvin McKinney </p>{" "}
              </div>
              <div className="flex gap-1 items-center ">
                <span>
                  <FaRegCalendar color="#0B5D51" size={20} />
                </span>
                <p className="text-[#475156] text-[14px]">8 Sep, 2020 </p>{" "}
              </div>
              <div className="flex gap-1 items-center ">
                <span>
                  <AiOutlineMessage color="#0B5D51" size={20} />
                </span>
                <p className="text-[#475156] text-[14px]">738 </p>{" "}
              </div>
            </div>
            <h1 className="text-[32px] font-[600] mt-[20px]">
              How artist collective Meow Wolf’s website complements their
              immersive venues
            </h1>
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-4">
                <img src={person} alt="" />
                <span className="text-[16px] font-[500]">
                  Cameron Williamson
                </span>
              </div>
              <div className="flex items-center gap-2">
                <div className="flex items-center gap-1">
                  <div className="bg-[#25D366]  p-3 rounded-full">
                    <BsWhatsapp size={20} color="white" />
                  </div>
                </div>
                <div className="flex items-center gap-1">
                  <div className="bg-[#3B5998] p-3 rounded-full">
                    <FaFacebookF size={20} color="white" />
                  </div>
                </div>
                <div className="flex items-center gap-1">
                  <div className="bg-[#1DA1F2] p-3 rounded-full">
                    {" "}
                    <TbBrandTwitterFilled size={20} color="white" />
                  </div>
                </div>
                <div className="flex items-center gap-1">
                  <div className="bg-[#0077B5] p-3 rounded-full">
                    {" "}
                    <FaLinkedinIn size={20} color="white" />
                  </div>
                </div>
                <div className="flex items-center gap-1">
                  <div className="bg-[#CB2027] p-3 rounded-full">
                    {" "}
                    <FaPinterestP size={20} color="white" />
                  </div>
                </div>
                <div className="flex items-center gap-1">
                  <div className="bg-[#77878F] p-3 rounded-full">
                    {" "}
                    <LuLink size={20} color="white" />
                  </div>
                </div>
              </div>

              <div></div>
            </div>
            <div>
              <p
                className="text-[16px] text-[#475156]
"
              >
                Sed a laoreet erat, in vehicula erat. Vivamus a viverra ipsum,
                ut interdum tellus. Donec quis ex quis metus sodales facilisis
                ut nec ex. Ut commodo lacus vel odio venenatis, sit amet lacinia
                lacus cursus. Ut sodales laoreet dapibus. Sed aliquam nisl odio,
                sed blandit erat placerat sed. Mauris eleifend, magna in
                convallis congue, orci est fermentum leo, at tincidunt massa
                ligula semper dolor. Nunc tristique enim in risus tristique
                rutrum eget ac eros.
              </p>
            </div>
            <div className="flex items-center gap-5 bg-[#FFF3EB] border-l-8 border-[#FA8232] p-[30px]">
              <p className="text-[100px] text-[#0B5D51]">“</p>
              <p className="text-[20px]">
                Vintage meets vogue is the only way to describe this serif
                typeface. Neue World encompasses the mode high-fashion aesthetic
                of the 1960s with a commercial take.
              </p>
            </div>
            <p className="text-[16px] text-[#475156]">
              Mauris fermentum faucibus risus a efficitur. Morbi sit amet arcu
              turpis. Ut nisl velit, mattis at augue vel, molestie egestas
              justo. Aliquam elementum nibh neque, eu ornare nunc feugiat sed.
              Aliquam erat volutpat. Praesent vitae orci blandit, semper felis
              ac, interdum lacus.
            </p>
            <p className="text-[16px] text-[#475156]">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed
              iaculis nunc urna, id lobortis elit dapibus et. Etiam ultricies
              leo justo, nec vehicula augue auctor et. Sed finibus volutpat dui.
              Nunc vitae urna dictum tellus luctus tincidunt quis feugiat dolor.
              Aliquam malesuada tristique urna, quis ornare diam venenatis quis.
              Nunc ligula lectus, posuere sit amet ultrices ut, porttitor
              efficitur mauris. Aliquam bibendum vitae turpis sed molestie.
              Donec massa lorem, semper vel pellentesque ut, ultrices in enim.
              Sed fringilla, mi porttitor sodales vehicula, felis enim gravida
              nisi, at mollis ante leo et ligula. Quisque non aliquam eros, in
              aliquet tellus. Mauris ullamcorper quam erat, vehicula rhoncus
              velit interdum eget.
            </p>
            <div className="flex items-center gap-3">
              <img src={robot} width={355} height={400} alt="" />
              <img src={t3} width={355} height={400} alt="" />
            </div>
            <p className="text-[16px] text-[#475156]">
              Proin pulvinar quam at aliquet sagittis. Quisque laoreet luctus
              bibendum. Aenean in dignissim orci. Suspendisse at augue eget
              neque dictum vestibulum eu ac orci. Integer imperdiet lectus nec
              urna mollis euismod. Proin et risus nulla. Cras at diam in risus
              feugiat accumsan. Nulla sit amet blandit mi, a convallis mauris.
              Quisque lacus dolor, cursus ac quam ac, tempus ultrices sem. Ut
              porttitor.
            </p>

            <div className="mt-[30px] flex flex-col space-y-4">
              <h1 className="text-[20px] font-[500]">Leave a Comments</h1>

              <div>
                <form action="">
                  <div className="flex gap-4">
                    <div className="flex flex-col">
                      <label htmlFor="fullName">Full Name</label>
                      <input
                        type="text"
                        id="fullName"
                        className="w-[400px] h-[44px] border-2 border-[#E4E7E9]"
                      />
                    </div>
                    <div className="flex flex-col">
                      <label htmlFor="email">Email</label>
                      <input
                        type="email"
                        id="email"
                        className="w-[400px] h-[44px] border-2 border-[#E4E7E9]"
                      />
                    </div>
                  </div>

                  <div className="flex flex-col mt-4">
                    <label htmlFor="description">Description</label>
                    <textarea
                      id="description"
                      className="w-[820px] h-[100px] border-2 border-[#E4E7E9]"
                      placeholder="Enter your description here..."
                    />
                  </div>
                  <button className=" mt-[15px] bg-[#0B5D51] text-[white] px-5  py-3 text-[14px] font-[700]">
                    post Comments
                  </button>
                </form>
              </div>
              <div className="flex flex-col space-y-4">
                <h1 className="text-[20px] font-[500]">Comments</h1>
                <div className="flex items-center gap-2">
                  <img src={person} alt="" />
                  <div className="flex flex-col space-y-2">
                    <div className="flex gap-2 items-center">
                      <h3 className="text-[14px] font-[500]">Annette Black</h3>
                      <p className="text-[14px] text-[#77878F]">26 Apr, 2021</p>
                    </div>
                    <p className="text-[14px] text-[#475156]">
                      In a nisi commodo, porttitor ligula consequat, tincidunt
                      dui. Nulla volutpat, metus eu aliquam malesuada, elit
                      libero venenatis urna, consequat maximus arcu diam non
                      diam.
                    </p>
                  </div>
                </div>
                <div className="flex items-center gap-2">
                  <img src={person} alt="" />
                  <div className="flex flex-col space-y-2">
                    <div className="flex gap-2 items-center">
                      <h3 className="text-[14px] font-[500]">Annette Black</h3>
                      <p className="text-[14px] text-[#77878F]">26 Apr, 2021</p>
                    </div>
                    <p className="text-[14px] text-[#475156]">
                      In a nisi commodo, porttitor ligula consequat, tincidunt
                      dui. Nulla volutpat, metus eu aliquam malesuada, elit
                      libero venenatis urna, consequat maximus arcu diam non
                      diam.
                    </p>
                  </div>
                </div>
                <div className="flex items-center gap-2">
                  <img src={person} alt="" />
                  <div className="flex flex-col space-y-2">
                    <div className="flex gap-2 items-center">
                      <h3 className="text-[14px] font-[500]">Annette Black</h3>
                      <p className="text-[14px] text-[#77878F]">26 Apr, 2021</p>
                    </div>
                    <p className="text-[14px] text-[#475156]">
                      In a nisi commodo, porttitor ligula consequat, tincidunt
                      dui. Nulla volutpat, metus eu aliquam malesuada, elit
                      libero venenatis urna, consequat maximus arcu diam non
                      diam.
                    </p>
                  </div>
                </div>
                <div className="flex items-center gap-2">
                  <img src={person} alt="" />
                  <div className="flex flex-col space-y-2">
                    <div className="flex gap-2 items-center">
                      <h3 className="text-[14px] font-[500]">Annette Black</h3>
                      <p className="text-[14px] text-[#77878F]">26 Apr, 2021</p>
                    </div>
                    <p className="text-[14px] text-[#475156]">
                      In a nisi commodo, porttitor ligula consequat, tincidunt
                      dui. Nulla volutpat, metus eu aliquam malesuada, elit
                      libero venenatis urna, consequat maximus arcu diam non
                      diam.
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <button className=" px-6 py-3 flex gap-2 items-center text-[#0B5D51] text-[14px] font-[700] border border-[#FFE7D6]">
              <span>
                <PiArrowsClockwise size={20} />
              </span>
              LOAD MORE
            </button>
          </div>
          <div className="col-span-4 flex flex-col space-y-5 ">
            <div className="flex flex-col space-y-3 border rounded-md p-6">
              <h2 className="text-[16px] font-[500]">Search</h2>
              <div className="flex items-center justify-between border-2 rounded-md p-2">
                <input
                  type="text"
                  placeholder="Search..."
                  className="border-none outline-none"
                />
                <IoSearch size={20} />
              </div>
            </div>
            <div className="flex flex-col border rounded-md p-3">
              <h1 className="px-3 text-[16px]">CATEGORY</h1>
              <ul className="px-3 flex flex-col gap-2 mt-2">
                {products.map((product, index) => (
                  <li className="flex items-center" key={index}>
                    <input
                      type="radio"
                      id={`item${index + 1}`}
                      name="category"
                      className="mr-2 custom-radio"
                    />
                    <label htmlFor={`item${index + 1}`} className="text-[14px]">
                      {product}
                    </label>
                  </li>
                ))}
              </ul>
            </div>
            <div className="flex flex-col border rounded-md p-3">
              <h1 className="px-3 text-[16px]">LATEST BLOG</h1>
              <div className="px-3 flex items-start gap-4">
                <img src={news} alt="" className="w-16 h-16 object-cover" />{" "}
                <div className="flex flex-col overflow-hidden">
                  {" "}
                  <p className="whitespace-nowrap overflow-hidden text-ellipsis">
                    Curabitur pulvinar aliquam lectus, non blandit erat mattis
                    vitae.
                  </p>
                  <span className="text-gray-500 text-sm">October 9, 2024</span>{" "}
                </div>
              </div>
              <div className="p-3 flex items-start gap-4">
                <img src={news} alt="" className="w-16 h-16 object-cover" />{" "}
                <div className="flex flex-col overflow-hidden">
                  {" "}
                  <p className="whitespace-nowrap overflow-hidden text-ellipsis">
                    Curabitur pulvinar aliquam lectus, non blandit erat mattis
                    vitae.
                  </p>
                  <span className="text-gray-500 text-sm">October 9, 2024</span>{" "}
                </div>
              </div>
              <div className="p-3 flex items-start gap-4">
                <img src={news} alt="" className="w-16 h-16 object-cover" />{" "}
                <div className="flex flex-col overflow-hidden">
                  {" "}
                  <p className="whitespace-nowrap overflow-hidden text-ellipsis">
                    Curabitur pulvinar aliquam lectus, non blandit erat mattis
                    vitae.
                  </p>
                  <span className="text-gray-500 text-sm">October 9, 2024</span>{" "}
                </div>
              </div>
            </div>
            <div className="flex flex-col border rounded-md p-3">
              <h1 className="text-[16px] font-[500]">Gallery</h1>
              <div className="flex flex-wrap gap-1 px-3">
                {" "}
                <div className="flex gap-1 w-full">
                  <img className="w-1/4 p-1" src={imagee} alt="" />
                  <img className="w-1/4 p-1" src={imagee} alt="" />
                  <img className="w-1/4 p-1" src={imagee} alt="" />
                  <img className="w-1/4 p-1" src={imagee} alt="" />
                </div>
                <div className="flex gap-1 w-full">
                  <img className="w-1/4 p-1" src={imagee} alt="" />
                  <img className="w-1/4 p-1" src={imagee} alt="" />
                  <img className="w-1/4 p-1" src={imagee} alt="" />
                  <img className="w-1/4 p-1" src={imagee} alt="" />
                </div>
              </div>
            </div>
            <div className="flex flex-col gap-3 p-2">
              <h1 className="text-[16px] font-[500]">POPULAR TAGS</h1>
              <div className="flex flex-col gap-3">
                <div className="flex gap-1 w-full">
                  <button className="px-2 py-1 border rounded-md hover:bg-[#FFF3EB] hover:border-[#0B5D51] hover:text-[#0B5D51]">
                    Game
                  </button>
                  <button className="px-2 py-1 border rounded-md hover:bg-[#FFF3EB] hover:border-[#0B5D51] hover:text-[#0B5D51]">
                    iPhone
                  </button>
                  <button className="px-2 py-1 border rounded-md hover:bg-[#FFF3EB] hover:border-[#0B5D51] hover:text-[#0B5D51]">
                    TV
                  </button>
                  <button className="px-2 py-1 border rounded-md hover:bg-[#FFF3EB] hover:border-[#0B5D51] hover:text-[#0B5D51]">
                    Asus Laptops
                  </button>
                </div>
                <div className="flex gap-1 w-full">
                  <button className="px-2 py-1 border rounded-md hover:bg-[#FFF3EB] hover:border-[#0B5D51] hover:text-[#0B5D51]">
                    Macbook{" "}
                  </button>
                  <button className="px-2 py-1 border rounded-md hover:bg-[#FFF3EB] hover:border-[#0B5D51] hover:text-[#0B5D51]">
                    SSD
                  </button>
                  <button className="px-2 py-1 border rounded-md hover:bg-[#FFF3EB] hover:border-[#0B5D51] hover:text-[#0B5D51]">
                    Speaker
                  </button>
                  <button className="px-2 py-1 border rounded-md hover:bg-[#FFF3EB] hover:border-[#0B5D51] hover:text-[#0B5D51]">
                    Graphics
                  </button>
                </div>
                <div className="flex gap-1 w-full">
                  <button className="px-2 py-1 border rounded-md hover:bg-[#FFF3EB] hover:border-[#0B5D51] hover:text-[#0B5D51]">
                    Macbook{" "}
                  </button>
                  <button className="px-2 py-1 border rounded-md hover:bg-[#FFF3EB] hover:border-[#0B5D51] hover:text-[#0B5D51]">
                    SSD
                  </button>
                  <button className="px-2 py-1 border rounded-md hover:bg-[#FFF3EB] hover:border-[#0B5D51] hover:text-[#0B5D51]">
                    Speaker
                  </button>
                  <button className="px-2 py-1 border rounded-md hover:bg-[#FFF3EB] hover:border-[#0B5D51] hover:text-[#0B5D51]">
                    Graphics{" "}
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BlogDetail;
