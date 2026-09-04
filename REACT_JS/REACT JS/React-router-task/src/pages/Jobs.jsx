import React, { useState } from 'react'

const Jobs = () => {
  const [searchTerm, setSearchTerm] = useState('')

  const jobListings = [
    {
      id: 1,
      role: 'Frontend React Developer',
      company: 'TechSolutions Inc.',
      location: 'Karachi, Pakistan (Hybrid)',
      type: 'Full-time',
      salary: 'PKR 80k - 120k',
      tags: ['React', 'Tailwind CSS', 'JavaScript'],
      posted: '2 days ago',
    },
    {
      id: 2,
      role: 'Junior Web Developer',
      company: 'DevStudio',
      location: 'Remote',
      type: 'Full-time',
      salary: 'PKR 60k - 90k',
      tags: ['HTML5', 'CSS3', 'Bootstrap', 'Git'],
      posted: '1 day ago',
    },
    {
      id: 3,
      role: 'UI/UX & Frontend Intern',
      company: 'Creative Labs',
      location: 'Karachi, Pakistan',
      type: 'Internship',
      salary: 'PKR 30k - 40k',
      tags: ['React', 'UI Design', 'Figma'],
      posted: '3 days ago',
    },
  ]

  const filteredJobs = jobListings.filter((job) =>
    job.role.toLowerCase().includes(searchTerm.toLowerCase()) ||
    job.tags.some((tag) => tag.toLowerCase().includes(searchTerm.toLowerCase()))
  )

  return (
    <div className="max-w-5xl mx-auto p-6 space-y-6">
      {/* Header & Search Bar */}
      <div className="bg-slate-900 text-white p-8 rounded-2xl shadow-lg space-y-4">
        <div>
          <h1 className="text-2xl font-bold tracking-tight">Explore Web Dev Opportunities</h1>
          <p className="text-slate-400 text-sm mt-1">Find relevant frontend and web engineering roles matching your tech stack.</p>
        </div>

        {/* Search Input */}
        <div className="pt-2">
          <input
            type="text"
            placeholder="Search by role or tech stack (e.g. React, Tailwind)..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="w-full px-4 py-3 bg-slate-800 text-white placeholder-slate-400 rounded-xl border border-slate-700 focus:outline-none focus:border-indigo-500 text-sm transition-colors"
          />
        </div>
      </div>

      {/* Job Cards List */}
      <div className="space-y-4">
        <h2 className="text-lg font-semibold text-slate-800">Available Openings ({filteredJobs.length})</h2>

        {filteredJobs.length === 0 ? (
          <div className="bg-white p-8 text-center rounded-2xl border border-slate-200 text-slate-500">
            No matching jobs found. Try searching for different keywords.
          </div>
        ) : (
          filteredJobs.map((job) => (
            <div
              key={job.id}
              className="bg-white p-6 rounded-2xl border border-slate-200 shadow-sm hover:border-slate-300 transition-all flex flex-col md:flex-row md:items-center justify-between gap-4"
            >
              <div className="space-y-2">
                <div className="flex items-center gap-2">
                  <h3 className="text-base font-bold text-slate-900">{job.role}</h3>
                  <span className="text-xs font-semibold bg-emerald-50 text-emerald-700 border border-emerald-200 px-2.5 py-0.5 rounded-full">
                    {job.type}
                  </span>
                </div>
                <p className="text-sm font-medium text-slate-600">
                  {job.company} • <span className="text-slate-400">{job.location}</span>
                </p>

                {/* Tech Stack Tags */}
                <div className="flex flex-wrap gap-2 pt-1">
                  {job.tags.map((tag) => (
                    <span
                      key={tag}
                      className="bg-slate-100 text-slate-600 text-xs font-medium px-2.5 py-1 rounded-md border border-slate-200"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>

              {/* Action & Details */}
              <div className="flex flex-col md:items-end justify-between gap-3 border-t md:border-t-0 pt-3 md:pt-0 border-slate-100">
                <div className="text-left md:text-right">
                  <p className="text-sm font-bold text-slate-800">{job.salary}</p>
                  <p className="text-xs text-slate-400 mt-0.5">Posted {job.posted}</p>
                </div>
                <button className="bg-slate-900 hover:bg-slate-800 text-white text-xs font-semibold px-4 py-2.5 rounded-xl transition-colors">
                  Apply Now
                </button>
              </div>
            </div>
          ))
        )}
      </div>
    </div>
  )
}

export default Jobs