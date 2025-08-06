import { Route, Routes } from "react-router-dom";
import "./App.css";
import Home from "./pages/Home/Home";
import About from "./pages/AboutUs/About";
import Prperty from "./pages/Property/Property";
import Service from "./pages/Services/Service";
import Contact from "./pages/Contact/Contact";
import TextContainer from "./componants/TextContainer/TextContainer";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/about" element={<About />}></Route>
        <Route path="/property" element={<Prperty />}></Route>
        <Route path="/service" element={<Service />}></Route>
        <Route path="/contact" element={<Contact />}></Route>
      </Routes>
      <div className="subContainer">
        <TextContainer heading ="200+" Paragraph ="Happy Customers"/>
        <TextContainer heading ="10k+" Paragraph ="Properties For Clients"/>
        <TextContainer heading ="16+" Paragraph ="Years of Experience"/>
      </div>
    </>
  );
}

export default App;
