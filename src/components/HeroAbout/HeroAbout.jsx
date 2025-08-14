import "./HeroAbout.css";
import Title from "../Title/Title";
import StatisticeSection from "../StatisticsSection/StatisticeSection";

function HeroAbout() {
  return (
    <div className="AM-informationAb">
      <div className="AM-infoAb">
        <div className="AM-titleAb">
          <Title
            title="Our Journey"
            description="Our story is one of continuous growth and evolution. We started as a small team with big dreams, determined to create a real estate platform that transcended the ordinary. Over the years, we've expanded our reach, forged valuable partnerships, and gained the trust of countless clients."
            fsDifference="48"
          />
        </div>

        <StatisticeSection />
      </div>
      <div className="AM-imgHeroAb">
        <img src="assets/imgs/imageHeroAbout.png" alt="home" />
      </div>
    </div>
  );
}

export default HeroAbout;
