import Navbar from "../../components/Navbar";
import NavbarOne from "../../components/NavbarOne";

export default function Layout({ children }) {
  return (
    <>
      <Navbar />
      <NavbarOne />
      <div className="flex place-items-center">{children}</div>
    </>
  );
}
