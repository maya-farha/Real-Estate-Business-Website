import "./ChoiceHome.css";
import Button from "../Button/Button";

function ChoiceHome({
  id,
  image,
  title,
  descreption,
  bedroom,
  bathroom,
  type,
  price,
}) {
  return (
    <div className="amCardBorder">
      <div className="amImage">
        <img src={image} alt="home" />
      </div>
      <h2 className="msFontSize24 msFontWeight600 mswhiteColor">{title}</h2>
      <p className="desc msFontWeight500 msFontSize18 msGrayColor ">
        {descreption}
      </p>
      <div className="amInformation ">
        <div className="amInfo ">
          <img src="/assets/icons/bedroom-Icon.svg" alt="bedroom-icon" />
          <span className="msFontSize18 msFontWeight500 msWhiteColor">
            {bedroom}-Bedroom
          </span>
        </div>
        <div className="amInfo">
          <img src="/assets/icons/bathroom-Icon.svg" alt="bathroom-icon" />
          <span className="msFontSize18 msFontWeight500 msWhiteColor">
            {bathroom}-Bathroom
          </span>
        </div>
        <div className="amInfo">
          <img src="/assets/icons/villa.svg" alt="villa-icon" />
          <span className="msFontSize18 msFontWeight500 msWhiteColor">
            {type}
          </span>
        </div>
      </div>
      <div className="amDetails">
        <div className="amPrice">
          <p className="msFontWeight500 msFontSize18 msGrayColor">Price</p>
          <p className="msFontWeight600 msFontSize24 msWhiteColor">
            &#36;{price}
          </p>
        </div>
        <Button
          children="View Property Details"
          to={`/property/${id}`}
          className="mf-btn-purble-p54"
        />
      </div>
    </div>
  );
}

export default ChoiceHome;
