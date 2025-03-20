import { Toaster } from "sonner";
import Footer from "../../components/Footer";
import Subscribe from "../../components/Home/Sections/Subscribe/Subscribe";
import Navbar from "../../components/Navbar";
import NavbarOne from "../../components/NavbarOne";

export default function Layout({ children }) {
  return (
    <div className="bg-custom-bg dark:bg-custom-bg-dark text-black dark:text-custom-text-dark">
      <Navbar />
      <NavbarOne />
      <div className="flex place-items-center">{children}</div>
      <Subscribe />
      <Footer />
      <Toaster richColors />
    </div>
  );
}
