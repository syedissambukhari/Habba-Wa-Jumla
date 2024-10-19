import React from "react";
import secure from "../../assets/Secure.png";
import expand from "../../assets/Expand.png";
import done from "../../assets/Done.png";
import forward from "../../assets/Forward.png";
import product2 from "../../assets/Product2.png";
import product3 from "../../assets/Product3.png";

export const VendorCheckout = () => {
  return (
    <div className="mt-8 px-8 pb-10">
      {/*Header*/}
      <div className="flex justify-between">
        <p className="text-[#111927] font-bold text-[33px]">Checkout</p>
        <div className="flex item-center gap-3 px-12 justify-center relative mb-2 p-3 rounded-xl shadow-[0px_2px_10px_3px_#0B5D5180]">
          <div>
          <img src={done} alt="done" className="h-7"/>
          </div>
          <div>
          <p className=" text-[18px] text-green-300">Order Placed Successfully</p>
          </div>
        </div>
      </div>

      {/*Order*/}
      <div className="flex justify-between py-4">
        {/*Input Details*/}
        <div>
          <div>
            <div className="flex gap-2 py-3">
              <p className="text-[#111927] font-bold text-[16px]">1.</p>
              <p className="text-[#111927] font-bold text-[16px]">
                Billing Address
              </p>
            </div>
            <div>
              <div className="flex gap-4 py-2">
                <div>
                <input type="text" placeholder="First Name"
                 className="pr-14 px-2 py-1 border-2 rounded-lg outline-black hover:outline-1"/>
                </div>
                <div>
                <input type="text" placeholder="Last Name" 
                className="pr-14 px-2 py-1 border-2 rounded-lg outline-black hover:outline-1"/>
                </div>
              </div>
              <div className="flex gap-4 py-2">
                <div>
                <input type="text" placeholder="Street Address" 
                className="px-2 pr-14 py-1 border-2 rounded-lg outline-black hover:outline-1"/>
                </div>
                <div>
                <input type="text" placeholder="Street Line (optional)" 
                className="px-2 pr-14 py-1 border-2 rounded-lg outline-black hover:outline-1"/>
                </div>
              </div>
              <div className="flex gap-4 py-2">
                <div>
                <input type="text" placeholder="State" 
                className="px-2 pr-14 py-1 border-2 rounded-lg outline-black hover:outline-1"/>
                </div>
                <div>
                <input type="text" placeholder="Zip" 
                className="px-2 py-1 pr-14 border-2 rounded-lg outline-black hover:outline-1"/>
                </div>
              </div>
            </div>
          </div>
          <div>
            <div className="flex gap-2 pt-6">
              <p className="text-[#111927] font-bold text-[16px]">2.</p>
              <p className="text-[#111927] font-bold text-[16px]">
                Shipping Address
              </p>
            </div>
            <div className="flex gap-2 py-2">
              <input type="checkbox" id="billingCheck" />
              <label htmlFor="billingCheck">Same as billing address</label>
            </div>
          </div>
          <div>
            <div className="flex gap-2 pt-6">
              <p className="text-[#111927] font-bold text-[16px]">3.</p>
              <p className="text-[#111927] font-bold text-[16px]">
                Payment Method
              </p>
            </div>
            <div className="flex flex-col">
              <div className="flex gap-3 py-2">
                <div className="flex gap-1">
                <input type="radio" id="card" name="payment"/>
                <label htmlFor="card">Visa Credit/Debit Card</label>
                </div>
                <div className="flex gap-1">
                <input type="radio" id="paypal" name="payment"
                 className="checked:bg-green-600"/>
                <label htmlFor="card">Paypal</label>
                </div>
              </div>
              <div className="flex flex-col">
                <div className="py-2">
                <input type="text" placeholder="Name on Card" 
                className="px-2 py-1 w-full border-2 rounded-lg outline-black hover:outline-1"/>
                </div>
                <div className="py-2">
                <input type="text" placeholder="Card Number" 
                className="px-2 py-1 w-full border-2 rounded-lg outline-black hover:outline-1"/>
                </div>
              </div>
              <div className="flex gap-4 py-2">
                <div>
                <input type="date" placeholder="Expire Date" 
                className="px-2 py-1 pr-20 border-2 rounded-lg outline-black hover:outline-1"/>
                </div>
                <div>
                <input type="text" placeholder="Security Code" 
                className="px-2 py-1 pr-20 border-2 rounded-lg outline-black hover:outline-1"/>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/*Summary*/}
        <div className="flex flex-col relative mb-12 p-4 rounded-lg shadow-[0px_2px_10px_3px_#0B5D5180]">
            <p className="pb-3 text-[16px] font-bold">Order Summary</p>
            <div className="flex py-2 justify-between">
                <img src={product2} alt="product"  className="h-100 w-100"/>
                <div className="px-3 text-[14px]">
                    <p className="font-bold">Makeup Lancome Rouge</p>
                    <p>$95.00</p>
                </div>
                <div className="flex items-center text-[12px] px-1 h-9 border-2 rounded-lg ">
                    <p>1</p>
                    <img src={expand} alt="expand" />
                </div>
            </div>
            <div className="flex py-3 justify-between">
                <img src={product3} alt="product" />
                <div className="px-3 text-[14px]">
                    <p className="font-bold">Healthcare Erbology</p>
                    <p>$25.00</p>
                </div>
                <div className="flex items-center text-[12px] px-1 h-9 border-2 rounded-lg ">
                    <p>1</p>
                    <img src={expand} alt="expand" />
                </div>
            </div>
            <input className="px-2 py-0.5 border-2 rounded-lg outline-black hover:outline-1 "
             type="text" placeholder="Discount Code"/>
            <button className="py-2 text-right text-[15px] text-teal-900 font-bold">Apply Coupon</button>
            <div className="flex py-2 justify-between text-[14px] font-bold">
                <p>Subtotal</p>
                <p>$120.00</p>
            </div>
            <div className="flex py-1 justify-between text-[14px] font-bold">
                <p>Shipping Tax</p>
                <p>$12.00</p>
            </div>
            <div className="flex py-4 border-t-2 justify-between text-[14px] font-bold">
                <p>Total</p>
                <p>$132.00</p>
            </div>
        </div>
      </div>

      {/*Completing order*/}
      <div>
        <div className="flex py-1">
          <img src={secure} alt="secure" />
          <p className="font-bold">Secure Checkout</p>
        </div>
        <div className="py-1">
          <p>
            Your purchases are secured by an industry best encryption service –
            Braintree
          </p>
        </div>
        <button className="flex gap-1 bg-green-800 px-2 py-2 border-1 rounded-xl ">
          <p className=" font-bold text-white ">Complete order</p>
          <img src={forward} alt="forward" />
        </button>
      </div>
    </div>
  );
};
