import React, { useState } from "react";
import { Link } from "react-router-dom";
import {
  SettingsIcon,
  PenIcon,
  BookIcon,
  BarChartIcon,
  HeartIcon,
  MessageCircleIcon,
  BookmarkIcon,
  CalendarIcon,
} from "lucide-react";

export default function Dashboard() {
  const [activeTab, setActiveTab] = useState("overview");

  // Mock data for demonstration
  const recentPosts = [
    {
      id: 1,
      title: "Distant ship, smoke on the horizon",
      date: "Mar 18, 2025",
      views: 1243,
      likes: 56,
      comments: 12,
    },
    {
      id: 2,
      title: "The wall between us",
      date: "Mar 10, 2025",
      views: 879,
      likes: 42,
      comments: 8,
    },
    {
      id: 3,
      title: "Comfortably numb",
      date: "Mar 3, 2025",
      views: 1567,
      likes: 78,
      comments: 24,
    },
  ];

  const draftPosts = [
    { id: 4, title: "Another brick in the wall", lastEdited: "Mar 19, 2025" },
    { id: 5, title: "Time: the great equalizer", lastEdited: "Mar 15, 2025" },
  ];

  const stats = {
    totalPosts: 32,
    totalViews: 45892,
    totalLikes: 2341,
    followers: 187,
  };

  return (
    <div className="bg-custom-bg dark:bg-custom-bg-dark text-black dark:text-custom-text-dark min-h-screen w-full">
      {/* Header Section */}
      <div className="mx-auto max-w-6xl p-6">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-12 pt-4">
          <div className="flex items-center gap-6">
            <div className="rounded-full overflow-hidden aspect-square border-4 border-custom-orange">
              <img
                src="https://avatars.githubusercontent.com/u/121365480"
                className="w-24 h-24 object-cover object-center"
                alt="User Profile Picture"
              />
            </div>
            <div>
              <h1 className="font-bold text-3xl md:text-4xl">Aviral Ale</h1>
              <p className="opacity-70 text-sm">@aviral</p>
              <p className="mt-1 italic">
                "distant ship, smoke on the horizon"
              </p>
            </div>
          </div>
          <div className="mt-4 md:mt-0 flex gap-3">
            <Link
              to="/new-post"
              className="flex items-center gap-2 bg-custom-orange text-white px-4 py-2 rounded-lg hover:opacity-90 transition-opacity"
            >
              <PenIcon className="w-4 h-4" />
              New Post
            </Link>
            <Link
              to="/edit-info"
              className="flex items-center gap-2 border border-gray-300 dark:border-gray-700 px-4 py-2 rounded-lg hover:bg-black/5 dark:hover:bg-white/5 transition-all"
              title="Edit your info"
            >
              <SettingsIcon className="w-4 h-4" />
              Settings
            </Link>
          </div>
        </div>

        {/* Stats Cards */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-8">
          <div className="bg-white dark:bg-custom-bg-dark/80 rounded-xl p-4 shadow-sm border border-gray-100 dark:border-gray-800">
            <div className="flex items-center justify-between">
              <h3 className="text-sm font-medium opacity-70">Total Posts</h3>
              <BookIcon className="w-5 h-5 text-custom-orange" />
            </div>
            <p className="text-3xl font-bold mt-2">{stats.totalPosts}</p>
          </div>

          <div className="bg-white dark:bg-custom-bg-dark/80 rounded-xl p-4 shadow-sm border border-gray-100 dark:border-gray-800">
            <div className="flex items-center justify-between">
              <h3 className="text-sm font-medium opacity-70">Total Views</h3>
              <BarChartIcon className="w-5 h-5 text-custom-orange" />
            </div>
            <p className="text-3xl font-bold mt-2">
              {stats.totalViews.toLocaleString()}
            </p>
          </div>

          <div className="bg-white dark:bg-custom-bg-dark/80 rounded-xl p-4 shadow-sm border border-gray-100 dark:border-gray-800">
            <div className="flex items-center justify-between">
              <h3 className="text-sm font-medium opacity-70">Total Likes</h3>
              <HeartIcon className="w-5 h-5 text-custom-orange" />
            </div>
            <p className="text-3xl font-bold mt-2">
              {stats.totalLikes.toLocaleString()}
            </p>
          </div>

          <div className="bg-white dark:bg-custom-bg-dark/80 rounded-xl p-4 shadow-sm border border-gray-100 dark:border-gray-800">
            <div className="flex items-center justify-between">
              <h3 className="text-sm font-medium opacity-70">Followers</h3>
              <MessageCircleIcon className="w-5 h-5 text-custom-orange" />
            </div>
            <p className="text-3xl font-bold mt-2">{stats.followers}</p>
          </div>
        </div>

        {/* Tabs Navigation */}
        <div className="border-b border-gray-200 dark:border-gray-800 mb-6">
          <nav className="flex space-x-8">
            <button
              onClick={() => setActiveTab("overview")}
              className={`py-3 border-b-2 font-medium text-sm ${
                activeTab === "overview"
                  ? "border-custom-orange text-custom-orange"
                  : "border-transparent hover:border-gray-300 dark:hover:border-gray-700"
              }`}
            >
              Overview
            </button>
            <button
              onClick={() => setActiveTab("posts")}
              className={`py-3 border-b-2 font-medium text-sm ${
                activeTab === "posts"
                  ? "border-custom-orange text-custom-orange"
                  : "border-transparent hover:border-gray-300 dark:hover:border-gray-700"
              }`}
            >
              Published Posts
            </button>
            <button
              onClick={() => setActiveTab("drafts")}
              className={`py-3 border-b-2 font-medium text-sm ${
                activeTab === "drafts"
                  ? "border-custom-orange text-custom-orange"
                  : "border-transparent hover:border-gray-300 dark:hover:border-gray-700"
              }`}
            >
              Drafts
            </button>
            <button
              onClick={() => setActiveTab("analytics")}
              className={`py-3 border-b-2 font-medium text-sm ${
                activeTab === "analytics"
                  ? "border-custom-orange text-custom-orange"
                  : "border-transparent hover:border-gray-300 dark:hover:border-gray-700"
              }`}
            >
              Analytics
            </button>
          </nav>
        </div>

        {/* Tab Content */}
        <div className="mb-8">
          {activeTab === "overview" && (
            <>
              <div className="flex items-center justify-between mb-4">
                <h2 className="text-xl font-semibold">Recent Posts</h2>
                <Link
                  to="/all-posts"
                  className="text-custom-orange text-sm hover:underline"
                >
                  View all posts
                </Link>
              </div>
              <div className="bg-white dark:bg-custom-bg-dark/80 rounded-xl overflow-hidden shadow-sm border border-gray-100 dark:border-gray-800">
                {recentPosts.map((post, index) => (
                  <div
                    key={post.id}
                    className={`p-4 flex justify-between items-center ${
                      index !== recentPosts.length - 1
                        ? "border-b border-gray-100 dark:border-gray-800"
                        : ""
                    }`}
                  >
                    <div>
                      <Link
                        to={`/post/${post.id}`}
                        className="font-medium hover:text-custom-orange transition-colors"
                      >
                        {post.title}
                      </Link>
                      <div className="flex items-center mt-1 text-sm opacity-70 space-x-4">
                        <span className="flex items-center gap-1">
                          <CalendarIcon className="w-3 h-3" /> {post.date}
                        </span>
                        <span className="flex items-center gap-1">
                          <BarChartIcon className="w-3 h-3" /> {post.views}{" "}
                          views
                        </span>
                        <span className="flex items-center gap-1">
                          <HeartIcon className="w-3 h-3" /> {post.likes}
                        </span>
                        <span className="flex items-center gap-1">
                          <MessageCircleIcon className="w-3 h-3" />{" "}
                          {post.comments}
                        </span>
                      </div>
                    </div>
                    <div className="flex space-x-2">
                      <Link
                        to={`/post/edit/${post.id}`}
                        className="p-2 rounded-full hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors"
                      >
                        <PenIcon className="w-4 h-4" />
                      </Link>
                    </div>
                  </div>
                ))}
              </div>

              <div className="mt-8">
                <div className="flex items-center justify-between mb-4">
                  <h2 className="text-xl font-semibold">Drafts</h2>
                  <Link
                    to="/drafts"
                    className="text-custom-orange text-sm hover:underline"
                  >
                    View all drafts
                  </Link>
                </div>
                <div className="bg-white dark:bg-custom-bg-dark/80 rounded-xl overflow-hidden shadow-sm border border-gray-100 dark:border-gray-800">
                  {draftPosts.length > 0 ? (
                    draftPosts.map((draft, index) => (
                      <div
                        key={draft.id}
                        className={`p-4 flex justify-between items-center ${
                          index !== draftPosts.length - 1
                            ? "border-b border-gray-100 dark:border-gray-800"
                            : ""
                        }`}
                      >
                        <div>
                          <Link
                            to={`/edit/${draft.id}`}
                            className="font-medium hover:text-custom-orange transition-colors"
                          >
                            {draft.title}
                          </Link>
                          <div className="flex items-center mt-1 text-sm opacity-70">
                            <span>Last edited: {draft.lastEdited}</span>
                          </div>
                        </div>
                        <Link
                          to={`/edit/${draft.id}`}
                          className="p-2 rounded-full hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors"
                        >
                          <PenIcon className="w-4 h-4" />
                        </Link>
                      </div>
                    ))
                  ) : (
                    <div className="p-8 text-center">
                      <BookmarkIcon className="w-10 h-10 mx-auto mb-2 text-gray-300 dark:text-gray-600" />
                      <p>No drafts yet</p>
                      <Link
                        to="/new-post"
                        className="mt-2 inline-block text-custom-orange hover:underline"
                      >
                        Start a new draft
                      </Link>
                    </div>
                  )}
                </div>
              </div>
            </>
          )}

          {activeTab === "posts" && (
            <div className="text-center py-12">
              <h2 className="text-2xl font-semibold mb-2">
                Published Posts Content
              </h2>
              <p className="opacity-70">
                This tab would display all published posts with filtering and
                sorting options
              </p>
            </div>
          )}

          {activeTab === "drafts" && (
            <div className="text-center py-12">
              <h2 className="text-2xl font-semibold mb-2">Drafts Content</h2>
              <p className="opacity-70">
                This tab would display all draft posts in progress
              </p>
            </div>
          )}

          {activeTab === "analytics" && (
            <div className="text-center py-12">
              <h2 className="text-2xl font-semibold mb-2">Analytics Content</h2>
              <p className="opacity-70">
                This tab would display detailed analytics and insights about
                your blog performance
              </p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
