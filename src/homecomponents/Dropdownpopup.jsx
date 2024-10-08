import React from 'react';

export const Dropdownpopup = () => {
  return (
    <div className='w-[868px] h-full flex bg-white  p-4 shadow-lg rounded-lg'>
      {/* Sidebar */}
      <div className='bg-white w-1/4 p-1'>
        <ul className=' '>
        <li className='hover:bg-gray-200 rounded-md px-4 py-2'>All</li>

          <li className='hover:bg-gray-200 rounded-md px-4 py-2'>Samsung</li>
          <li className='hover:bg-gray-200 rounded-md px-4 py-2'>Realme</li>
          <li className='hover:bg-gray-200 rounded-md px-4 py-2'>Xiaomi</li>
          <li className='hover:bg-gray-200 rounded-md px-4 py-2'>Oppo</li>
          <li className='hover:bg-gray-200 rounded-md px-4 py-2'>Vivo</li>
          <li className='hover:bg-gray-200 rounded-md px-4 py-2'>OnePlus</li>
          <li className='hover:bg-gray-200 rounded-md px-4 py-2'>Huawei</li>
          <li className='hover:bg-gray-200 rounded-md px-4 py-2'>Infinix</li>
          <li className='hover:bg-gray-200 rounded-md px-4 py-2'>Tecno</li>
        </ul>
      </div>

      {/* Featured Phones */}
<div className='w-2/4 p-4'>
  <h2 className='text-lg font-semibold mb-4'>FEATURED PHONES</h2>
  <div className='space-y-4'>
    
    {/* Samsung Galaxy S21 */}
    <div className='border rounded-md p-4 flex justify-between items-center'>
      <div className='flex items-center'>
        <img src="https://example.com/samsung-galaxy-s21.jpg" alt="Samsung Galaxy S21" className='w-12 h-12 object-cover mr-4' />
        <span>Samsung Electronics Samsung Galaxy S21 5G</span>
      </div>
      <span className='text-green-600 font-bold'>$160</span>
    </div>
    
    {/* Simple Mobile Galaxy 12 */}
    <div className='border rounded-md p-4 flex justify-between items-center'>
      <div className='flex items-center'>
        <img src="https://example.com/galaxy-12-mini.jpg" alt="Simple Mobile Galaxy 12 Mini" className='w-12 h-12 object-cover mr-4' />
        <span>Simple Mobile 5G LTE Galaxy 12 Mini 512GB Gaming Phone</span>
      </div>
      <span className='text-green-600 font-bold'>$1,500</span>
    </div>
    
    {/* Sony Camera */}
    <div className='border rounded-md p-4 flex justify-between items-center'>
      <div className='flex items-center'>
        <img src="https://example.com/sony-camera.jpg" alt="Sony DSCHX8 Camera" className='w-12 h-12 object-cover mr-4' />
        <span>Sony DSCHX8 High Zoom Point & Shoot Camera</span>
      </div>
      <span>
        <span className='line-through text-red-500'>$3200</span>{" "}
        <span className='text-green-600 font-bold'>$2,300</span>
      </span>
    </div>
    
  </div>
</div>


      {/* Discount Section */}
      <div className='w-[312px] h-[384px] bg-yellow-100 p-6 flex flex-col items-center justify-center'>
  <h3 className='text-xl font-bold mb-2'>21% Discount</h3>
  <p className='text-center mb-4'>
    Escape the noise, It’s time to hear the magic with Xiaomi Earbuds.
  </p>
  <p className='text-center text-lg font-bold mb-4'>Starting price: $99 USD</p>
  <button className='bg-green-600 text-white py-2 px-4 rounded-md hover:bg-green-700'>
    SHOP NOW
  </button>
</div>

    </div>
  );
};
