import "./CardServices.css";

function CardServices({ image, title, description }) {
  return (
    <div className="AM-cardSe ">
      <div className="AM-informationsSe">
        <img src={image} alt="icon" />
        <h2 className="msFontSize24 msFontWeight600 mswhiteColor">{title}</h2>
      </div>

      <p className="msFontSize18 msFontWeight500 msGrayColor">{description}</p>
    </div>
  );
}

export default CardServices;
