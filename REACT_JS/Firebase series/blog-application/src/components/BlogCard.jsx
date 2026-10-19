import { Pencil, Trash2, Globe } from "lucide-react";

const BlogCard = () => {
  return (
    <div className="max-w-xl mx-auto bg-white rounded-2xl shadow-md border border-gray-200 overflow-hidden">

      {/* Header */}
      <div className="flex items-center justify-between p-4">
        <div className="flex items-center gap-3">
          <div className="w-11 h-11 rounded-full bg-blue-600 text-white flex items-center justify-center font-bold text-lg">
            K
          </div>

          <div>
            <h3 className="font-semibold text-gray-900">
              Khizer Khan
            </h3>
            <p className="text-xs text-gray-500 flex items-center gap-1">
              Just now · <Globe size={12} />
            </p>
          </div>
        </div>

        {/* Icons */}
        <div className="flex items-center gap-3">
          <Pencil
            size={19}
            className="text-blue-600 cursor-pointer"
          />
          <Trash2
            size={19}
            className="text-red-500 cursor-pointer"
          />
        </div>
      </div>

      {/* Title & Description */}
      <div className="px-4 pb-4">
        <h2 className="text-xl font-bold text-gray-900 mb-2">
          My First Blog Post
        </h2>

        <p className="text-gray-700 text-sm leading-6">
          Welcome to my blog! This is a simple post where I share
          my thoughts, ideas, and experiences with everyone.
        </p>
      </div>

      {/* Image */}
      <img
        src="https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=900"
        alt="Blog cover"
        className="w-full max-h-[400px] object-cover"
      />

      {/* Footer */}
      <div className="flex items-center justify-around border-t border-gray-200 p-3 text-gray-600">
        <div className="flex items-center gap-2">
          👍 <span className="text-sm font-medium">Like</span>
        </div>

        <div className="flex items-center gap-2">
          💬 <span className="text-sm font-medium">Comment</span>
        </div>

        <div className="flex items-center gap-2">
          ↗️ <span className="text-sm font-medium">Share</span>
        </div>
      </div>

    </div>
  );
};

export default BlogCard;