import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Layout from "./pages/base/Layout";
import Category from "./pages/Category";
import BlogPage from "./pages/BlogPage";
export default function App() {
  return (
    <Layout>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/category" element={<Category />} />
        <Route path="/blog" element={<BlogPage />} />
      </Routes>
    </Layout>
  );
}
