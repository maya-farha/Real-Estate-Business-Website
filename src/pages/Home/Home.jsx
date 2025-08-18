import "../../index.css";
import "./Home.css";
import ServiceSection from "../../components/ServiceSection/ServiceSection";

import HeroHome from "../../components/HeroHome/HeroHome";
import ClientSays from "../../components/ClientSays/ClientSays";
import AskedQuestions from "../../components/AskedQuestions/AskedQuestions";


function Home() {
  return (
    <div className="MF-home ">
      <HeroHome></HeroHome>
      <div className="MF-serviceSection">
        <ServiceSection></ServiceSection>
        <ClientSays/>
        <AskedQuestions/>
      </div>
    </div>
  );
}

export default Home;
