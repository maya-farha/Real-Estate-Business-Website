import "./Title.css";

function Title({ title, description, fsDifference }) {
  return (
    <div>
      <h1 className={`msFontSize${fsDifference} msFontWeight600 msWhiteColor`}>
        {title}
      </h1>
      <p className="msFontSize18 msFontWeight500 msGrayColor">{description}</p>
    </div>
  );
}

export default Title;
