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
    <div className="AM-about white-spacing">
      <div className="AM-heroAb" id="ourStory">
        <HeroAbout />
      </div>

      <div className="sectionSpace" id="ourWork">
        <Values />
      </div>

      <div className="sectionSpace" id="howWork">
        <SectionOut />
      </div>

      <div className="sectionSpace">
        <EstateinExperience></EstateinExperience>
      </div>
      <div id="ourTeam">
        <EstateinTeam></EstateinTeam>
      </div>

      <div className="sectionSpace" id="ourClient">
        <ClientReview></ClientReview>
      </div>
    </div>
  );
}

export default About;
