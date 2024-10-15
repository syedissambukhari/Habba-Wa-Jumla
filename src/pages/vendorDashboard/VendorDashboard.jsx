import React from 'react';
import Sidebar from './components/Sidebar';
import VendorHeader from './components/VendorHeader';
import { Outlet } from 'react-router-dom';


export const VendorDashboard = () => {
  return (
    <div className="flex">
      {/* Sidebar - Fixed to the left */}
      <div className=" top-0 left-0 ">
        <Sidebar />
      </div>

      {/* Main Content */}
      <div className="flex flex-col w-full "> {/* Adjust the margin-left based on Sidebar width */}
        {/* Header - Stays on top */}
        <div className=" top-0 z-10">
          <VendorHeader />
        </div>

        {/* Main Content Area */}
       <Outlet />
       
        
        </div>
      </div>
   
  );
};
