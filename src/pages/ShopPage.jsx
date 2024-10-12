import React from 'react'
import HomePageSider from '../homecomponents/HomePageSider'
import ShopProducts from '../homecomponents/ShopProducts'

const ShopPage = () => {
  return (
    <div className='max-w-[1320px] gap-2 h-[2320px] m-auto py-10 '>
      <div className='w-full h-full  flex gap-5 '>
        <div className='h-full basis-1/4 '>
          <HomePageSider/>
        </div>
        <div className='h-full basis-3/4 '>
        <ShopProducts/>
        </div>
      </div>
    </div>
  )
}

export default ShopPage
