import "./About.css";
import HeroAbout from "../../components/HeroAbout/HeroAbout";
import Values from "../../components/Values/Values";
import ClientReview from "../../components/ClientReview/ClientReview";
import SectionOut from "../../components/SectionOut/SectionOut";
import EstateinTeam from "../../components/EstateinTeam/EstateinTeam";
import EstateinExperience from "../../components/EstateinExperience/EstateinExperience";
import EstateinsWorld from "../../components/EstateinsWorld/EstateinsWorld";
import useScrollToHash from "../../hooks/scroll";

function About() {
  useScrollToHash();

  return (
    <section className="AM-allSectionAb white-spacing">
      <header className="AM-heroAb">
        <HeroAbout />
      </header>
      <main className="AM-MainContentAb">
        <Values />
        <SectionOut />
        <EstateinExperience />
        <EstateinTeam />
        <ClientReview />
      </main>
    </section>
  );
}

export default About;
