import React from 'react'

// export const AccountInfo = () => {
//   return (
//     <div>AccountInfo</div>
import { MdOutlineRocket } from "react-icons/md";
import { FaReceipt } from "react-icons/fa6";
import { LuPackage } from "react-icons/lu";

export const AccountInfo = () => {
  return (
    <div className=" flex w-full  bg-white  gap-6  ">
    
<div  className=' w-[312px] h-[312px]  bg-white border border-[#E4E7E9]'>
<h2 className="text-lg font-semibold mb-4 border-b-2 p-4 border-[#E4E7E9] w-full">ACCOUNT INFO</h2>
<div className="flex items-center mb-4 p-4 space-x-1">
        <img
          className="w-16 h-16 rounded-full mr-2"
          src="https://randomuser.me/api/portraits/men/75.jpg"
          alt="Profile" 
        />
         <h3 className=" font-semibold">Kevin Gilbert</h3>
         <p className="text-sm text-gray-500">Dhaka -1207,Bangladesh</p>
        </div>
        <div className="text-sm mb-2 px-4 ">
        <p><span className="font-semibold ">Email: </span>kevin.gilbert@gmail.com</p>
        <p><span className="font-semibold">Sec Email: </span>kevin12345@gmail.com</p>
        <p><span className="font-semibold">Phone: </span>+1-202-555-0118</p>
        <button className=" text-[#0B5D51] mt-2 px-4 border-[3px] border-[#0B5D51]  font-medium  text-sm  py-2.5 text-center">
        EDIT ACCOUNT
      </button>
      </div>
     
</div>

    
<div  className=' w-[312px] h-[312px]  bg-white border border-[#E4E7E9]'>
<h2 className="text-lg font-semibold mb-4 border-b-2 p-4 border-[#E4E7E9] w-full">ACCOUNT INFO</h2>
<div className="flex items-center mb-4 p-4">
        <img
          className="w-16 h-16 rounded-full mr-4"
          src="https://randomuser.me/api/portraits/men/75.jpg"
          alt="Profile" 
        />
         <h3 className="font-semibold">Kevin Gilbert</h3>
         <p className="text-sm text-gray-500">Dhaka -1207, Bangladesh</p>
        </div>
        <div className="text-sm mb-2 px-4 ">
        <p><span className="font-semibold">Email: </span>kevin.gilbert@gmail.com</p>
        <p><span className="font-semibold">Sec Email: </span>kevin12345@gmail.com</p>
        <p><span className="font-semibold">Phone: </span>+1-202-555-0118</p>

        <button className=" text-[#0B5D51] px-5 mt-2 border-[3px] border-[#0B5D51]  font-medium   py-2.5 text-center">
        EDIT ACCOUNT
      </button>
      </div>
     
</div>


<div className='w-[312px] flex flex-col h-[312px] bg-white space-y-4 py-2 '>
  <div className='flex w-[312px] h-[88px] gap-2 bg-[#EAF6FE] items-center '>
    <div className=' flex h-[56px] w-[56px] bg-white items-center justify-center ml-5  '>
      <MdOutlineRocket  className='w-[32px] text-[#2DA5F3]  h-[32px]  '/>
    </div>
    <div className='flex flex-col '>
    <span className='font-bold'>154</span>
    <span>Total Orders</span>
    </div>
  </div>
  <div className='flex w-[312px] h-[88px] gap-2 bg-[#FFF3EB] items-center'>
  <div className=' flex h-[56px] w-[56px] bg-white items-center justify-center ml-5  '>
      <FaReceipt  className='w-[32px] text-[#0B5D51]  h-[32px]  '/>
    </div>
    <div className='flex flex-col '>
    <span className='font-bold'>05</span>
    <span>Pending Orders</span>
    </div>
    
  </div>
  <div className='flex w-[312px] h-[88px] gap-2  bg-[#EAF7E9] items-center'>
  <div className=' flex h-[56px] w-[56px] bg-white items-center justify-center ml-5  '>
      <LuPackage  className='w-[32px] text-[#2DB224]  h-[32px]  '/>
    </div>
    <div className='flex flex-col '>
    <span className='font-bold'>149</span>
    <span>Completed Orders</span>
    </div>
  </div>
</div>


      </div>
  )
}
