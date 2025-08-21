import "./BranchTitle2.css";
import Button from "../Button/Button";

function BranchTitle2({ title, description }) {
  return (
    <div className="AM-branchTitle2Se">
      <h2 className="msFontSize24 msFontWeight600 mswhiteColor">{title}</h2>
      <p className="msFontSize18 msFontWeight500 msGrayColor msLineHeight150">
        {description}
      </p>
      <Button children="Learn More" className="mf-btn-black" />
    </div>
  );
}

export default BranchTitle2;
