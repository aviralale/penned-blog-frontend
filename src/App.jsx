import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Layout from "./pages/base/Layout";
import Category from "./pages/Category";
import BlogPage from "./pages/BlogPage";
import "@smastrom/react-rating/style.css";
import Signup from "./pages/Auth/Signup";
import Login from "./pages/Auth/Login";
import Dashboard from "./pages/Auth/Dashboard";
import EditUser from "./pages/Auth/EditUser";
import NewPost from "./pages/Posts/NewPostPage";
import EditPost from "./pages/Posts/EditPostPage";

export default function App() {
  return (
    <Layout>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/category" element={<Category />} />
        <Route path="/blog" element={<BlogPage />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/login" element={<Login />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/edit-info" element={<EditUser />} />
        <Route path="/new-post" element={<NewPost />} />
        <Route path="/post/edit/*" element={<EditPost />} />
      </Routes>
    </Layout>
  );
}
