import { Route, Routes } from "react-router-dom";
import "./App.css";
import Home from "./pages/Home/Home";
import About from "./pages/AboutUs/About";
import Prperty from "./pages/Property/Property";
import Service from "./pages/Services/Service";
import Contact from "./pages/Contact/Contact";
import TextContainer from "./components/TextContainer/TextContainer";

import NavBar from "./components/NavBar/NavBar";

function App() {
  return (
    <>
      <NavBar
        logo="/assets/icons/logo.svg"
        items={[
          { url: "/", content: "Home" },
          { url: "/about", content: "About" },
          { url: "/property", content: "Prperty" },
          { url: "/services", content: "Service" },
        ]}
        btn="Contact Us"
      ></NavBar>

      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/about" element={<About />}></Route>
        <Route path="/property" element={<Prperty />}></Route>
        <Route path="/service" element={<Service />}></Route>
        <Route path="/contact" element={<Contact />}></Route>
      </Routes>
    </>
  );
}

export default App;
