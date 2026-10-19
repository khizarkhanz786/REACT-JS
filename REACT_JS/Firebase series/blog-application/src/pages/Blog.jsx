import { useState } from 'react'
import BlogCard from '../components/BlogCard'
import Sidebar from '../components/Sidebar'
import CreateModal from '../components/CreateModal'

const Blog = () => {
  const [isModalOpen, setIsModalOpen] = useState(false)

  return (
    <div className="min-h-screen bg-slate-100">
      {/* Sidebar ko function pass kar diya taake click par modal khul sake */}
      <Sidebar onOpenModal={() => setIsModalOpen(true)} />

      {/* Main Content */}
      <main className="ml-16 min-h-screen p-4 md:ml-64 md:p-8">
        {/* Dashboard Header */}
        <div className="mb-6 flex items-center justify-between">
          <div>
            <h1 className="text-2xl font-bold text-slate-800 md:text-3xl">
              Blog Dashboard
            </h1>
            <p className="mt-1 text-sm text-slate-500">
              Share your thoughts and explore blogs.
            </p>
          </div>
        </div>

        {/* CreateModal ko props ke zariye control kar rahe hain */}
        <CreateModal isOpen={isModalOpen} setIsOpen={setIsModalOpen} />

        {/* Blog Posts */}
        <div className="mt-6 grid grid-cols-1 gap-6 lg:grid-cols-2">
          <BlogCard />
        </div>
      </main>
    </div>
  )
}

export default Blog