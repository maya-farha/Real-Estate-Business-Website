import { Form, Route, Routes } from "react-router-dom";
import "./App.css";
import Home from "./pages/Home/Home";
import About from "./pages/AboutUs/About";
import Property from "./pages/Property/Property";
import Service from "./pages/Services/Service";
import Contact from "./pages/Contact/Contact";
import TextContainer from "./components/TextContainer/TextContainer";

import NavBar from "./components/NavBar/NavBar";

import ExProperty from "./components/ExProperty/ExProperty";

import Footer from "../src/components/Footer/Footer";
import MsSlider from "./components/MsSlider/MsSlider";
import Card from "./components/Card/Card";
import EstateinTeam from "./components/EstateinTeam/EstateinTeam";

function App() {
    const fSliderCards =[{
    showStars:true,
    Heading:"Exceptional Service!" ,
    Paragraph :"Our experience with Estatein was outstanding. Their team's dedication and professionalism made finding our dream home a breeze. Highly recommended!",
    showImg :true,
    profileImg :"/assets/imgs/wade-Profile.png",
    Name :"Wade Warren",
    Text :"USA, California"
  },
  {
    showStars:true ,
    Heading :"Efficient and Reliable" ,
    Paragraph :"Estatein provided us with top-notch service. They helped us sell our property quickly and at a great price. We couldn't be happier with the results",
    showImg :true,
    profileImg :"/assets/imgs/emelie-Profile.png",
    Name :"Emelie Thomson",
    Text :"USA, Florida"
  },
  {
    showStars:true,
    Heading:"Trusted Advisors" ,
    Paragraph :"The Estatein team guided us through the entire buying process. Their knowledge and commitment to our needs were impressive. Thank you for your support!",
    showImg :true,
    profileImg :"/assets/imgs/john-Profile.png",
    Name :"John Mans",
    Text :"USA, Nevada",
  }
]
  const sSliderCards = [
{
    showHead : true,
    SecondHeading:"How do I search for properties on Estatein?" ,
    Paragraph :"Learn how to use our user-friendly search tools to find properties that match your criteria.",
    showBtn : true
  },
  {
      showHead : true,
    SecondHeading :"What documents do I need to sell my property through Estatein?" ,
    Paragraph :"Find out about the necessary documentation for listing your property with us.",
    showBtn : true
  },
  {
    showHead : true,
    SecondHeading:"How can I contact an Estatein agent?" ,
    Paragraph :"Discover the different ways you can get in touch with our experienced agents.",
    showBtn : true
  }
] 
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
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/about" element={<About />}></Route>
        <Route path="/property" element={<Property />}></Route>
        <Route path="/service" element={<Service />}></Route>
        <Route path="/contact" element={<Contact />}></Route>
      </Routes>

      <ExProperty></ExProperty>
        <MsSlider>
        {fSliderCards.map((card , index) =>{
          return(
            <Card key ={index} showStars = {card.showStars} Heading ={card.Heading} Paragraph={card.Paragraph} showImg ={card.showImg} profileImg={card.profileImg} Name={card.Name} Text ={card.Text}/>
          )
        })}
        </MsSlider>

        <MsSlider>
        {sSliderCards.map((card , index) =>{
          return(
            <Card key ={index} showHead = {card.showHead}  SecondHeading ={card.SecondHeading} Paragraph={card.Paragraph} showBtn ={card.showBtn}/>
          )
        })}
        </MsSlider>

      <Footer
        imag="/assets/icons/logo.svg"
        icona="/assets/icons/facebook.svg"
      ></Footer>
    </>
  );
}

export default App;
