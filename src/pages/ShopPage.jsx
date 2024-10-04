import React from 'react'
import HomePageSider from '../components/HomePageSider'

const ShopPage = () => {
  return (
    <div className='max-w-[1320px] gap-3 h-[2320px] m-auto py-10 '>
      <div className='w-full h-full  flex gap-3 '>
        <div className='h-full basis-1/4 '>
          <HomePageSider/>
        </div>
        <div className='h-full basis-3/4 '></div>
      </div>
    </div>
  )
}

export default ShopPage
