import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Layout from "./pages/base/Layout";
export default function App() {
  return (
    <Layout>
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
    </Layout>
  );
}
