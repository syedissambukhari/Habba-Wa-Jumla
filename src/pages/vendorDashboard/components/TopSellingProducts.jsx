import React from 'react'
import { GoArrowRight } from 'react-icons/go';
const TopSellingProducts = () => {
    const products = [
        {
          id: 1,
          name: 'Healthcare Erbology',
          category: 'in Accessories',
          sales: '13,153',
          imageUrl: '/image1.svg', // Replace with actual image URLs
          className:'w-[65px] h-[80px]'
        },
        {
          id: 2,
          name: 'Makeup Lancome Rouge',
          category: 'in Accessories',
          sales: '10,300',
          imageUrl: '/image2.svg',
        },
        {
          id: 3,
          name: 'Lounge Puff Fabric Slipper',
          category: 'in Accessories',
          sales: '5,300',
          imageUrl: '/image3.svg',
        },
        {
          id: 4,
          name: 'Skincare Necessaire',
          category: 'in Accessories',
          sales: '1,203',
          imageUrl: '/image4.svg',
        },
        {
          id: 5,
          name: 'Skincare Soja CO',
          category: 'in Accessories',
          sales: '254',
          imageUrl: '/image5.svg',
          className:'w-[72px] h-[80px]'
        },
      ];
  return (
    <div className=' w-full h-[686px] mt-4 ml-8 rounded-[20px] shadow-[0_5px_25px_0_rgba(11,93,81,0.5)] mr-8'>
        <div className='flex justify-between items-center mb-4 pt-8 '>
        <h1 className='font-plusjakartasans font-bold text-[16.7px] leading-5 text-[#111927] pl-6 '>
        Top Selling Products
        </h1>
        <button className="text-[#6C737F] pr-6">•••</button>
        </div>
        {/* Product List */}
      <ul className="">
        {products.map((product, index) => (
          <li key={product.id} className="flex items-center justify-between">
            {/* Product Image */}
            <div className="flex items-center justify-center space-x-3 w-[210px] h-[110px] border-b-[0.8px] border-b-[#F2F4F7]">
              <img
                src={product.imageUrl}
                alt={product.name}
                className={`${product.className} ml-4 rounded-lg`}
               
              />
              <div className='ml-2 '>
                <h3 className="font-inter font-[500] text-[#111927] text-[14px] ">
                  {product.name}
                </h3>
                <p className="text-[#6C737F] text-[14px] font-inter font-normal">{product.category}</p>
              </div>
            </div>

            {/* Sales Info */}
            <div className=" w-[81px] h-[110px]  border-b-[0.8px] border-b-[#F2F4F7] pt-8 pl-3">
              <h6 className="text-[#0B5D51] font-[500] text-[14px] font-inter">{product.sales}</h6>
              <p className="text-[#6C737F] text-[14px] font-inter font-normal">in sales</p>
            </div>

            {/* Rank */}
            <div className="  h-[110px] flex items-center  w-[66px] justify-center  ">
                <div className='w-[31.55px]
                  h-[29.98px]
        gap-0px
             rounded-[12px]
       bg-[#E5E7EB] flex
         items-center justify-center font-inter text-[14px] text-[#111927] font-[500]
'>
              #{index + 1}
              </div>
            </div>
          </li>
        ))}
        
      </ul>

     {/* Footer */}
     <div className="relative mt-2">
        {/* Floating Badge */}
        <div className="absolute right-5 -top-12 bg-[#0B5D51] text-white rounded-[22px] w-11 h-11 flex items-center justify-center font-bold text-sm">
          <img src="/setting.svg" alt="badge" />
        </div>

        {/* See All Button */}
        <div className="flex justify-end pt-4 items-end pr-6">
          <button className="flex items-center gap-2">
            <p className="font-inter font-bold text-[13px] text-[#111927]">
              See All
            </p>
            <GoArrowRight className="w-[18px] h-[18px] text-black" />
          </button>
        </div>
      </div>
        
    </div>
  )
}

export default TopSellingProducts