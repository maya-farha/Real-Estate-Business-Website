import "./TextContainer.css";
import "../../index.css";

const TextContainer = ({ heading, Paragraph }) => {
  return (
    <div className="textContainer">
      <p className="msFontSize40 msFontWeight700 mswhiteColor">{heading}</p>
      <p className="msFontSize18 msFontWeight500 msGrayColor">{Paragraph}</p>
    </div>
  );
};

export default TextContainer;
