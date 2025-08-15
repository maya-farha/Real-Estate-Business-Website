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
    </div>
  );
}

export default Home;
