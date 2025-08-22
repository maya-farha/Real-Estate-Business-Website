import BranchTitle from "../BranchTitle/BranchTitle";
import BranchTitle2 from "../BranchTitle2/BranchTitle2";
import CardServices from "../CardServices/CardServices";
import Title from "../Title/Title";
import "./AllCardServices.css";

function AllCardServices() {
  const content = [
    {
      image: "/assets/icons/Icon-Market.svg",
      title: "Market Insight",
      description:
        "Stay ahead of market trends with our expert Market Analysis. We provide in-depth insights into real estate market conditions",
    },
    {
      image: "/assets/icons/Icon-ROI.svg",
      title: "ROI Assessment",
      description:
        "Make investment decisions with confidence. Our ROI Assessment services evaluate the potential returns on your investments",
    },
    {
      image: "/assets/icons/Icon-Customized.svg",
      title: "Customized Strategies",
      description:
        "Every investor is unique, and so are their goals. We develop Customized Investment Strategies tailored to your specific needs",
    },
    {
      image: "/assets/icons/Icon-legal.svg",
      title: "Diversification Mastery",
      description:
        "Diversify your real estate portfolio effectively. Our experts guide you in spreading your investments across various property types and locations",
    },
  ];
  return (
    <div className="AM-investmentSe">
      <div className="AM-informationSe">
        <Title
          title="Smart Investments, Informed Decisions"
          description="Building a real estate portfolio requires a strategic approach. Estatein's Investment Advisory Service empowers you to make smart investments and informed decisions."
          fsDifference="48"
        />
        <BranchTitle2
          title="Unlock Your Investment Potential"
          description="Explore our Property Management Service categories and let us handle the complexities while you enjoy the benefits of property ownership."
        />
      </div>
      <div className="AM-AllCardsSe">
        {content.map((item, index) => (
          <CardServices
            className="AM-cardSe"
            key={index}
            image={item.image}
            title={item.title}
            description={item.description}
          />
        ))}
      </div>
    </div>
  );
}

export default AllCardServices;
