import "./Title.css";
function Title({ title, description, fsDifference, image = true }) {
  return (
    <div className="AM-titleWidth">
      {image && <img src="https://maya-farha.github.io/Real-Estate-Business-Website/assets/icons/stars-design.svg" alt="stars design" />}
      <h1 className={`msFontSize${fsDifference} msFontWeight600 mswhiteColor `}>
        {title}
      </h1>
      <p className="msFontSize18 msFontWeight500 msGrayColor ">{description}</p>
    </div>
  );
}

export default Title;
