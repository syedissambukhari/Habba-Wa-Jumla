import React from "react";
import { BiBadge, BiCar, BiCard, BiHeart, BiStar } from "react-icons/bi";
import { BsCart } from "react-icons/bs";
import {
  FaArrowLeft,
  FaArrowRight,
  FaFacebook,
  FaHandshake,
  FaStar,
  FaTwitter,
} from "react-icons/fa6";
import { GoCopy } from "react-icons/go";
import { IoIosGitCompare } from "react-icons/io";
import { LiaPinterestP } from "react-icons/lia";
import { PiHeartHalfDuotone } from "react-icons/pi";

const BulkProducts = () => {
  return (
    <div className="max-w-[1320px] m-auto flex flex-col gap-2 h-[2000px] py-10">
      <div className="flex gap-[56px] w-full h-[842px]">
        <div className="flex-1 flex flex-col gap-5">
          <div className="main-image h-[482px] w-full">
            <img
              src="https://via.placeholder.com/150"
              alt=""
              className="w-full h-full rounded-lg"
            />
          </div>
          <div className="h-[88px] w-full flex gap-2 relative">
            <div className="h-8 w-8 flex items-center justify-center bg-[#0B5D51] absolute top-1/2 -left-4 -translate-y-1/2 p-1 rounded-full">
              <FaArrowLeft className="text-white" />
            </div>
            <img
              src="https://via.placeholder.com/150"
              alt=""
              className="w-full h-full rounded-lg"
            />
            <img
              src="https://via.placeholder.com/150"
              alt=""
              className="w-full h-full rounded-lg"
            />
            <img
              src="https://via.placeholder.com/150"
              alt=""
              className="w-full h-full rounded-lg"
            />
            <img
              src="https://via.placeholder.com/150"
              alt=""
              className="w-full h-full rounded-lg"
            />
            <img
              src="https://via.placeholder.com/150"
              alt=""
              className="w-full h-full rounded-lg"
            />
            <div className="h-8 w-8 flex items-center justify-center bg-[#0B5D51] absolute top-1/2 -right-4 -translate-y-1/2 p-1 rounded-full">
              <FaArrowRight className="text-white" />
            </div>
          </div>
        </div>
        <div className="flex-1 h-full flex flex-col gap-[37px]">
          <div className="flex items-center gap-1 text-[#0B5D51]">
            <FaStar Star fill="#0B5D51" />
            <FaStar Star fill="#0B5D51" />
            <FaStar Star fill="#0B5D51" />
            <FaStar Star fill="#0B5D51" />
            <FaStar Star fill="#0B5D51" />
            <div className="text-black font-medium">
              4.7 Star Rating
              <span className="text-gray-500 font-light">
                {" "}
                (21,671 User Feedback)
              </span>
            </div>
          </div>
          <h2 className="text-[20px] font-normal">
            2020 Apple MacBook Pro with Apple M1 Chip (13-inch, 8GB RAM, 256GB
            SSD Storage) - Space Gray
          </h2>

          <div className="flex items-center gap-2 text-black">
            <div className="flex-1 text-left flex flex-col gap-[37px]">
              <div className="flex gap-1">
                <span className="text-gray-500">Brand: </span>
                <span>Apple</span>
              </div>
              <div className="flex flex-col gap-3">
                Color
                <div className="flex gap-5">
                  <div className="h-[32px] w-[32px] rounded-full bg-[#E0E1E1]"></div>
                  <div className="h-[32px] w-[32px] rounded-full bg-[#E0E1E1]"></div>
                </div>
              </div>
              <div className="flex flex-col gap-1">
                Memory
                <div className="relative cursor-pointer">
                  <select
                    name=""
                    id=""
                    defaultValue="Select"
                    className="appearance-none w-full h-10 border mt-3 px-3 rounded-sm pr-10"
                  >
                    <option value="Select">16GB unified memory</option>
                    <option value="Bangladesh">8GB</option>
                    <option value="Pakistan">2GB</option>
                  </select>
                  <div className="pointer-events-none cursor-pointer absolute right-0 top-6  flex items-center px-2">
                    <svg
                      className="w-4 h-4 text-gray-500"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M19 9l-7 7-7-7"
                      />
                    </svg>
                  </div>
                </div>
              </div>
            </div>
            <div className="flex-1 text-left flex flex-col gap-[37px]">
              <div className="flex gap-1">
                <span className="text-gray-500">Category: </span>
                <span>Electronic Device</span>
              </div>
              <div className="flex flex-col gap-1">
                Size
                <div className="relative cursor-pointer">
                  <select
                    name=""
                    id=""
                    defaultValue="Select"
                    className="appearance-none w-full h-10 border mt-3 px-3 rounded-sm pr-10"
                  >
                    <option value="Select">
                      14-inch Liquid Retina XDR display
                    </option>
                    <option value="Bangladesh">
                      10-inch Liquid Retina XDR display
                    </option>
                    <option value="Pakistan">
                      4-inch Liquid Retina XDR display
                    </option>
                  </select>
                  <div className="pointer-events-none cursor-pointer absolute right-0 top-6  flex items-center px-2">
                    <svg
                      className="w-4 h-4 text-gray-500"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M19 9l-7 7-7-7"
                      />
                    </svg>
                  </div>
                </div>
              </div>
              <div className="flex flex-col gap-1 -mt-3">
                Storage
                <div className="relative cursor-pointer">
                  <select
                    name=""
                    id=""
                    defaultValue="Select"
                    className="appearance-none w-full h-10 border mt-3 px-3 rounded-sm pr-10"
                  >
                    <option value="Select">1 TB SSD Storage</option>
                    <option value="Bangladesh">
                      10-inch Liquid Retina XDR display
                    </option>
                    <option value="Pakistan">
                      4-inch Liquid Retina XDR display
                    </option>
                  </select>
                  <div className="pointer-events-none cursor-pointer absolute right-0 top-6  flex items-center px-2">
                    <svg
                      className="w-4 h-4 text-gray-500"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M19 9l-7 7-7-7"
                      />
                    </svg>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="flex h-[108px] w-full">
            <div className="flex-1 h-full border p-3 text-gray-500 text-[18px] shadow-xl border-blue-700">
              1 piece
              <p className="text-[24px]  text-black">$1699</p>
            </div>
            <div className="flex-1 h-full border p-3 text-gray-500 text-[18px]">
              1 piece
              <p className="text-[24px]  text-black">$1699</p>
              <p>10% off</p>
            </div>
            <div className="flex-1 h-full border p-3 text-gray-500 text-[18px]">
              12 pieces
              <p className="text-[24px] text-black">$1699</p>
              <p>10% off</p>
            </div>
          </div>

          <div className="flex w-full h-[56px] gap-2">
            <button className="flex  rounded-sm items-center text-2xl h-full justify-between w-[164px] border-2 px-4">
              -<span className="text-lg">05</span>+
            </button>
            <button className="uppercase flex items-center text-[16px] h-full justify-center gap-3 bg-[#0B5D51] rounded-sm text-white w-[310px] border px-4">
              Add to cart <BsCart />
            </button>
            <button className=" uppercase flex  rounded-sm items-center text-[#0B5D51] font-bold text-[16px]  h-full justify-center border-[#0B5D51] w-[164px] border-2 px-4">
              Buy now
            </button>
          </div>

          <div className="flex items-center justify-between">
            <div className="flex items-center gap-5 text-[14px] text-gray-600">
              <div className="flex items-center gap-3">
                <span>
                  <BiHeart />
                </span>
                <span>Add to Wishlist</span>
              </div>
              <div className=" flex items-center gap-3">
                <span>
                  <IoIosGitCompare />
                </span>
                <span>Add to Compare</span>
              </div>
            </div>

            <div className="flex gap-2 items-center  text-gray-600">
              Share Product:
              <div className="flex gap-2">
                <GoCopy />
                <FaFacebook />
                <FaTwitter />
                <LiaPinterestP />
              </div>
            </div>
          </div>

          <div className=" p-3 w-full rounded-sm border text-[14px]">
            100% Guarantee Safe Checkout
            <div className="flex gap-1">
              <img
                src="https://via.placeholder.com/150"
                className="h-5 w-8"
              ></img>
              <img
                src="https://via.placeholder.com/150"
                className="h-5 w-8"
              ></img>
              <img
                src="https://via.placeholder.com/150"
                className="h-5 w-8"
              ></img>
              <img
                src="https://via.placeholder.com/150"
                className="h-5 w-8"
              ></img>
              <img
                src="https://via.placeholder.com/150"
                className="h-5 w-8"
              ></img>
              <img
                src="https://via.placeholder.com/150"
                className="h-5 w-8"
              ></img>
              <img
                src="https://via.placeholder.com/150"
                className="h-5 w-8"
              ></img>
              <img
                src="https://via.placeholder.com/150"
                className="h-5 w-8"
              ></img>
              <img
                src="https://via.placeholder.com/150"
                className="h-5 w-8"
              ></img>
            </div>
          </div>
        </div>
      </div>
      <div className="h-[364px] w-full border rounded-sm  ">
        <div className="flex w-full h-[56px] items-center justify-center text-gray-500 text-[14px] border-b gap-10 uppercase">
          <p className="h-full text-black border-b-[3px] border-orange-500 flex justify-center items-center">
            Description
          </p>
          <p className="h-full flex justify-center items-center">
            additional features
          </p>
          <p className="h-full flex justify-center items-center">
            specifications
          </p>
          <p className="h-full flex justify-center items-center">review</p>
        </div>

        <div className="h-[calc(100%-56px)] p-5">
          <div className="h-full w-full      flex gap-[24px]">
            <div className="h-full w-[616px]">
              <h2 className="font-bold">Description</h2>
              <p className="text-gray-500 text-[14px] mt-2">
                The most powerful MacBook Pro ever is here. With the
                blazing-fast M1 Pro or M1 Max chip — the first Apple silicon
                designed for pros — you get groundbreaking performance and
                amazing battery life. Add to that a stunning Liquid Retina XDR
                display, the best camera and audio ever in a Mac notebook, and
                all the ports you need. The first notebook of its kind, this
                MacBook Pro is a beast. M1 Pro takes the exceptional performance
                of the M1 architecture to a whole new level for pro users.
              </p>
              <p className="text-gray-500 text-[14px] mt-1">
                Even the most ambitious projects are easily handled with up to
                10 CPU cores, up to 16 GPU cores, a 16‑core Neural Engine, and
                dedicated encode and decode media engines that support H.264,
                HEVC, and ProRes codecs.
              </p>
            </div>
            <div className="h-full w-[280px] border-r">
              <h2 className="font-bold">Feature</h2>
              <div className="text-black text-[14px] flex flex-col gap-2 pt-3">
                <div className="flex gap-2 items-center">
                  <BiBadge className="text-[#0B5D51]" size={20} />
                  Free 1 year warranty
                </div>
                <div className="flex gap-2 items-center">
                  <BiCar className="text-[#0B5D51]" size={20} />
                  Free Shipping and free delivery
                </div>
                <div className="flex gap-2 items-center">
                  <FaHandshake className="text-[#0B5D51]" size={20} />
                  100% money back guarantee
                </div>
                <div className="flex gap-2 items-center">
                  <PiHeartHalfDuotone className="text-[#0B5D51]" size={20} />
                  24/7 customer support
                </div>
                <div className="flex gap-2 items-center">
                  <BiCard className="text-[#0B5D51]" />
                  Secure payment method
                </div>
              </div>
            </div>

            <div className="h-full w-[272px]">
              <h2 className="font-bold">Shipping Information</h2>
              <div className=" pt-3 flex flex-col gap-3">
                <div className="text-black text-[14px]">
                  Courier:
                  <span className="text-gray-500">2-4 days, free shipping</span>
                </div>
                <div className="text-black text-[14px]">
                  Local Shipping:
                  <span className="text-gray-500">upto 1 week $19.00</span>
                </div>
                <div className="text-black text-[14px]">
                  UPS Ground Shipping:
                  <span className="text-gray-500">4-6 Days $29.00</span>
                </div>
                <div className="text-black text-[14px]">
                  Unishop Global Expert:
                  <span className="text-gray-500">3-4 days, $39.00</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="h-[528px] py-[72px]">
          <div className="flex gap-2 w-full h-full text-[14px] justify-center items-center">
            <div className="flex flex-col gap-4 w-[312px] h-[384px]">
              <h2 className="text-[16px] mb-3 font-bold uppercase">Related Products</h2>
              <div className="flex gap-2 p-[12px]  items-center border rounded-sm border-[#0B5D51]">
                <img
                  src="https://via.placeholder.com/150"
                  alt=""
                  className="h-[80px] w-[80px]"
                />
                <p>
                  Bose Sport Earbuds - Wireless Earphones - Bluetooth In Ear...
                  <span className="block text-[#0B5D51] font-bold">$1500</span>
                </p>
              </div>
              <div className="flex gap-2 p-[12px]  items-center border rounded-sm border-[#0B5D51]">
                <img
                  src="https://via.placeholder.com/150"
                  alt=""
                  className="h-[80px] w-[80px]"
                />
                <p>
                  Bose Sport Earbuds - Wireless Earphones - Bluetooth In Ear...
                  <span className="block text-[#0B5D51] font-bold">$1500</span>
                </p>
              </div>
              <div className="flex gap-2 p-[12px]  items-center border rounded-sm border-[#0B5D51]">
                <img
                  src="https://via.placeholder.com/150"
                  alt=""
                  className="h-[80px] w-[80px]"
                />
                <p>
                  Bose Sport Earbuds - Wireless Earphones - Bluetooth In Ear...
                  <span className="block text-[#0B5D51] font-bold">$1500</span>
                </p>
              </div>
            </div>
            <div className="flex flex-col gap-4 w-[312px] h-[384px]">
              <h2 className="text-[16px] mb-3 font-bold uppercase">Product Accessories</h2>
              <div className="flex gap-2 p-[12px]  items-center border rounded-sm border-[#0B5D51]">
                <img
                  src="https://via.placeholder.com/150"
                  alt=""
                  className="h-[80px] w-[80px]"
                />
                <p>
                  Bose Sport Earbuds - Wireless Earphones - Bluetooth In Ear...
                  <span className="block text-[#0B5D51] font-bold">$1500</span>
                </p>
              </div>
              <div className="flex gap-2 p-[12px]  items-center border rounded-sm border-[#0B5D51]">
                <img
                  src="https://via.placeholder.com/150"
                  alt=""
                  className="h-[80px] w-[80px]"
                />
                <p>
                  Bose Sport Earbuds - Wireless Earphones - Bluetooth In Ear...
                  <span className="block text-[#0B5D51] font-bold">$1500</span>
                </p>
              </div>
              <div className="flex gap-2 p-[12px]  items-center border rounded-sm border-[#0B5D51]">
                <img
                  src="https://via.placeholder.com/150"
                  alt=""
                  className="h-[80px] w-[80px]"
                />
                <p>
                  Bose Sport Earbuds - Wireless Earphones - Bluetooth In Ear...
                  <span className="block text-[#0B5D51] font-bold">$1500</span>
                </p>
              </div>
            </div>
            <div className="flex flex-col gap-4 w-[312px] h-[384px]">
              <h2 className="text-[16px] mb-3 font-bold uppercase">Apple Product</h2>
              <div className="flex gap-2 p-[12px]  items-center border rounded-sm border-[#0B5D51]">
                <img
                  src="https://via.placeholder.com/150"
                  alt=""
                  className="h-[80px] w-[80px]"
                />
                <p>
                  Bose Sport Earbuds - Wireless Earphones - Bluetooth In Ear...
                  <span className="block text-[#0B5D51] font-bold">$1500</span>
                </p>
              </div>
              <div className="flex gap-2 p-[12px]  items-center border rounded-sm border-[#0B5D51]">
                <img
                  src="https://via.placeholder.com/150"
                  alt=""
                  className="h-[80px] w-[80px]"
                />
                <p>
                  Bose Sport Earbuds - Wireless Earphones - Bluetooth In Ear...
                  <span className="block text-[#0B5D51] font-bold">$1500</span>
                </p>
              </div>
              <div className="flex gap-2 p-[12px]  items-center border rounded-sm border-[#0B5D51]">
                <img
                  src="https://via.placeholder.com/150"
                  alt=""
                  className="h-[80px] w-[80px]"
                />
                <p>
                  Bose Sport Earbuds - Wireless Earphones - Bluetooth In Ear...
                  <span className="block text-[#0B5D51] font-bold">$1500</span>
                </p>
              </div>
            </div>
            <div className="flex flex-col gap-4 w-[312px] h-[384px]">
              <h2 className="text-[16px] mb-3 font-bold uppercase">Featured Products</h2>
              <div className="flex gap-2 p-[12px]  items-center border rounded-sm border-[#0B5D51]">
                <img
                  src="https://via.placeholder.com/150"
                  alt=""
                  className="h-[80px] w-[80px]"
                />
                <p>
                  Bose Sport Earbuds - Wireless Earphones - Bluetooth In Ear...
                  <span className="block text-[#0B5D51] font-bold">$1500</span>
                </p>
              </div>
              <div className="flex gap-2 p-[12px]  items-center border rounded-sm border-[#0B5D51]">
                <img
                  src="https://via.placeholder.com/150"
                  alt=""
                  className="h-[80px] w-[80px]"
                />
                <p>
                  Bose Sport Earbuds - Wireless Earphones - Bluetooth In Ear...
                  <span className="block text-[#0B5D51] font-bold">$1500</span>
                </p>
              </div>
              <div className="flex gap-2 p-[12px]  items-center border rounded-sm border-[#0B5D51]">
                <img
                  src="https://via.placeholder.com/150"
                  alt=""
                  className="h-[80px] w-[80px]"
                />
                <p>
                  Bose Sport Earbuds - Wireless Earphones - Bluetooth In Ear...
                  <span className="block text-[#0B5D51] font-bold">$1500</span>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BulkProducts;
