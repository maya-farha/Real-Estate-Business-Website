import "./Title.css";
function Title({ title, description, fsDifference }) {
  return (
    <div className="mf-title-width">
      <img src="/assets/icons/stars-design.svg" alt="stars design" />
      <h1 className={`msFontSize${fsDifference} msFontWeight600 mswhiteColor `}>
        {title}
      </h1>
      <p className="msFontWeight500 msGrayColor ">{description}</p>
    </div>
  );
}

export default Title;
