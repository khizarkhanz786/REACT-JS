import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import axios from 'axios'

const UserDetailPage = () => {
  const { id } = useParams()
  const [currentUserData, setCurrentUserData] = useState({})
  console.log(currentUserData)
  useEffect(() => {
    const getUserData = async () => {
      try {
        const result = await axios.get(`https://dummyjson.com/users/${id}`);
        setCurrentUserData(result.data);

      } catch (error) {
        console.log(error)
      }
    };
    getUserData();
  }, []);
  return (
    <>
      <div className="min-h-[85vh] bg-slate-100 flex items-center justify-center p-4">

        {/* Elevated Card with Higher Contrast & Rich Shadows */}
        <div className="w-full max-w-xl bg-white border border-slate-200/80 rounded-3xl p-8 shadow-xl hover:shadow-2xl transition-all duration-300">

          {/* Header Profile Section */}
          <div className="flex flex-col sm:flex-row items-center gap-6 pb-6 border-b border-slate-200">
            <div className="relative">
              <img
                src={currentUserData.image}
                alt={currentUserData.firstName}
                className="w-24 h-24 rounded-full object-cover ring-4 ring-slate-100 bg-slate-50 shadow-md"
              />
              <span className="absolute bottom-1 right-1 w-4 h-4 bg-emerald-500 ring-2 ring-white rounded-full"></span>
            </div>

            <div className="text-center sm:text-left space-y-1">
              <h1 className="text-2xl font-extrabold text-slate-900 tracking-tight">
                {currentUserData.firstName} {currentUserData.lastName}
              </h1>
              <p className="text-sm font-medium text-slate-500">{currentUserData.email}</p>
              <span className="inline-block px-3 py-1 mt-2 text-xs font-bold rounded-full bg-slate-900 text-white capitalize">
                {currentUserData.gender}
              </span>
            </div>
          </div>

          {/* High-Contrast Data Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-6">

            <div className="p-4 rounded-2xl bg-slate-50 border border-slate-200/60 shadow-sm">
              <span className="text-xs font-bold uppercase tracking-wider text-slate-400">Phone</span>
              <p className="text-sm font-semibold text-slate-900 mt-1">{currentUserData.phone}</p>
            </div>

            <div className="p-4 rounded-2xl bg-slate-50 border border-slate-200/60 shadow-sm">
              <span className="text-xs font-bold uppercase tracking-wider text-slate-400">Gender</span>
              <p className="text-sm font-semibold text-slate-900 mt-1 capitalize">{currentUserData.gender}</p>
            </div>

            <div className="p-4 rounded-2xl bg-slate-50 border border-slate-200/60 shadow-sm sm:col-span-2">
              <span className="text-xs font-bold uppercase tracking-wider text-slate-400">MAC Address</span>
              <p className="text-sm font-mono font-medium text-slate-800 mt-1">{currentUserData.macAddress}</p>
            </div>

          </div>

        </div>
      </div>
    </>
  )
}

export default UserDetailPage