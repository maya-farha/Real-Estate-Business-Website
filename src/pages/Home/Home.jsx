import "../../index.css";
import "./Home.css";
import ServiceSection from "../../components/ServiceSection/ServiceSection";
import HeroHome from "../../components/HeroHome/HeroHome";
import ChoiceHome from "../../components/ChoiceHome/ChoiceHome";

import ClientSays from "../../components/ClientSays/ClientSays";
import AskedQuestions from "../../components/AskedQuestions/AskedQuestions";


import BuildingCards from "../../components/BuildingCards/BuildingCards";
import Title from "../../components/Title/Title";


function Home() {
  return (
    <div className="MF-home ">
      <HeroHome></HeroHome>
      <div className="MF-serviceSection">
        <ServiceSection></ServiceSection>
        <ClientSays/>
        <AskedQuestions/>
      </div>
      <div className="AM-FeaturedHo white-spacing">
        <Title
          title="Featured Properties"
          description='Explore our handpicked selection of featured properties. Each listing offers a glimpse into exceptional homes and investments available through Estatein. Click "View Details" for more information.'
          fsDifference="48"
        />
        <BuildingCards />
      </div>
    </div>
  );
}

export default Home;
