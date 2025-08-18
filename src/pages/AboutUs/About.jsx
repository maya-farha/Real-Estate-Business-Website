import "./About.css";
import HeroAbout from "../../components/HeroAbout/HeroAbout";
import Values from "../../components/Values/Values";
import ClientReview from "../../components/ClientReview/ClientReview";
import SectionOut from "../../components/SectionOut/SectionOut";
import EstateinTeam from "../../components/EstateinTeam/EstateinTeam";
import EstateinExperience from "../../components/EstateinExperience/EstateinExperience";
function About() {
  return (
    <div className="AM-about white-spacing">
      <div className="AM-heroAb">
        <HeroAbout />
      </div>

      <div className="sectionSpace">
        <Values />
      </div>

      <div className="sectionSpace">
        <SectionOut />
      </div>

      <div className="sectionSpace">
        <EstateinExperience></EstateinExperience>
      </div>

      <EstateinTeam></EstateinTeam>

      <div className="sectionSpace">
        <ClientReview></ClientReview>
      </div>
    </div>
  );
}

export default About;
