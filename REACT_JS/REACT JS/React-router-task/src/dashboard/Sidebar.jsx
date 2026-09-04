import React from 'react'
import { Link, NavLink } from 'react-router-dom';

const Sidebar = () => {
  return (
    <div className="w-[18%] min-h-screen bg-slate-900 border-r border-slate-800">
      <ul className="flex flex-col gap-2 p-4 text-zinc-400 text-base font-medium">
        <Link 
          to="profile" 
          className="p-2.5 rounded-lg hover:bg-slate-800 hover:text-white transition-all duration-200"
        >
          <li>Profile</li>
        </Link>
        <Link 
          to="course-detailing" 
          className="p-2.5 rounded-lg hover:bg-slate-800 hover:text-white transition-all duration-200"
        >
          <li>Course Detailing</li>
        </Link>
        <Link 
          to="jobs" 
          className="p-2.5 rounded-lg hover:bg-slate-800 hover:text-white transition-all duration-200"
        >
          <li>Jobs</li>
        </Link>
        <Link 
          to="users" 
          className="p-2.5 rounded-lg hover:bg-slate-800 hover:text-white transition-all duration-200"
        >
          <li>Users</li>
        </Link>
      </ul>
    </div>
  )
}

export default Sidebar