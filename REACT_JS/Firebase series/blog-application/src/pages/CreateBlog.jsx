import CreateModal from "../components/CreateModal"

const CreateBlog = () => {
  return (
    <div className="min-h-screen bg-slate-100 p-6">
      <div className="mx-auto max-w-2xl">
        <h1 className="mb-4 text-2xl font-bold text-slate-800">
          Create New Blog Page
        </h1>
        
        {/* Yahan aap CreateModal ya direct form rakh sakte hain */}
        <CreateModal />
      </div>
    </div>
  )
}

export default CreateBlog