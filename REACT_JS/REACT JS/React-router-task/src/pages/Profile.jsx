import React from 'react'

const Profile = () => {
  return (
    <div className="max-w-4xl mx-auto p-6 space-y-6">
      {/* Header Banner */}
      <div className="bg-slate-900 text-white p-8 rounded-2xl shadow-lg flex items-center justify-between">
        <div className="space-y-2">
          <h1 className="text-3xl font-bold tracking-tight">Khizar Khan</h1>
          <p className="text-slate-400 font-medium">Frontend Developer & Web Application Specialist</p>
          <p className="text-xs text-emerald-400 font-mono bg-emerald-500/10 inline-block px-2.5 py-1 rounded-full border border-emerald-500/20">
            ● Available for Projects
          </p>
        </div>
        <div className="h-20 w-20 rounded-full bg-slate-800 border-2 border-slate-700 flex items-center justify-center text-2xl font-bold text-slate-300">
          KK
        </div>
      </div>

      {/* Grid Layout for Info */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {/* Main Details */}
        <div className="md:col-span-2 bg-white p-6 rounded-2xl border border-slate-200 shadow-sm space-y-4">
          <h2 className="text-xl font-semibold text-slate-800">About Me</h2>
          <p className="text-slate-600 leading-relaxed text-sm">
            Passionate Frontend Web Developer focusing on building clean, responsive, and performance-driven web applications using modern JavaScript standards, React, and Tailwind CSS.
          </p>
          
          <div className="pt-4 border-t border-slate-100">
            <h3 className="text-sm font-semibold text-slate-700 mb-3">Core Tech Stack</h3>
            <div className="flex flex-wrap gap-2">
              {['React.js', 'JavaScript (ES6+)', 'Tailwind CSS', 'HTML5/CSS3', 'Git & GitHub', 'REST APIs'].map((skill) => (
                <span key={skill} className="bg-slate-100 text-slate-700 text-xs font-medium px-3 py-1.5 rounded-lg border border-slate-200">
                  {skill}
                </span>
              ))}
            </div>
          </div>
        </div>

        {/* Sidebar Info */}
        <div className="bg-white p-6 rounded-2xl border border-slate-200 shadow-sm space-y-4">
          <h2 className="text-xl font-semibold text-slate-800">Contact Details</h2>
          <div className="space-y-3 text-sm text-slate-600">
            <div>
              <p className="text-xs text-slate-400 font-medium">Location</p>
              <p className="font-medium text-slate-700">Karachi, Pakistan</p>
            </div>
            <div>
              <p className="text-xs text-slate-400 font-medium">Education</p>
              <p className="font-medium text-slate-700">DAE Mechanical / Modern Web Dev</p>
            </div>
            <div>
              <p className="text-xs text-slate-400 font-medium">Status</p>
              <p className="font-medium text-slate-700">Open to Full-time & Freelance</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Profile