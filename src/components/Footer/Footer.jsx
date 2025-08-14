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
              { url: "/", cont: "Hero Section" },
              { url: "/about", cont: "Features" },
              { url: "/", cont: "Properties" },
              { url: "/", cont: "Testimonials" },
              { url: "/", cont: "FAQ’s" },
            ]}
          ></FooterCard>

          <FooterCard
            href={"/about"}
            title={"About Us"}
            items={[
              { url: "/", cont: "Our Story" },
              { url: "/", cont: "Our Works" },
              { url: "/", cont: "How It Works" },
              { url: "/", cont: "Our Team" },
              { url: "/", cont: "Our Clients" },
            ]}
          ></FooterCard>

          <FooterCard
            href={"/propertie"}
            title={"Properties"}
            items={[
              { url: "/", cont: "Portfolio" },
              { url: "/", cont: "Categories" },
            ]}
          ></FooterCard>

          <FooterCard
            href={"/services"}
            title={"Services"}
            items={[
              { url: "/", cont: "Valuation Mastery" },
              { url: "/About", cont: "Strategic Marketing" },
              { url: "/Propertie", cont: "Negotiation Wizardry" },
              { url: "/Services", cont: "Closing Success" },
              { url: "/Services", cont: "Property Management" },
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
