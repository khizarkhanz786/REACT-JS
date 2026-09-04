import React from 'react'

const MainContent = () => {
  return (
    <div className="w-full mb-6">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4  ">
        <div className="bg-white p-5 rounded-2xl border border-slate-200 shadow-[0_15px_40px_rgba(0,0,0,0.15)] ">
          <p className="text-xs font-semibold text-slate-500 uppercase tracking-wider">Total Applications</p>
          <h3 className="text-2xl font-bold text-slate-900 mt-2">12</h3>
        </div>

        <div className="bg-white p-5 rounded-2xl border border-slate-200 shadow-[0_15px_40px_rgba(0,0,0,0.15)]">
          <p className="text-xs font-semibold text-slate-500 uppercase tracking-wider">Course Progress</p>
          <h3 className="text-2xl font-bold text-slate-900 mt-2">65%</h3>
        </div>

        <div className="bg-white p-5 rounded-2xl border border-slate-200 shadow-[0_15px_40px_rgba(0,0,0,0.15)]">
          <p className="text-xs font-semibold text-slate-500 uppercase tracking-wider">Interviews Scheduled</p>
          <h3 className="text-2xl font-bold text-slate-900 mt-2">02</h3>
        </div>

        <div className="bg-white p-5 rounded-2xl border border-slate-200 shadow-[0_15px_40px_rgba(0,0,0,0.15)]">
          <p className="text-xs font-semibold text-slate-500 uppercase tracking-wider">Projects Built</p>
          <h3 className="text-2xl font-bold text-slate-900 mt-2">08</h3>
        </div>
      </div>
    </div>
  )
}

export default MainContent