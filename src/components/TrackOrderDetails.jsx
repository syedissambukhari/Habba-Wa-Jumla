import React from 'react';
import { BsCheckCircle, BsBox, BsTruck  } from 'react-icons/bs';
 import { PiHandshake } from 'react-icons/pi';
const OrderTracking = () => {
  return (
    <div className="
           w-[984px]
             h=[796px]
          gap-0
          rounded
         border-[1px]
            mx-auto 

    ">
      {/* Order Info */}

      <div className='
      w-full
h-[332px]
p-6
gap-6
border-b-[1px]

      '>
     <div className="  flex justify-between items-center 
     w-[936px] h-[104px] px-[24px] gap-0 rounded-l-[4px] border-t border-l border-r border-b bg-[#FDFAE7] border-[#F7E99E]
     ">
      
         <div>
          <h1 className="font-public-sans text-[20px] font-bold leading-[28px] text-gray-900">#96459761</h1>
          <p className="text-sm text-gray-600">4 Products • Order Placed on 17 Jan, 2021 at 7:32 PM</p>
         </div>
         <h2 className="text-3xl font-bold text-blue-600">$1199.00</h2>
        </div>
            
             {/* Expected Arrival */}
        <p className="mt-4  text-sm text-gray-500">Order expected arrival <span className="font-semibold">23 Jan, 2021</span></p>
        {/* Progress Bar */}
       <div className="bg-gray-50 p-6 rounded-lg shadow-md">
        <div className="flex items-center justify-between">
          <div className="flex items-center">
            <BsCheckCircle className="text-green-600 text-3xl" />
            <span className="ml-2">Order Placed</span>
          </div>
          <div className="w-full bg-gray-300 h-1 mx-2">
            <div className="bg-green-600 h-full" style={{ width: '33%' }}></div>
          </div>
          <div className="flex items-center">
            <BsBox className="text-green-600 text-3xl" />
            <span className="ml-2">Packaging</span>
          </div>
          <div className="w-full bg-gray-300 h-1 mx-2">
            <div className="bg-gray-300 h-full"></div>
          </div>
          <div className="flex items-center">
            <BsTruck className="text-gray-300 text-3xl" />
            <span className="ml-2">On The Road</span>
          </div>
          <div className="w-full bg-gray-300 h-1 mx-2">
            <div className="bg-gray-300 h-full"></div>
          </div>
          <div className="flex items-center">
            <PiHandshake className="text-gray-300 text-3xl" />
            <span className="ml-2">Delivered</span>
          </div>
        </div>
     
       
      </div>
      </div>

      {/* Order Activity */}
      <div className="mt-6">
        <h3 className="font-bold mb-4 text-lg">Order Activity</h3>
        <div className="space-y-4">
          {/* Delivered */}
          <div className="flex items-start space-x-3">
            <BsCheckCircle className="text-green-600 text-2xl mt-1" />
            <div>
              <p className="font-semibold">Your order has been delivered. Thank you for shopping at Clicon!</p>
              <p className="text-sm text-gray-500">23 Jan, 2021 at 7:32 PM</p>
            </div>
          </div>

          {/* Picked for Delivery */}
          <div className="flex items-start space-x-3">
            <BsTruck className="text-blue-600 text-2xl mt-1" />
            <div>
              <p className="font-semibold">Our delivery man (John Wick) has picked-up your order for delivery.</p>
              <p className="text-sm text-gray-500">23 Jan, 2021 at 2:00 PM</p>
            </div>
          </div>

          {/* Last Mile Hub */}
          <div className="flex items-start space-x-3">
            <BsTruck className="text-blue-600 text-2xl mt-1" />
            <div>
              <p className="font-semibold">Your order has reached at last mile hub.</p>
              <p className="text-sm text-gray-500">22 Jan, 2021 at 8:00 AM</p>
            </div>
          </div>

          {/* On the way */}
          <div className="flex items-start space-x-3">
            <BsTruck className="text-blue-600 text-2xl mt-1" />
            <div>
              <p className="font-semibold">Your order on the way to (last mile) hub.</p>
              <p className="text-sm text-gray-500">21 Jan, 2021 at 5:32 AM</p>
            </div>
          </div>

          {/* Successfully Verified */}
          <div className="flex items-start space-x-3">
            <BsCheckCircle className="text-green-600 text-2xl mt-1" />
            <div>
              <p className="font-semibold">Your order is successfully verified.</p>
              <p className="text-sm text-gray-500">20 Jan, 2021 at 7:32 PM</p>
            </div>
          </div>

          {/* Order Confirmed */}
          <div className="flex items-start space-x-3">
            <BsCheckCircle className="text-green-600 text-2xl mt-1" />
            <div>
              <p className="font-semibold">Your order has been confirmed.</p>
              <p className="text-sm text-gray-500">19 Jan, 2021 at 2:61 PM</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OrderTracking;
