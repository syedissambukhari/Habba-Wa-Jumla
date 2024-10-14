import React from 'react'
import { div } from 'three/webgpu'

export const Stats = () => {
  return (
    <div className='w-[778px] h-[229px] mt-4 ml-8 rounded-[20px]  shadow-[0_5px_25px_0_rgba(11,93,81,0.5)]'>
        <h1 className='font-plusjakartasans font-bold text-[16.7] leading-5 text-[#111927] pt-8 pl-6'>Today's Stats</h1>
      <div className='flex '>
         <div className='w-[227px] h-[113px] mt-[32px] ml-6 rounded-[20px] bg-[#FEF3F2]'>
          <div className='pt-8 pl-6 flex gap-4'>
           <img src="/glasschart.svg" alt="chart"/>
           <div className='flex-col'> <p className='font-inter font-normal text-[14px] text-[#6C737F]'>Sales</p>
           <h5 className='font-plusjakartasans font-bold text-[23.3px]'>$152k</h5></div>
   
           </div>
           
         </div>
        
          {/* second */}
         
         <div className='w-[227px] h-[113px] mt-[32px] ml-6 rounded-[20px] bg-[#FEF3F2]'>
          <div className='pt-8 pl-6 flex gap-4'>
           <img src="/glassdiscount.svg" alt="chart"/>
           <div className='flex-col'> <p className='font-inter font-normal text-[14px] text-[#6C737F]'>Cost</p>
           <h5 className='font-plusjakartasans font-bold text-[23.3px]'>$99.7k</h5></div>
   
           </div>
           
         </div>
         {/* third */}

         <div className='w-[227px] h-[113px] mt-[32px] ml-6 rounded-[20px] bg-[#F0FDF9]'>
          <div className='pt-8 pl-6 flex gap-4'>
           <img src="/glasstick.svg" alt="chart"/>
           <div className='flex-col'> <p className='font-inter font-normal text-[14px] text-[#6C737F]'>Profit</p>
           <h5 className='font-plusjakartasans font-bold text-[23.3px]'>$32.1k</h5></div>
   
           </div>
           
         </div>
        </div>
        
    </div>
  )
}
