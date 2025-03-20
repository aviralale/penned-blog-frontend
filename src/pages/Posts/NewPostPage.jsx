import React, { useState } from "react";
import { Link } from "react-router-dom";
import {
  ArrowLeftIcon,
  ImageIcon,
  TagIcon,
  SaveIcon,
  SendIcon,
} from "lucide-react";

export default function NewPost() {
  const [postTitle, setPostTitle] = useState("");
  const [postContent, setPostContent] = useState("");
  const [tags, setTags] = useState([]);
  const [currentTag, setCurrentTag] = useState("");
  const [coverImage, setCoverImage] = useState(null);

  const handleTagAdd = (e) => {
    e.preventDefault();
    if (currentTag.trim() !== "" && !tags.includes(currentTag.trim())) {
      setTags([...tags, currentTag.trim()]);
      setCurrentTag("");
    }
  };

  const handleTagRemove = (tagToRemove) => {
    setTags(tags.filter((tag) => tag !== tagToRemove));
  };

  const handlePublish = () => {
    // Logic to publish post
    alert("Post published successfully!");
    // Redirect to dashboard
  };

  const handleSaveDraft = () => {
    // Logic to save draft
    alert("Draft saved successfully!");
    // Redirect to dashboard
  };

  return (
    <div className="bg-custom-bg dark:bg-custom-bg-dark text-black dark:text-custom-text-dark min-h-screen">
      <div className="mx-auto max-w-4xl p-6">
        {/* Header */}
        <div className="mb-6 flex items-center justify-between">
          <Link
            to="/dashboard"
            className="flex items-center gap-2 text-sm hover:text-custom-orange transition-colors"
          >
            <ArrowLeftIcon className="w-4 h-4" />
            Back to Dashboard
          </Link>
          <div className="flex gap-3">
            <button
              onClick={handleSaveDraft}
              className="flex items-center gap-2 border border-gray-300 dark:border-gray-700 px-4 py-2 rounded-lg hover:bg-black/5 dark:hover:bg-white/5 transition-all"
            >
              <SaveIcon className="w-4 h-4" />
              Save Draft
            </button>
            <button
              onClick={handlePublish}
              className="flex items-center gap-2 bg-custom-orange text-white px-4 py-2 rounded-lg hover:opacity-90 transition-opacity"
              disabled={!postTitle || !postContent}
            >
              <SendIcon className="w-4 h-4" />
              Publish
            </button>
          </div>
        </div>

        {/* Cover Image */}
        <div className="mb-8 relative bg-gray-100 dark:bg-gray-800 rounded-xl h-64 flex items-center justify-center overflow-hidden">
          {coverImage ? (
            <img
              src={URL.createObjectURL(coverImage)}
              alt="Cover"
              className="w-full h-full object-cover"
            />
          ) : (
            <div className="text-center">
              <ImageIcon className="w-12 h-12 mx-auto mb-2 text-gray-400" />
              <p className="text-gray-500 dark:text-gray-400">
                Add a cover image
              </p>
            </div>
          )}
          <input
            type="file"
            id="cover-image"
            className="absolute inset-0 opacity-0 cursor-pointer"
            accept="image/*"
            onChange={(e) => setCoverImage(e.target.files[0])}
          />
        </div>

        {/* Title */}
        <input
          type="text"
          placeholder="Post Title"
          value={postTitle}
          onChange={(e) => setPostTitle(e.target.value)}
          className="w-full text-4xl font-bold bg-transparent border-0 focus:outline-none focus:ring-0 mb-6 placeholder-gray-400"
        />

        {/* Tags */}
        <div className="mb-6">
          <div className="flex items-center text-sm mb-2">
            <TagIcon className="w-4 h-4 mr-1" />
            <span>Tags</span>
          </div>

          <div className="flex flex-wrap gap-2 mb-3">
            {tags.map((tag, index) => (
              <span
                key={index}
                className="px-3 py-1 bg-gray-200 dark:bg-gray-700 rounded-full text-sm flex items-center gap-1"
              >
                {tag}
                <button
                  onClick={() => handleTagRemove(tag)}
                  className="ml-1 rounded-full hover:bg-gray-300 dark:hover:bg-gray-600 w-4 h-4 flex items-center justify-center"
                >
                  ×
                </button>
              </span>
            ))}
          </div>

          <form onSubmit={handleTagAdd} className="flex gap-2">
            <input
              type="text"
              placeholder="Add a tag"
              value={currentTag}
              onChange={(e) => setCurrentTag(e.target.value)}
              className="w-full px-3 py-2 bg-white dark:bg-gray-800 border border-gray-300 dark:border-gray-700 rounded-lg focus:outline-none focus:border-custom-orange text-sm"
            />
            <button
              type="submit"
              className="px-3 py-2 bg-gray-200 dark:bg-gray-700 rounded-lg text-sm hover:bg-gray-300 dark:hover:bg-gray-600"
            >
              Add
            </button>
          </form>
        </div>

        {/* Content */}
        <textarea
          placeholder="Write your post content here..."
          value={postContent}
          onChange={(e) => setPostContent(e.target.value)}
          className="w-full min-h-[400px] px-3 py-2 bg-white dark:bg-custom-bg-dark border border-gray-300 dark:border-gray-700 rounded-lg focus:outline-none focus:border-custom-orange resize-y"
        />
      </div>
    </div>
  );
}
