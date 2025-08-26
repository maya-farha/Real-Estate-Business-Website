import "./Footer.css";
import FooterCard from "../FooterCard/FooterCard";

function Footer(props) {
  return (
    <div className="RJ_Footer  ">
      <div className="RJ_SubFooter  white-spacing">
        <div className="RJ_InputContainer">
          <img src={props.imag} alt="" className="RJ_LogoFooter" />
          <div className="RJ_InputFooter">
            <img src="/assets/icons/Vector.svg" className="RJ_IconVector" />
            <input
              type="email"
              placeholder="Enter Your Email"
              className="RJ_FormInput"
            />
            <img src="/assets/icons/Send.svg" className="RJ_IconSend" />
          </div>
        </div>
        <div className="RJ_CardsFooter">
          <FooterCard
            href={"/"}
            title={"Home"}
            items={[
              { url: "#HeroHome", cont: "Hero Section" },
              { url: "#featured", cont: "Features" },
              { url: "/", cont: "Properties" },
              { url: "#testimonials", cont: "Testimonials" },
              { url: "/", cont: "FAQ’s" },
            ]}
          ></FooterCard>

          <FooterCard
            href={"/about"}
            title={"About Us"}
            items={[
              { url: "/about#ourStory", cont: "Our Story" },
              { url: "/about#ourWork", cont: "Our Works" },
              { url: "/about#howWork", cont: "How It Works" },
              { url: "/about#ourTeam", cont: "Our Team" },
              { url: "/about#ourClient", cont: "Our Clients" },
            ]}
          ></FooterCard>

          <FooterCard
            href={"/propertie"}
            title={"Properties"}
            items={[
              { url: "/property#portfolio", cont: "Portfolio" },
              { url: "/property#categories", cont: "Categories" },
            ]}
          ></FooterCard>

          <FooterCard
            href={"/services"}
            title={"Services"}
            items={[
              { url: "/service#valuationMastery", cont: "Valuation Mastery" },
              {
                url: "/service#strategicMarketing",
                cont: "Strategic Marketing",
              },
              { url: "/service#", cont: "Negotiation Wizardry" },
              { url: "/service", cont: "Closing Success" },
              {
                url: "/service#propertyManagement",
                cont: "Property Management",
              },
            ]}
          ></FooterCard>

          <FooterCard
            href={"/contact"}
            title={"Contact Us"}
            items={[
              { url: "/", cont: "Contact Form" },
              { url: "/About", cont: "Our Offices" },
            ]}
          ></FooterCard>
        </div>
      </div>
      <div className="RJ_FinalFooter white-spacing">
        <div className="RJ_DisFooter">
          <p>@2023 Estatein. All Rights Reserved.</p>
          <p>Terms & Conditions</p>
        </div>
        <div className="RJ_MediaFooter ">
          <img src="/assets/icons/facebook.svg" />
          <img src="/assets/icons/insta.svg" />
          <img src="/assets/icons/twiter.svg" />
          <img src="/assets/icons/youtup.svg" />
        </div>
      </div>
    </div>
  );
}

export default Footer;
