import React from 'react'
import { Stats } from './components/Stats'
import SalesRevenue from './components/SalesRevenue'
import TopSellingProducts from './components/TopSellingProducts'
import SalesByCountry from './components/SalesByCountry'
import CostBreakdown from './components/CostBreakdown'
const StoreAnalytics = () => {
  return (
    <div>
         <div>
        <div className="p-8 mt-16 w-full h-[72px]   justify-between ml-auto flex items-center space-x-4 ">
          <h1 className="text-[33px] font-bold font-plusjakartasans">Store Analytics</h1>
          {/* Other components can be added here */}

          <button className='w-[132px] h-[40px] rounded-[12px] bg-[#0B5D51] shadow-[0px_1px_5px_0px] shadow-[#00000014] flex items-center justify-center gap-2'>
            <img src="/reload.svg" alt="reload" />
            <p className='font-inter font-semibold text-[14px] text-white leading-6'>Sync Data </p>
          </button>
        </div>
        <div className='flex  justify-center '>
           <div>
            <Stats/>
            <SalesRevenue/>
            <SalesByCountry/>
           </div>
          <div className=''>
            <TopSellingProducts/>
            <CostBreakdown/>
          </div>
        </div>
    </div>
    </div>
  )
}

export default StoreAnalytics