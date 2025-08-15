import "./ServiceCard.css";
function ServicCard({ logo, alt, titleService }) {
  return (
    <div className="MF-serviceCard">
      <img
        src="/assets/icons/arrowTop.svg"
        alt="arrowTop"
        className="MF-arrowTop"
      ></img>

      <img src={logo} alt={alt} className="MF-serviceLogo" />

      <p className="mswhiteColor">{titleService}</p>
    </div>
  );
}

export default ServicCard;
