import React from 'react'
import HomePageSider from '../homecomponents/HomePageSider'
import ShopProducts from '../homecomponents/ShopProducts'
import DashboardSider from '../homecomponents/DashboardSider'
import BrowsingHistory from './BrowsingHistory'

const DashboardBrowsingHistory = () => {
  return (
    <div className='max-w-[1320px] gap-2 h-[2720px] m-auto py-10 '>
      <div className='w-full h-full  flex gap-5 '>
        <div className='h-full basis-1/4 '>
          <DashboardSider active={"History"}/>
        </div>
        <div className='h-full basis-3/4 '>
        <BrowsingHistory/>
        </div>
      </div>
    </div>
  )
}

export default DashboardBrowsingHistory
