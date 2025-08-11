import Button from "../../components/Button/Button";
import Title from "../../components/Title/Title";
import TextContainer from "../../components/TextContainer/TextContainer";
import "../../index.css";
import "./Home.css";
import ServicCard from "../../components/Servic/ServicCard";
import ServiceSection from "../../components/ServiceSection/ServiceSection";
import Dashboard from "../../components/service dashboard";
import StatisticeSection from "../../components/StatisticsSection/StatisticeSection";
import Footer from "../../components/Footer/Footer";
function Home() {
  return (
    <div className="mf-home ">
      <div className="hero">
        <div className="mf-hero-content">
          <Title
            title="Discover Your Dream Property with Estatein"
            description="Your journey to finding the perfect property begins here. Explore our listings to find the home that matches your dreams."
            fsDifference="60"
          />
          <div className="mf-buttons">
            <Button className="mf-btn-black">Learn More</Button>
            <Button className="mf-btn-purble">Browse Properties</Button>
          </div>
          <div>
            <StatisticeSection></StatisticeSection>
          </div>
        </div>
        <div className="hero-img">
          <img src="/assets/imgs/hero-img.png" alt="hero-img"></img>
        </div>
      </div>
      <div className="mf-ServiceSection">
        <ServiceSection></ServiceSection>
      </div>
    </div>
  );
}

export default Home;
