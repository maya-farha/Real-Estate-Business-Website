import "./About.css";
import HeroAbout from "../../components/HeroAbout/HeroAbout";
import Values from "../../components/Values/Values";
import ClientReview from "../../components/ClientReview/clientReview";
import SectionOut from "../../components/SectionOut/SectionOut";
function About() {
  return (
    <div className="AM-about white-spacing">
      <div className="AM-heroAb">
        <HeroAbout />
      </div>

      <div className="sectionSpace">
        <Values />
      </div>
      <div className="RJ-sectionOut">
        <SectionOut />
      </div>

      <div className="sectionSpace">
        <ClientReview></ClientReview>
      </div>
    </div>
  );
}

export default About;
