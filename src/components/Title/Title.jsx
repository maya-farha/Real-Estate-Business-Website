import "./Title.css";
function Title({ title, description, fsDifference }) {
  return (
    <div className='mf-title-width'>
      <h1 className={`msFontSize${fsDifference} msFontWeight600 mswhiteColor `}>
        {title}
      </h1>
      <p className="msFontWeight500 msGrayColor ">{description}</p>
    </div>
  );
}

export default Title;
