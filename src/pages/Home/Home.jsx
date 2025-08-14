import Button from "../../components/Button/Button";
import Title from "../../components/Title/Title";
import "../../index.css";
import "./Home.css";
import ServiceSection from "../../components/ServiceSection/ServiceSection";
import StatisticeSection from "../../components/StatisticsSection/StatisticeSection";
function Home() {
  return (
    <div className="MF-home ">
      <div className="MF-hero">
        <div className="MF-heroContent">
          <div className="MF-heroTitle">
            <Title
              title="Discover Your Dream Property with Estatein"
              description="Your journey to finding the perfect property begins here. Explore our listings to find the home that matches your dreams."
              fsDifference="60"
            />
          </div>

          <div className="MF-buttons">
            <Button className="mf-btn-black">Learn More</Button>
            <Button className="mf-btn-purble">Browse Properties</Button>
          </div>

          <div>
            <StatisticeSection></StatisticeSection>
          </div>
        </div>

        <div className="MF-heroImg">
          <img src="/assets/imgs/hero-img.png" alt="hero-img"></img>
        </div>
      </div>

      <div className="MF-serviceSection">
        <ServiceSection></ServiceSection>
      </div>

    </div>
  );
}

export default Home;
