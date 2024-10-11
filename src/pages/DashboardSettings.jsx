import React from 'react'

import DashboardSider from '../homecomponents/DashboardSider'
import BrowsingHistory from './BrowsingHistory'
import AccountSettings from '../homecomponents/AccountSettings'

const DashboardSettings = () => {
  return (
    <div className='max-w-[1320px] gap-2 h-[2000px] m-auto py-10 '>
      <div className='w-full h-full  flex gap-5 '>
        <div className='h-full basis-1/4 '>
        <DashboardSider active={"Settings"}/>
        </div>
        <div className='h-full basis-3/4 '>
        <AccountSettings/>
        </div>
      </div>
    </div>
  )
}

export default DashboardSettings
