import React from 'react'
import Sidebar from './component/Sidebar'
import Dashboard from './Dashboard'

export const UserDashboard = () => {
  return (
    <div className="flex p-10 gap-5">
<Sidebar/>
<Dashboard/>

    </div>
  )
}
