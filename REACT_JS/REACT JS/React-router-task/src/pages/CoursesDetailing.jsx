import React from 'react'

const CoursesDetailing = () => {
  const modules = [
    { id: 1, title: 'HTML5 & CSS3 Fundamentals', status: 'Completed', duration: '2 Weeks' },
    { id: 2, title: 'JavaScript ES6+ & DOM Manipulation', status: 'Completed', duration: '4 Weeks' },
    { id: 3, title: 'React.js State Management & Hooks', status: 'In Progress', duration: '3 Weeks' },
    { id: 4, title: 'Backend Development with Node.js', status: 'Upcoming', duration: '6 Months' },
  ];

  return (
    <div className="max-w-5xl mx-auto p-6 space-y-6">
      {/* Header Section */}
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 bg-white p-6 rounded-2xl border border-slate-200 shadow-sm">
        <div>
          <span className="text-xs font-semibold uppercase tracking-wider text-indigo-600 bg-indigo-50 px-3 py-1 rounded-full border border-indigo-100">
            Enrolled Course
          </span>
          <h1 className="text-2xl font-bold text-slate-900 mt-2">Modern Web Development</h1>
          <p className="text-slate-500 text-sm mt-1">Master full-stack frontend development with hands-on projects.</p>
        </div>
        
        {/* Progress Bar */}
        <div className="w-full md:w-64 bg-slate-50 p-4 rounded-xl border border-slate-100">
          <div className="flex justify-between text-xs font-semibold text-slate-700 mb-1">
            <span>Overall Progress</span>
            <span>65%</span>
          </div>
          <div className="w-full bg-slate-200 h-2.5 rounded-full overflow-hidden">
            <div className="bg-indigo-600 h-full rounded-full w-[65%] transition-all duration-300"></div>
          </div>
        </div>
      </div>

      {/* Main Grid Content */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        
        {/* Course Modules List */}
        <div className="lg:col-span-2 bg-white p-6 rounded-2xl border border-slate-200 shadow-sm space-y-4">
          <h2 className="text-lg font-bold text-slate-800">Course Syllabus & Modules</h2>
          
          <div className="space-y-3">
            {modules.map((mod) => (
              <div key={mod.id} className="flex items-center justify-between p-4 bg-slate-50 rounded-xl border border-slate-100 hover:border-slate-300 transition-colors">
                <div>
                  <h3 className="text-sm font-semibold text-slate-800">{mod.title}</h3>
                  <p className="text-xs text-slate-400 mt-0.5">Duration: {mod.duration}</p>
                </div>
                <span className={`text-xs font-medium px-2.5 py-1 rounded-md ${
                  mod.status === 'Completed' ? 'bg-emerald-100 text-emerald-700' :
                  mod.status === 'In Progress' ? 'bg-amber-100 text-amber-700' :
                  'bg-slate-200 text-slate-600'
                }`}>
                  {mod.status}
                </span>
              </div>
            ))}
          </div>
        </div>

        {/* Course Info Cards */}
        <div className="space-y-6">
          {/* Quick Stats */}
          <div className="bg-slate-900 text-white p-6 rounded-2xl shadow-lg space-y-4">
            <h3 className="text-base font-semibold border-b border-slate-800 pb-2">Course Metrics</h3>
            <div className="space-y-3 text-sm">
              <div className="flex justify-between text-slate-300">
                <span>Total Modules:</span>
                <span className="font-semibold text-white">12 Sections</span>
              </div>
              <div className="flex justify-between text-slate-300">
                <span>Assignments:</span>
                <span className="font-semibold text-white">8/10 Submitted</span>
              </div>
              <div className="flex justify-between text-slate-300">
                <span>Format:</span>
                <span className="font-semibold text-white">Hybrid / Practice Based</span>
              </div>
            </div>
          </div>
        </div>

      </div>
    </div>
  )
}

export default CoursesDetailing