import React from 'react'

const User = () => {
  const usersList = [
    { id: 1, name: 'Khizar Khan', role: 'Frontend Developer', status: 'Active', email: 'khizar@example.com' },
    { id: 2, name: 'Ali Raza', role: 'UI/UX Designer', status: 'Active', email: 'ali@example.com' },
    { id: 3, name: 'Sara Ahmed', role: 'React Student', status: 'Pending', email: 'sara@example.com' },
  ]

  return (
    <div className="max-w-5xl mx-auto p-6 space-y-6">
      
      {/* Header Panel */}
      <div className="bg-slate-900 text-white p-6 rounded-2xl shadow-lg border border-slate-800 flex justify-between items-center">
        <div>
          <h1 className="text-2xl font-bold tracking-tight">User Directory</h1>
          <p className="text-slate-400 text-sm mt-1">Manage team members and enrolled students.</p>
        </div>
        <button className="bg-white text-slate-900 hover:bg-slate-100 text-xs font-semibold px-4 py-2.5 rounded-xl transition-colors">
          + Add User
        </button>
      </div>

      {/* Users Table */}
      <div className="bg-white rounded-2xl border border-slate-200 shadow-sm overflow-hidden">
        <table className="w-full text-left border-collapse">
          <thead>
            <tr className="bg-slate-50 border-b border-slate-200 text-xs font-semibold text-slate-500 uppercase tracking-wider">
              <th className="p-4">Name</th>
              <th className="p-4">Role</th>
              <th className="p-4">Status</th>
              <th className="p-4 text-right">Action</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-slate-100 text-sm">
            {usersList.map((user) => (
              <tr key={user.id} className="hover:bg-slate-50/80 transition-colors">
                <td className="p-4 font-medium text-slate-900">
                  <div>{user.name}</div>
                  <div className="text-xs text-slate-400 font-normal">{user.email}</div>
                </td>
                <td className="p-4 text-slate-600">{user.role}</td>
                <td className="p-4">
                  <span className={`text-xs font-semibold px-2.5 py-1 rounded-full ${
                    user.status === 'Active' 
                      ? 'bg-emerald-50 text-emerald-700 border border-emerald-200' 
                      : 'bg-amber-50 text-amber-700 border border-amber-200'
                  }`}>
                    {user.status}
                  </span>
                </td>
                <td className="p-4 text-right">
                  <button className="text-xs text-slate-500 hover:text-slate-900 font-medium">Edit</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

    </div>
  )
}

export default User