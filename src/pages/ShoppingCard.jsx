import React from "react";
import { IoIosArrowRoundBack, IoIosArrowRoundForward } from "react-icons/io";
import { RxCrossCircled } from "react-icons/rx";
import image1 from "../assets/Blutooth.png";
import image2 from "../assets/Camara.png";

const ShoppingCard = () => {
  return (
    <div className="max-w-[1320px] flex gap-4 h-screen m-auto py-10">
      <div className="w-[872px] h-[406px] border-2 border-gray-200 rounded-sm">
        <h2 className="text-[18px] font-semibold p-[20px] h-[64px]">
          Shopping Card
        </h2>

        {/* Grid for Header and Content */}
        <div className="w-full">
          {/* Header */}
          <div className="flex bg-gray-100 text-gray-600 px-[24px] py-[10px] h-[38px] text-[14px] uppercase">
            <div className="w-[380px] font-semibold  flex items-center justify-start">
              Products
            </div>
            <div className="w-[88px] font-semibold  flex items-center justify-center">
              Price
            </div>
            <div className="w-[172px] font-semibold  flex items-center justify-center">
              Quantity
            </div>
            <div className="w-[112px] font-semibold  flex items-center justify-center">
              Subtotal
            </div>
          </div>

          {/* Product Row 1 */}
          <div className="flex  px-[24px] py-[10px] text-[14px]">
            <div className="w-[380px] flex items-center">
              <RxCrossCircled className="text-gray-500" size={30} />
              <img
                src={image1}
                alt="Product A"
                className="h-[72px] w-[72px] ml-4 mr-4"
              />
              <p className="text-[14px]">
                4K UHD LED Smart TV with Chromecast Built-in
              </p>
            </div>
            <div className="w-[88px]  flex items-center justify-center">
              <span className="text-gray-400 line-through mr-2 font-[500]">$18</span> $10
            </div>
            <div className="w-[172px]  flex items-center justify-center ">
              <div className="border-2 border-gray-300 h-[48px] w-[148px]  rounded-sm flex items-center justify-between px-4">
                <button className="text-2xl font-bold text-gray-600">-</button>

                <span className="text-[16px] font-[400]">01</span>

                <button className="text-2xl font-bold text-gray-600">+</button>
              </div>
            </div>
            <div className="w-[112px]  flex items-center justify-center">
              $20
            </div>
          </div>

          {/* Product Row 2 */}
          <div className="flex  px-[24px] py-[10px] text-[14px]">
            <div className="w-[380px] flex items-center">
              <RxCrossCircled className="text-red-500" size={30} />
              <img
                src={image2}
                alt="Product B"
                className="h-[72px] w-[72px] ml-4 mr-4"
              />
              <p className="text-[14px]">
                Wired Over-Ear Gaming Headphones with USB
              </p>
            </div>
            <div className="w-[88px] flex items-center justify-center font-[500]">$5</div>
            <div className="w-[172px]  flex items-center justify-center ">
              <div className="border-2 border-gray-300 h-[48px] w-[148px] flex items-center justify-between px-4  rounded-sm">
                <button className="text-2xl font-bold text-gray-600">-</button>

                <span className="text-[16px] font-[400]">01</span>

                <button className="text-2xl font-bold text-gray-600 ">+</button>
              </div>
            </div>              <div className="w-[112px] flex items-center justify-center">
              $15
            </div>
          </div>
        </div>

        <hr />

        {/* Footer Buttons */}
        <div className="flex p-[24px] items-center justify-between text-[14px]">
          <button className="uppercase border-2 items-center flex gap-[8px] border-blue-400 font-[700] text-blue-400 h-[48px] w-[203px] px-[24px]">
            <IoIosArrowRoundBack size={20} />
            Return to shop
          </button>
          <button className="uppercase border-2 items-center flex gap-[8px] justify-center border-blue-400 font-[700] text-blue-400 h-[48px] w-[203px] px-[24px]">
            Update cart
          </button>
        </div>
      </div>

      {/* Sidebar Elements */}
      <div className="flex flex-col gap-5 w-[424px]">
        <div className="w-full h-[344px] border-2 border-gray-200 flex flex-col p-[24px] rounded-sm">
        <h2 className="text-[18px] font-semibold  h-[64px]">
           Card Totals
        </h2>
        <div className="flex flex-col gap-2">
          <div className="flex justify-between items-center">
            <h1 className="text-gray-500">Sub-total</h1>
            <p className="font-semibold">$320</p>
          </div>
          <div className="flex justify-between items-center">
            <h1 className="text-gray-500">Shipping</h1>
            <p className="font-semibold">Free</p>
          </div>
          <div className="flex justify-between items-center">
            <h1 className="text-gray-500">Discount</h1>
            <p className="font-semibold">$24</p>
          </div>
          <div className="flex justify-between items-center">
            <h1 className="text-gray-500">Tax</h1>
            <p className="font-semibold">$61.99</p>
          </div>
          <hr className="my-2"/>

          <div className="flex items-center justify-between">
            Total
            <p className="font-semibold">$357.99 USD</p>
          </div>

        <button className="w-full bg-[#0B5D51] uppercase h-[56px] gap-3 text-white rounded-sm flex items-center justify-center">
        Proceed to checkout   <IoIosArrowRoundForward size={35}/>
        </button>

        </div>
        </div>
        <div className="w-full h-[220px]  border-2 border-gray-200 rounded-sm flex flex-col">
          <div className=" py-[20px] px-[24px] border-b-2 border-gray-200 font-semibold text-[18px]">
          Coupon Code
          </div>
          <div className="py-[20px] px-[24px]">
          <input type="email"  className=" rounded-sm py-2 px-3 border-2 border-gray-200 w-full" placeholder="Email address"/>
          <button className="uppercase bg-[#2DA5F3] self-start h-[48px] mt-5 rounded-sm w-[159px] text-white">
            Apply coupon
          </button>
          </div>


        </div>
      </div>
    </div>
  );
};

export default ShoppingCard;
