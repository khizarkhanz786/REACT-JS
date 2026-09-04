import React from 'react'
import { Link, NavLink , Outlet} from 'react-router-dom';
import Sidebar from './Sidebar';
import MainContent from './MainContent';

const Dashboard = () => {
  return (
   <>
         {/* main div */}
   <div className=" w-full flex gap-4">
     
     
     {/* sidebar */}
     <Sidebar />

        {/* card widget */}
        <div className="w-full flex flex-col gap-4">
        <div className="mt-4 w-full flex flex-wrap gap-7 items-baseline justify-center">
       <MainContent />
      
      </div>

      {/* main content */}
      <div className="">
        <Outlet />
      </div>
 </div>
    </div>
   </>
  )
}

export default Dashboard