import "./Service.css";

import UnlockProperty from "../../components/UnlockProperty/UnlockProperty";
import AllCardServices from "../../components/AllCardServices/AllCardServices";
import ServiceSection from "../../components/ServiceSection/ServiceSection";
import Title from "../../components/Title/Title";

function Service() {
  const title1 = {
    image: "/assets/icons/stars-design.svg",
    title: "Unlock Property Value",
    description:
      "Selling your property should be a rewarding experience, and at Estatein, we make sure it is. Our Property Selling Service is designed to maximize the value of your property, ensuring you get the best deal possible. Explore the categories below to see how we can help you at every step of your selling journey",
    fsDifference: "48",
  };
  const title2 = {
    image: "/assets/icons/stars-design.svg",
    title: "Effortless Property Management",
    description:
      "Owning a property should be a pleasure, not a hassle. Estatein's Property Management Service takes the stress out of property ownership, offering comprehensive solutions tailored to your needs. Explore the categories below to see how we can make property management effortless for you",
    fsDifference: "48",
  };
  const info_1 = [
    {
      image: "/assets/icons/Icon-valuation.svg",
      title: "Valuation Mastery",
      description:
        "Discover the true worth of your property with our expert valuation services.",
    },
    {
      image: "/assets/icons/Icon-marketing.svg",
      title: "Strategic Marketing",
      description:
        "Selling a property requires more than just a listing; it demands a strategic marketing.",
    },
    {
      image: "/assets/icons/Icon-negotiation.svg",
      title: "Negotiation Wizardry",
      description:
        "Negotiating the best deal is an art, and our negotiation experts are masters of it.",
    },
    {
      image: "/assets/icons/Icon-closing.svg",
      title: "Closing Success",
      description:
        "A successful sale is not complete until the closing. We guide you through the intricate closing process.",
    },
  ];
  const info_2 = [
    {
      image: "/assets/icons/Icon-tenant.svg",
      title: "Tenant Harmony",
      description:
        "Our Tenant Management services ensure that your tenants have a smooth and reducing vacancies.",
    },
    {
      image: "/assets/icons/Icon-maintenance.svg",
      title: "Maintenance Ease",
      description:
        "Say goodbye to property maintenance headaches. We handle all aspects of property upkeep.",
    },
    {
      image: "/assets/icons/Icon-financial.svg",
      title: "Financial Peace of Mind",
      description:
        "Managing property finances can be complex. Our financial experts take care of rent collection",
    },
    {
      image: "/assets/icons/Icon-legal.svg",
      title: "Legal Guardian",
      description:
        "Stay compliant with property laws and regulations effortlessly.",
    },
  ];
  const branchT1 = {
    title: "Unlock the Value of Your Property Today",
    description:
      "Ready to unlock the true value of your property? Explore our Property Selling Service categories and let us help you achieve the best deal possible for your valuable asset.",
  };
  const branchT2 = {
    title: "Experience Effortless Property Management",
    description:
      "Ready to experience hassle-free property management? Explore our Property Management Service categories and let us handle the complexities while you enjoy the benefits of property ownership.",
  };
  return (
    <section className="AM-allSectionSe">
      <header>
        <div className="AM-specialTitleSe">
          <Title
            title="Elevate Your Real Estate Experience"
            description="Welcome to Estatein, where your real estate aspirations meet expert guidance. Explore our comprehensive range of services, each designed to cater to your unique needs and dreams."
            fsDifference="48"
            image={false}
          />
        </div>

        <ServiceSection />
      </header>

      <section className="AM-mainContentSe white-spacing">
        <UnlockProperty
          informations={info_1}
          title={title1}
          branchTitle={branchT1}
        />
        <UnlockProperty
          informations={info_2}
          title={title2}
          branchTitle={branchT2}
        />
        <AllCardServices />
      </section>
    </section>
  );
}

export default Service;
