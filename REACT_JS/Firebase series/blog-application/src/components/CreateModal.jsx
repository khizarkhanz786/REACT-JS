import { useState } from 'react'
import { uploadImageToCloudinary } from '../helper/helper'
import { addDoc, collection, serverTimestamp } from 'firebase/firestore'
import { db, auth } from '../Firebase/Config'

const CreateModal = ({ isOpen, setIsOpen }) => {
  const [blogForm, setBlogForm] = useState({
    title: "",
    description: "",
    image: ""
  })

  const [loading, setLoading] = useState(false)

  const handleInputChange = (e) => {
    const { name, value, files } = e.target

    setBlogForm((prev) => ({
      ...prev,
      [name]: files ? files[0] : value,
    }))
  }

  const overlayStyle = {
    position: "fixed",
    inset: 0,
    backgroundColor: "rgba(15, 23, 42, 0.55)",
    backdropFilter: "blur(5px)",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    padding: "16px",
    zIndex: 1000,
  }

  const modalStyle = {
    backgroundColor: '#fff',
    textAlign: 'center',
    padding: '20px',
    borderRadius: '8px',
    width: '400px',
    boxShadow: '0px 0px 10px rgba(0,0,0,0.2)'
  }

  const saveDataIntoDB = async (url, data) => {
    try {
      const userId = auth.currentUser?.uid

      if (!userId) {
        throw new Error("Please log in before posting a blog.")
      }

      await addDoc(collection(db, "blogs"), {
        blogImgUrl: url,
        title: data.title,
        description: data.description,
        authorId: userId,
        createdAt: serverTimestamp(),
      })

      console.log("Blog created!")

    } catch (error) {
      console.log("Error saving blog:", error)
      throw error
    }
  }

  const PostBlogHandler = async () => {
    try {
      if (
        !blogForm.title.trim() ||
        !blogForm.description.trim() ||
        !blogForm.image
      ) {
        alert("Please fill all fields and select an image.")
        return
      }

      if (!auth.currentUser) {
        alert("Please log in before posting a blog.")
        return
      }

      setLoading(true)

      const imgUrl = await uploadImageToCloudinary(blogForm.image)

      if (!imgUrl) {
        throw new Error("Image upload failed.")
      }

      await saveDataIntoDB(imgUrl, blogForm)

      setBlogForm({
        title: "",
        description: "",
        image: ""
      })

      setIsOpen(false)

    } catch (error) {
      console.log("Error posting blog:", error)
      alert(error.message || "Failed to post blog.")
    } finally {
      setLoading(false)
    }
  }

  if (!isOpen) return null

  return (
    <div style={overlayStyle}>
      <div
        style={modalStyle}
        className="relative w-full max-w-md rounded-2xl border border-slate-200 bg-white p-5 shadow-2xl"
      >
        {/* Header */}
        <div className="relative mb-4">
          <div className="text-center">
            <h2 className="text-xl font-bold text-slate-800">
              Create New Blog
            </h2>

            <p className="mt-0.5 text-xs text-slate-500">
              Share your thoughts with the Blog Hub community.
            </p>
          </div>

          <button
            type="button"
            disabled={loading}
            onClick={() => setIsOpen(false)}
            className="absolute right-0 top-0 flex h-8 w-8 items-center justify-center rounded-full bg-red-500 text-lg font-semibold text-white transition hover:bg-red-600"
          >
            ×
          </button>
        </div>

        <form
          onSubmit={(e) => {
            e.preventDefault()
            PostBlogHandler()
          }}
          className="space-y-3"
        >
          {/* Title */}
          <div className="text-left">
            <label className="mb-1.5 block text-xs font-semibold text-slate-700">
              Blog Title
            </label>

            <input
              type="text"
              name="title"
              onChange={handleInputChange}
              value={blogForm.title}
              placeholder="Enter your blog title..."
              required
              className="w-full rounded-lg border border-slate-200 bg-slate-50 px-3 py-2 text-sm text-slate-800 outline-none transition placeholder:text-slate-400 focus:border-indigo-500 focus:bg-white focus:ring-2 focus:ring-indigo-100"
            />
          </div>

          {/* Description */}
          <div className="text-left">
            <label className="mb-1.5 block text-xs font-semibold text-slate-700">
              Description
            </label>

            <textarea
              rows="3"
              name="description"
              onChange={handleInputChange}
              value={blogForm.description}
              placeholder="Write something interesting..."
              required
              className="w-full resize-none rounded-lg border border-slate-200 bg-slate-50 px-3 py-2 text-sm text-slate-800 outline-none transition placeholder:text-slate-400 focus:border-indigo-500 focus:bg-white focus:ring-2 focus:ring-indigo-100"
            />
          </div>

          {/* Image */}
          <div className="text-left">
            <label className="mb-1.5 block text-xs font-semibold text-slate-700">
              Cover Image
            </label>

            <label className="flex cursor-pointer items-center gap-3 rounded-lg border-2 border-dashed border-slate-200 bg-slate-50 px-3 py-3 transition hover:border-indigo-400 hover:bg-indigo-50">
              <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-indigo-100 text-base">
                📷
              </div>

              <div>
                <span className="block text-sm font-medium text-slate-700">
                  Choose an image
                </span>

                <span className="text-[11px] text-slate-400">
                  PNG, JPG or JPEG
                </span>
              </div>

              <input
                type="file"
                name="image"
                accept="image/*"
                onChange={handleInputChange}
                required
                className="hidden"
              />
            </label>

            {blogForm.image && (
              <p className="mt-1 truncate text-[11px] text-indigo-600">
                Selected: {blogForm.image.name}
              </p>
            )}
          </div>

          {/* Buttons */}
          <div className="flex gap-2 border-t border-slate-100 pt-3">
            <button
              type="button"
              disabled={loading}
              onClick={() => setIsOpen(false)}
              className="flex-1 rounded-lg border border-slate-200 bg-white px-3 py-2 text-sm font-semibold text-slate-600 transition hover:bg-slate-50 active:scale-[0.98] disabled:opacity-50"
            >
              Cancel
            </button>

            <button
              type="submit"
              disabled={loading}
              className="flex-1 rounded-lg bg-gradient-to-r from-indigo-600 to-purple-600 px-3 py-2 text-sm font-semibold text-white shadow-md shadow-indigo-200 transition hover:from-indigo-700 hover:to-purple-700 hover:shadow-lg active:scale-[0.98] disabled:opacity-50"
            >
              {loading ? "Posting..." : "Post Blog"}
            </button>
          </div>
        </form>
      </div>
    </div>
  )
}

export default CreateModal