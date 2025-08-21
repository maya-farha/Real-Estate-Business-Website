import "./BranchTitle.css";
import Button from "../Button/Button";

function BranchTitle({ title, description }) {
  return (
    <div className="AM-branchTitleSe">
      <div className="AM-infoSe">
        <h2 className="msFontSize30 msFontWeight700 mswhiteColor">{title}</h2>
        <Button children="Learn More" className="mf-btn-black" />
      </div>
      <p className="msFontSize18 msFontWeight500 msGrayColor msLineHeight150">
        {description}
      </p>
    </div>
  );
}

export default BranchTitle;
