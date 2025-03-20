import React, { useState } from "react";
import { Link } from "react-router-dom";
import {
  ArrowLeftIcon,
  UserIcon,
  AtSignIcon,
  LinkIcon,
  SaveIcon,
} from "lucide-react";

export default function EditUser() {
  const [profile, setProfile] = useState({
    name: "Aviral Ale",
    username: "aviral",
    bio: "distant ship, smoke on the horizon",
    email: "aviral@example.com",
    website: "https://aviralblog.com",
    twitter: "@aviral",
    profilePicture: "https://avatars.githubusercontent.com/u/121365480",
  });

  const [newProfilePicture, setNewProfilePicture] = useState(null);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setProfile({
      ...profile,
      [name]: value,
    });
  };

  const handleProfilePictureChange = (e) => {
    if (e.target.files && e.target.files[0]) {
      setNewProfilePicture(e.target.files[0]);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Logic to update user profile
    alert("Profile updated successfully!");
    // Redirect to dashboard
  };

  return (
    <div className="bg-custom-bg dark:bg-custom-bg-dark text-black dark:text-custom-text-dark min-h-screen w-full">
      <div className="mx-auto max-w-2xl p-6">
        {/* Header */}
        <div className="mb-8 flex items-center justify-between">
          <Link
            to="/dashboard"
            className="flex items-center gap-2 text-sm hover:text-custom-orange transition-colors"
          >
            <ArrowLeftIcon className="w-4 h-4" />
            Back to Dashboard
          </Link>
          <h1 className="text-2xl font-bold">Edit Profile</h1>
        </div>

        <form onSubmit={handleSubmit}>
          {/* Profile Picture */}
          <div className="mb-8 flex flex-col items-center">
            <div className="relative w-32 h-32 rounded-full overflow-hidden border-4 border-custom-orange mb-4">
              <img
                src={
                  newProfilePicture
                    ? URL.createObjectURL(newProfilePicture)
                    : profile.profilePicture
                }
                alt="Profile"
                className="w-full h-full object-cover"
              />
              <label
                htmlFor="profile-picture"
                className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-50 opacity-0 hover:opacity-100 transition-opacity cursor-pointer"
              >
                <span className="text-white text-sm">Change Photo</span>
              </label>
              <input
                type="file"
                id="profile-picture"
                className="hidden"
                accept="image/*"
                onChange={handleProfilePictureChange}
              />
            </div>
          </div>

          {/* Form Fields */}
          <div className="space-y-6">
            <div>
              <label className="block mb-2 text-sm font-medium">
                <UserIcon className="w-4 h-4 inline mr-2" />
                Display Name
              </label>
              <input
                type="text"
                name="name"
                value={profile.name}
                onChange={handleInputChange}
                className="w-full px-4 py-3 bg-white dark:bg-gray-800 border border-gray-300 dark:border-gray-700 rounded-lg focus:outline-none focus:border-custom-orange"
                required
              />
            </div>

            <div>
              <label className="block mb-2 text-sm font-medium">
                <AtSignIcon className="w-4 h-4 inline mr-2" />
                Username
              </label>
              <input
                type="text"
                name="username"
                value={profile.username}
                onChange={handleInputChange}
                className="w-full px-4 py-3 bg-white dark:bg-gray-800 border border-gray-300 dark:border-gray-700 rounded-lg focus:outline-none focus:border-custom-orange"
                required
              />
            </div>

            <div>
              <label className="block mb-2 text-sm font-medium">Bio</label>
              <textarea
                name="bio"
                value={profile.bio}
                onChange={handleInputChange}
                className="w-full px-4 py-3 bg-white dark:bg-gray-800 border border-gray-300 dark:border-gray-700 rounded-lg focus:outline-none focus:border-custom-orange resize-none h-24"
              />
            </div>

            <div>
              <label className="block mb-2 text-sm font-medium">Email</label>
              <input
                type="email"
                name="email"
                value={profile.email}
                onChange={handleInputChange}
                className="w-full px-4 py-3 bg-white dark:bg-gray-800 border border-gray-300 dark:border-gray-700 rounded-lg focus:outline-none focus:border-custom-orange"
                required
              />
            </div>

            <div>
              <label className="block mb-2 text-sm font-medium">
                <LinkIcon className="w-4 h-4 inline mr-2" />
                Website
              </label>
              <input
                type="url"
                name="website"
                value={profile.website}
                onChange={handleInputChange}
                className="w-full px-4 py-3 bg-white dark:bg-gray-800 border border-gray-300 dark:border-gray-700 rounded-lg focus:outline-none focus:border-custom-orange"
              />
            </div>

            <div>
              <label className="block mb-2 text-sm font-medium">Twitter</label>
              <input
                type="text"
                name="twitter"
                value={profile.twitter}
                onChange={handleInputChange}
                className="w-full px-4 py-3 bg-white dark:bg-gray-800 border border-gray-300 dark:border-gray-700 rounded-lg focus:outline-none focus:border-custom-orange"
              />
            </div>

            <div className="pt-4">
              <button
                type="submit"
                className="w-full flex items-center justify-center gap-2 bg-custom-orange text-white px-4 py-3 rounded-lg hover:opacity-90 transition-opacity font-medium"
              >
                <SaveIcon className="w-4 h-4" />
                Save Changes
              </button>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
}
