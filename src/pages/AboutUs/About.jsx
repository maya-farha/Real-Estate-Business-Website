import "./About.css";
import HeroAbout from "../../components/HeroAbout/HeroAbout";
import Values from "../../components/Values/Values";
import ClientReview from "../../components/ClientReview/ClientReview";
import SectionOut from "../../components/SectionOut/SectionOut";
import EstateinTeam from "../../components/EstateinTeam/EstateinTeam";
import EstateinExperience from "../../components/EstateinExperience/EstateinExperience";
import useScrollToHash from "../../hooks/scroll";

function About() {
  useScrollToHash();

  return (
    <section className="AM-allSectionAb white-spacing">
      <header className="AM-heroAb" id="ourStory">
        <HeroAbout />
      </header>
      <main className="AM-MainContentAb">
        <div id="ourWork">
          <Values />
        </div>
        <div id="howWork">
          <SectionOut />
        </div>
        <div id="">
          <EstateinExperience />
        </div>
        <div id="ourTeam">
          <EstateinTeam />
        </div>
        <div id="ourClient">
          <ClientReview />
        </div>
      </main>
    </section>
  );
}

export default About;
