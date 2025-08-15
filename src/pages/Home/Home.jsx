<<<<<<< HEAD
import Title from "../../components/Title/Title";
import BuildingCards from "../../components/BuildingCards/BuildingCards";
function Home() {
  return (
    <div className="hero">
      <Title title="" description="" fsDifference="" />
      <BuildingCards></BuildingCards>
=======
import "../../index.css";
import "./Home.css";
import ServiceSection from "../../components/ServiceSection/ServiceSection";
import HeroHome from "../../components/HeroHome/HeroHome";
function Home() {
  return (
    <div className="MF-home ">
      <HeroHome></HeroHome>
      <div className="MF-serviceSection">
        <ServiceSection></ServiceSection>
      </div>
>>>>>>> master
    </div>
  );
}

export default Home;
