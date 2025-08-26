import NavBar from "../components/NavBar/NavBar";
import Footer from "../components/Footer/Footer";
import { Outlet } from "react-router-dom";

function PublicLayout() {
  return (
    <>
      <NavBar
        logo="/assets/icons/logo.svg"
        items={[
          { url: "/", content: "Home" },
          { url: "/about", content: "About" },
          { url: "/property", content: "Property" },
          { url: "/service", content: "Service" },
        ]}
        btn="Contact Us"
      />
      <Outlet />
      <Footer
        imag="/assets/icons/logo.svg"
        icona="/assets/icons/facebook.svg"
      />
    </>
  );
}

export default PublicLayout;
