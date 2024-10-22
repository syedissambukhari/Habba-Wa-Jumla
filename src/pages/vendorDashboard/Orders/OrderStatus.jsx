import React, { useState } from 'react';
import { IoMdCheckmark } from 'react-icons/io';
import { MdOutlineEdit } from 'react-icons/md';
import { PiHandshakeDuotone, PiNotebook, PiPackageDuotone, PiTruckDuotone } from 'react-icons/pi';

const steps = [
  { label: 'Order Placed', icon: PiNotebook, color: '#2DB224' },
  { label: 'Packaging', icon: PiPackageDuotone, color: '#0B5D51' },
  { label: 'On The Road', icon: PiTruckDuotone, color: '#93c6bd' },
  { label: 'Delivered', icon: PiHandshakeDuotone, color: '#93c6bd' }
];

export const OrderStatus = () => {
  const [currentStep, setCurrentStep] = useState(1); 


  const progressWidth = `${(currentStep / (steps.length - 1)) * 100}%`;


  const handleStepClick = (index) => {
    setCurrentStep(index);
  };

  return (
    <div className="bg-white p-10">
      {/* Header */}
      <div className="flex items-center justify-between mb-6">
        <div>
          <h1 className="text-xl font-bold">DEV-103</h1>
          <p className="text-gray-500">
            Placed on <span className="font-medium">31/01/2024 11:19</span>
          </p>
        </div>
        <div className="flex space-x-4">
          <button className="flex items-center space-x-1 text-gray-600">
            <span>Edit</span>
            <MdOutlineEdit className="w-4 h-4" />
          </button>
          <button className="bg-[#0B5D51] text-white py-2 px-4 rounded-md flex items-center">
            <span>Action</span>
            <svg
              className="w-4 h-4 ml-1"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 15l7-7 7 7"></path>
            </svg>
          </button>
        </div>
      </div>

      {/* Order Info Box */}
      <div className="bg-white border rounded-lg shadow-lg p-10">
        <div className="flex bg-[#FDFAE7] h-[100px] rounded-lg px-5 justify-between items-center mb-4">
          <div>
            <p className="text-sm font-bold">#96459761</p>
            <p className="text-xs text-gray-500">
              4 Products • Order Placed on 17 Jan, 2021 at 7:32 PM
            </p>
          </div>
          <p className="text-2xl font-bold text-blue-600">$1199.00</p>
        </div>

        {/* Progress Bar */}
        <div className="border-t pt-4">
          <p className="text-sm font-bold mb-2">
            Order expected arrival <span className="text-green-700">23 Jan, 2021</span>
          </p>

          {/* Dynamic Progress Circles and Line */}
          <div className="flex flex-col items-center gap-6 w-full mt-6">
            <div className="relative w-[702px] flex items-center justify-between">
              {/* Full Progress Line */}
              <div className="absolute w-full transform -translate-y-1/2 h-[8px] top-1/2 gap-0 rounded-[100px_0_0_0] bg-[#FFE7D6]">
                <div className="h-full bg-[#0B5D51] rounded-full" style={{ width: progressWidth }}></div>
              </div>

              {/* Dynamic Step Circles */}
              {steps.map((step, index) => (
                <div key={index} className="relative z-10 flex flex-col items-center cursor-pointer" onClick={() => handleStepClick(index)}>
                  {index <= currentStep ? (
                    <>
                      <IoMdCheckmark className="text-white text-[12px] absolute top-[6px]" />
                      <div className="w-6 h-6 rounded-full bg-[#0B5D51]"></div>
                    </>
                  ) : (
                    <div className="w-6 h-6 rounded-full bg-white border-2 border-[#0B5D51]"></div>
                  )}
                </div>
              ))}
            </div>

            {/* Step Labels */}
            <div className="w-[770px] h-[64px] flex items-center justify-between">
              {steps.map((step, index) => (
                <div key={index} className="flex flex-col items-center">
                  <step.icon className={`h-8 w-8 mb-3 ${index <= currentStep ? 'text-[#0B5D51]' : 'text-[#93c6bd]'}`} />
                  <span className={`text-[14px] font-sans font-[600] ${index <= currentStep ? 'text-gray-900' : 'text-gray-400'}`}>
                    {step.label}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Action Buttons */}
        <div className="flex justify-end mt-6 space-x-4">
          <button className="text-black flex gap-2 items-center">
            <span>Edit</span>
            <MdOutlineEdit />
          </button>
          <button className="bg-[#0B5D51] text-white py-2 px-4 rounded-md">
            Update Status
          </button>
        </div>
      </div>
    </div>
  );
};
