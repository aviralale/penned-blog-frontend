import React, { useState, useEffect } from "react";
import { Link, useParams, useNavigate } from "react-router-dom";
import {
  ChevronLeftIcon,
  SaveIcon,
  EyeIcon,
  TrashIcon,
  CalendarIcon,
  ClockIcon,
  BookIcon,
} from "lucide-react";

export default function EditPost() {
  const { id } = useParams();
  const navigate = useNavigate();
  const isNewPost = id === "new";

  const [post, setPost] = useState({
    title: "",
    content: "",
    tags: [],
    coverImage: "",
    excerpt: "",
    lastSaved: new Date().toISOString(),
  });

  const [isSaving, setIsSaving] = useState(false);
  const [newTag, setNewTag] = useState("");
  const [savedMessage, setSavedMessage] = useState("");

  // Mock data loading effect
  useEffect(() => {
    if (!isNewPost) {
      // Simulate API fetch for existing post
      const samplePosts = {
        4: {
          title: "Another brick in the wall",
          content:
            "We don't need no education\nWe don't need no thought control\nNo dark sarcasm in the classroom\nTeacher, leave them kids alone\nHey! Teacher! Leave them kids alone!",
          excerpt: "Reflections on conformity and education systems.",
          tags: ["education", "society", "reflection"],
          coverImage: "/api/placeholder/800/400",
          lastSaved: "2025-03-19T14:30:00Z",
        },
        5: {
          title: "Time: the great equalizer",
          content:
            "Ticking away the moments that make up a dull day\nFritter and waste the hours in an offhand way\nKicking around on a piece of ground in your hometown\nWaiting for someone or something to show you the way",
          excerpt: "Exploring how time affects us all equally.",
          tags: ["philosophy", "time", "perspective"],
          coverImage: "/api/placeholder/800/400",
          lastSaved: "2025-03-15T09:45:00Z",
        },
      };

      if (samplePosts[id]) {
        setPost(samplePosts[id]);
      }
    }
  }, [id, isNewPost]);

  const handleSave = (publishNow = false) => {
    setIsSaving(true);

    // Simulate saving process
    setTimeout(() => {
      const now = new Date().toISOString();
      setPost((prev) => ({ ...prev, lastSaved: now }));
      setIsSaving(false);

      setSavedMessage(
        publishNow
          ? "Post published successfully!"
          : "Draft saved successfully!"
      );
      setTimeout(() => setSavedMessage(""), 3000);

      if (publishNow) {
        navigate("/dashboard");
      }
    }, 800);
  };

  const handleAddTag = (e) => {
    e.preventDefault();
    if (newTag.trim() && !post.tags.includes(newTag.trim())) {
      setPost((prev) => ({
        ...prev,
        tags: [...prev.tags, newTag.trim()],
      }));
      setNewTag("");
    }
  };

  const handleRemoveTag = (tagToRemove) => {
    setPost((prev) => ({
      ...prev,
      tags: prev.tags.filter((tag) => tag !== tagToRemove),
    }));
  };

  const autoSave = () => {
    // Auto save implementation would go here
    const now = new Date().toISOString();
    setPost((prev) => ({ ...prev, lastSaved: now }));
  };

  useEffect(() => {
    // Set up autosave timer
    const interval = setInterval(autoSave, 30000); // Every 30 seconds
    return () => clearInterval(interval);
  }, []);

  const formatDate = (dateString) => {
    const date = new Date(dateString);
    return date.toLocaleString("en-US", {
      month: "short",
      day: "numeric",
      year: "numeric",
      hour: "2-digit",
      minute: "2-digit",
    });
  };

  return (
    <div className="bg-custom-bg dark:bg-custom-bg-dark text-black dark:text-custom-text-dark min-h-screen w-full">
      <div className="mx-auto max-w-6xl p-6">
        {/* Header */}
        <div className="mb-8 flex items-center justify-between">
          <div className="flex items-center gap-4">
            <Link
              to="/dashboard"
              className="flex items-center gap-2 text-sm font-medium hover:text-custom-orange transition-colors"
            >
              <ChevronLeftIcon className="w-4 h-4" /> Back to Dashboard
            </Link>

            <h1 className="text-2xl font-bold">
              {isNewPost ? "Create New Post" : "Edit Post"}
            </h1>
          </div>

          {savedMessage && (
            <div className="bg-green-50 dark:bg-green-900/20 text-green-700 dark:text-green-400 px-4 py-2 rounded-lg text-sm">
              {savedMessage}
            </div>
          )}

          <div className="flex items-center gap-3">
            <button
              onClick={() => handleSave(false)}
              className="flex items-center gap-2 border border-gray-300 dark:border-gray-700 px-4 py-2 rounded-lg hover:bg-black/5 dark:hover:bg-white/5 transition-all"
              disabled={isSaving}
            >
              <SaveIcon className="w-4 h-4" />
              Save Draft
              {isSaving && " ..."}
            </button>

            <button
              onClick={() => handleSave(true)}
              className="flex items-center gap-2 bg-custom-orange text-white px-4 py-2 rounded-lg hover:opacity-90 transition-opacity"
              disabled={isSaving}
            >
              <EyeIcon className="w-4 h-4" />
              Publish Now
            </button>
          </div>
        </div>

        {/* Last saved indicator */}
        <div className="flex items-center gap-2 text-sm text-gray-500 dark:text-gray-400 mb-6">
          <ClockIcon className="w-4 h-4" />
          Last saved: {formatDate(post.lastSaved)}
          {isSaving && <span className="italic ml-2">Saving...</span>}
        </div>

        {/* Main editing form */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="md:col-span-2">
            <div className="mb-6">
              <label htmlFor="title" className="block mb-2 font-medium">
                Post Title
              </label>
              <input
                type="text"
                id="title"
                value={post.title}
                onChange={(e) => setPost({ ...post, title: e.target.value })}
                placeholder="Enter a captivating title"
                className="w-full p-3 border border-gray-200 dark:border-gray-800 rounded-lg bg-white dark:bg-gray-900 focus:ring-2 focus:ring-custom-orange focus:border-transparent outline-none transition-all"
              />
            </div>

            <div className="mb-6">
              <label htmlFor="content" className="block mb-2 font-medium">
                Content
              </label>
              <textarea
                id="content"
                value={post.content}
                onChange={(e) => setPost({ ...post, content: e.target.value })}
                placeholder="Start writing your post here..."
                className="w-full p-3 min-h-80 border border-gray-200 dark:border-gray-800 rounded-lg bg-white dark:bg-gray-900 focus:ring-2 focus:ring-custom-orange focus:border-transparent outline-none transition-all"
              />
            </div>
          </div>

          <div>
            <div className="bg-white dark:bg-custom-bg-dark/80 rounded-xl p-6 shadow-sm border border-gray-100 dark:border-gray-800 sticky top-6">
              <h2 className="font-semibold text-lg mb-4">Post Settings</h2>

              <div className="mb-6">
                <label
                  htmlFor="excerpt"
                  className="block mb-2 text-sm font-medium"
                >
                  Excerpt
                </label>
                <textarea
                  id="excerpt"
                  value={post.excerpt}
                  onChange={(e) =>
                    setPost({ ...post, excerpt: e.target.value })
                  }
                  placeholder="Brief summary of your post"
                  className="w-full p-3 min-h-20 text-sm border border-gray-200 dark:border-gray-800 rounded-lg bg-white dark:bg-gray-900 focus:ring-2 focus:ring-custom-orange focus:border-transparent outline-none transition-all"
                />
              </div>

              <div className="mb-6">
                <label
                  htmlFor="coverImage"
                  className="block mb-2 text-sm font-medium"
                >
                  Cover Image URL
                </label>
                <input
                  type="text"
                  id="coverImage"
                  value={post.coverImage}
                  onChange={(e) =>
                    setPost({ ...post, coverImage: e.target.value })
                  }
                  placeholder="Enter image URL"
                  className="w-full p-3 text-sm border border-gray-200 dark:border-gray-800 rounded-lg bg-white dark:bg-gray-900 focus:ring-2 focus:ring-custom-orange focus:border-transparent outline-none transition-all"
                />

                {post.coverImage && (
                  <div className="mt-2 rounded-lg overflow-hidden border border-gray-200 dark:border-gray-800">
                    <img
                      src={post.coverImage}
                      alt="Cover preview"
                      className="w-full h-32 object-cover"
                    />
                  </div>
                )}
              </div>

              <div className="mb-6">
                <label className="block mb-2 text-sm font-medium">Tags</label>
                <form onSubmit={handleAddTag} className="flex gap-2 mb-2">
                  <input
                    type="text"
                    value={newTag}
                    onChange={(e) => setNewTag(e.target.value)}
                    placeholder="Add a tag"
                    className="flex-1 p-2 text-sm border border-gray-200 dark:border-gray-800 rounded-lg bg-white dark:bg-gray-900 focus:ring-2 focus:ring-custom-orange focus:border-transparent outline-none transition-all"
                  />
                  <button
                    type="submit"
                    className="px-3 py-2 bg-gray-100 dark:bg-gray-800 rounded-lg hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors"
                  >
                    Add
                  </button>
                </form>

                <div className="flex flex-wrap gap-2">
                  {post.tags.map((tag) => (
                    <span
                      key={tag}
                      className="inline-flex items-center px-2 py-1 rounded-full text-xs bg-gray-100 dark:bg-gray-800"
                    >
                      {tag}
                      <button
                        onClick={() => handleRemoveTag(tag)}
                        className="ml-1 text-gray-500 hover:text-red-500"
                      >
                        &times;
                      </button>
                    </span>
                  ))}
                </div>
              </div>

              <div className="pt-4 border-t border-gray-200 dark:border-gray-800">
                <button
                  onClick={() => {
                    if (
                      window.confirm(
                        "Are you sure you want to delete this post?"
                      )
                    ) {
                      navigate("/dashboard");
                    }
                  }}
                  className="flex items-center gap-2 text-red-500 hover:text-red-600 transition-colors text-sm"
                >
                  <TrashIcon className="w-4 h-4" />
                  Delete Post
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
