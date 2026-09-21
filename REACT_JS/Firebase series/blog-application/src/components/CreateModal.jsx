import React, { useState } from 'react'

const CreateModal = () => {
    const [isOpen, setIsOpen] = useState(false)
    const [title, setTitle] = useState('')
    const [description, setDescription] = useState('')
    const [image, setImage] = useState(null)


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
};

    const modalStyle = {

        backgroundColor: '#fff',
        textAlign: 'center',
        padding: '20px',
        borderRadius: '8px',
        width: '400px',
        boxShadow: '0px 0px 10px rgba(0,0,0,0.2)'
    };
    return (
        <>
           <button
  className="rounded-xl bg-indigo-600 px-5 py-2.5 font-semibold text-white shadow-md shadow-indigo-200 transition-all duration-200 hover:bg-indigo-700 hover:shadow-lg active:scale-95"
  onClick={() => setIsOpen(true)}
>
  Create Blog
</button>

{isOpen && (
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
    onClick={() => setIsOpen(false)}
    className="absolute right-0 top-0 flex h-8 w-8 items-center  justify-center rounded-full bg-red-500 text-lg font-semibold text-white transition hover:bg-red-50 hover:text-red-500"
  >
    ×
  </button>

</div>

      <form
        onSubmit={(e) => {
          e.preventDefault();
          console.log({ title, description, image });
        }}
        className="space-y-3"
      >

        {/* Title */}
        <div>
          <label className="mb-1.5 block text-xs font-semibold text-slate-700">
            Blog Title
          </label>

          <input
            type="text"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            placeholder="Enter your blog title..."
            required
            className="w-full rounded-lg border border-slate-200 bg-slate-50 px-3 py-2 text-sm text-slate-800 outline-none transition placeholder:text-slate-400 focus:border-indigo-500 focus:bg-white focus:ring-2 focus:ring-indigo-100"
          />
        </div>

        {/* Description */}
        <div>
          <label className="mb-1.5 block text-xs font-semibold text-slate-700">
            Description
          </label>

          <textarea
            rows="3"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            placeholder="Write something interesting..."
            required
            className="w-full resize-none rounded-lg border border-slate-200 bg-slate-50 px-3 py-2 text-sm text-slate-800 outline-none transition placeholder:text-slate-400 focus:border-indigo-500 focus:bg-white focus:ring-2 focus:ring-indigo-100"
          />
        </div>

        {/* Image */}
        <div>
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
              accept="image/*"
              onChange={(e) => setImage(e.target.files[0])}
              required
              className="hidden"
            />
          </label>

          {image && (
            <p className="mt-1 truncate text-[11px] text-indigo-600">
              Selected: {image.name}
            </p>
          )}
        </div>

        {/* Buttons */}
        <div className="flex gap-2 border-t border-slate-100 pt-3">

          <button
            type="button"
            onClick={() => setIsOpen(false)}
            className="flex-1 rounded-lg border border-slate-200 bg-white px-3 py-2 text-sm font-semibold text-slate-600 transition hover:bg-slate-50 active:scale-[0.98]"
          >
            Cancel
          </button>

          <button
            type="submit"
            className="flex-1 rounded-lg bg-gradient-to-r from-indigo-600 to-purple-600 px-3 py-2 text-sm font-semibold text-white shadow-md shadow-indigo-200 transition hover:from-indigo-700 hover:to-purple-700 hover:shadow-lg active:scale-[0.98]"
          >
            Post Blog
          </button>

        </div>

      </form>
    </div>
  </div>
)}
        </>
    )
}

export default CreateModal