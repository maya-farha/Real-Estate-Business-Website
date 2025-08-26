import "../../index.css";
import "./Home.css";
import ServiceSection from "../../components/ServiceSection/ServiceSection";
import HeroHome from "../../components/HeroHome/HeroHome";
import ChoiceHome from "../../components/ChoiceHome/ChoiceHome";

import ClientSays from "../../components/ClientSays/ClientSays";
import AskedQuestions from "../../components/AskedQuestions/AskedQuestions";

import BuildingCards from "../../components/BuildingCards/BuildingCards";
import Title from "../../components/Title/Title";
import useScrollToHash from "../../hooks/scroll";

function Home() {
  useScrollToHash();

  return (
    <section className="MF-allSectionHo">
      <header>
        <HeroHome />
      </header>
      <main className="AM-MainContentHo">
        <ServiceSection />
        <div className="AM-FeaturedHo white-spacing" id="featured">
          <Title
            title="Featured Properties"
            description='Explore our handpicked selection of featured properties. Each listing offers a glimpse into exceptional homes and investments available through Estatein. Click "View Details" for more information.'
            fsDifference="48"
          />
          <BuildingCards />
        </div>
        <div className="MS-serviceSection white-spacing">
          <ClientSays />
          <AskedQuestions />
        </div>
      </main>
    </section>
  );
}

export default Home;
