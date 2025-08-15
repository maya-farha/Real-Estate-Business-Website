import { Form, Route, Routes } from "react-router-dom";
import "./App.css";

import Home from "./pages/Home/Home";
import About from "./pages/AboutUs/About";
import Property from "./pages/Property/Property";
import Service from "./pages/Services/Service";
import Contact from "./pages/Contact/Contact";
import NavBar from "./components/NavBar/NavBar";
<<<<<<< HEAD
=======
import ExProperty from "./components/ExProperty/ExProperty";
>>>>>>> master

function App() {
  return (
    <>
      <NavBar
        logo="/assets/icons/logo.svg"
        items={[
          { url: "/", content: "Home" },
          { url: "/about", content: "About" },
          { url: "/property", content: "Property" },
          { url: "/services", content: "Service" },
        ]}
        btn="Contact Us"
      ></NavBar>
<<<<<<< HEAD
=======

>>>>>>> master
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/about" element={<About />}></Route>
        <Route path="/property" element={<Property />}></Route>
        <Route path="/service" element={<Service />}></Route>
        <Route path="/contact" element={<Contact />}></Route>
      </Routes>
      <ExProperty></ExProperty>
    </>
  );
}

export default App;
