import "./TextContainer.css";
import "../../index.css";

const TextContainer = ({ heading, Paragraph }) => {
  return (
    <div className="textContainer">
      <b className="msFontSize40 msFontWeight700 mswhiteColor">{heading}</b>
      <span className="msFontSize18 msFontWeight500 msGrayColor">
        {Paragraph}
      </span>
    </div>
  );
};

export default TextContainer;
