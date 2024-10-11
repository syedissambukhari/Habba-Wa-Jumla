<<<<<<< Updated upstream
import React from "react";
import Dashboard from "./Dashboard";
import DashboardSider from "../../homecomponents/DashboardSider";
import { Outlet } from "react-router-dom";
=======
import React from 'react'
import Dashboard from './Dashboard'
import DashboardSider from '../../homecomponents/DashboardSider'
>>>>>>> Stashed changes

export const UserDashboard = () => {
  return (
    <div className="flex gap-5">
<<<<<<< Updated upstream
      <div className="max-w-[1320px] gap-2 h-[2320px] m-auto py-10 ">
        <div className="w-full h-full  flex gap-5 ">
          <div className="h-full basis-1/4 ">
            <DashboardSider active={"Dashboard"} />
          </div>
          <div className="h-full basis-3/4 ">
            <Dashboard />
          </div>
=======
<div className='max-w-[1320px] gap-2 h-full m-auto py-10 '>
      <div className='w-full h-full  flex gap-5 '>
        <div className='h-full basis-1/4 '>
          <DashboardSider/>
        </div>
        <div className='h-full basis-3/4 '>
        <Dashboard />
>>>>>>> Stashed changes
        </div>
      </div>
    </div>
  );
};
