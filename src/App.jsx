import { Route, Routes } from "react-router-dom";
import "./App.css";
import Home from "./pages/Home/Home";
import About from "./pages/AboutUs/About";
import Prperty from "./pages/property/Property";
import Service from "./pages/services/Service";
import Contact from "./pages/contact/Contact";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/about" element={<About />}></Route>
        <Route path="/property" element={<Prperty />}></Route>
        <Route path="/about" element={<Service />}></Route>
        <Route path="/about" element={<Contact />}></Route>
      </Routes>
    </>
  );
}

export default App;
