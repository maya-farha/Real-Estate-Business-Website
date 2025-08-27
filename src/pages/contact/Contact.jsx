import "./Contact.css";
import ConnectContainer from "../../components/ConnectContainer/ConnectContainer";
import EstateinsWorld from "../../components/EstateinsWorld/EstateinsWorld.jsx";
import useScrollToHash from "../../hooks/scroll.jsx";
import Title from "../../components/Title/Title.jsx";
import ServiceSection from "../../components/ServiceSection/ServiceSection.jsx";
import OfficeFilter from "../../components/FilterOffice/OfficeFilter.jsx";
function Contact() {
  useScrollToHash();
  const defaultServices = [
    {
      id: crypto.randomUUID(),
      icon: "/assets/icons/emailIcon.png",
      alt: "email-Icon",
      serviceName: "info@estatein.com",
    },
    {
      id: crypto.randomUUID(),
      icon: "/assets/icons/phoneIcon.png",
      alt: "phone-Icon",
      serviceName: "+1 (123) 456-7890",
    },
    {
      id: crypto.randomUUID(),
      icon: "/assets/icons/locationIcon.png",
      alt: "location-Icon",
      serviceName: "Main Headquarters",
    },
    {
      id: crypto.randomUUID(),
      icon: "/assets/icons/linkIcons.png",
      alt: "link-Icon",
      link: [
        {
          url: "https://instagram.com",
          label: "Instagram",
        },
        {
          url: "https://linkedin.com",
          label: "LinkedIn",
        },
        {
          url: "https://facebook.com",
          label: "Facebook",
        },
      ],
    },
  ];
  return (
    <div className="MF-contactPage">
      <header>
        <div className="FM-specialTitleSe">
          <Title
            title="Get in Touch with Estatein"
            description="Welcome to Estatein's Contact Us page. We're here to assist you with any inquiries, requests, or feedback you may have. Whether you're looking to buy or sell a property, explore investment opportunities, or simply want to connect, we're just a message away.
              Reach out to us, and let's start a conversation.."
            fsDifference="48"
            image={false}
          />
          <ServiceSection services={defaultServices}></ServiceSection>
        </div>
      </header>

      <main className="MF-allSectionCo   white-spacing">
        <section id="contactForm">
          <ConnectContainer />
        </section>

        <section id="ourOffices">
          <Title
            title="Discover Our Office Locations"
            description="Estatein is here to serve you across multiple locations. Whether you're looking to meet our team, discuss real estate opportunities, or simply drop by for a chat, we have offices conveniently located to serve your needs. Explore the categories below to find the Estatein office nearest to you"
            fsDifference="48"
          />
          <div className="MF-officeFilterType">
            <OfficeFilter></OfficeFilter>
          </div>
        </section>
        <section id="">
          <EstateinsWorld />
        </section>
      </main>
    </div>
  );
}

export default Contact;
