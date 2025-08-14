import "./ValueCard.css";

function ValueCard({ image, title, description }) {
  return (
    <div className="AM-cardAb">
      <div className="AM-itemAb">
        <div className="AM-itemImg">
          <img src={image} alt="icon" />
        </div>
        <h2 className="msFontSize24 msFontWeight600 mswhiteColor">{title}</h2>
      </div>

      <p className="msFontSize18 msFontWeight500 msGrayColor">{description}</p>
    </div>
  );
}

export default ValueCard;
