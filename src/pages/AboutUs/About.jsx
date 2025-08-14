import "./About.css";
import HeroAbout from "../../components/HeroAbout/HeroAbout";
import Values from "../../components/Values/Values";

function About() {
  return (
    <div className="AM-about white-spacing">
      <div className="AM-heroAb">
        <HeroAbout />
      </div>

      <Values />
    </div>
  );
}

export default About;
