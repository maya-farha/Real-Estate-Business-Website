import Button from "../Button/Button";
import "./MonthlyCosts.css";

function MonthlyCosts() {
  return (
    <div className="AM-MonthlyCostsPr mswhiteColor">
      <div className="AM-costsPr">
        <h2 className="msFontWeight600 msFontSize24">Monthly Costs</h2>
        <Button children="Learn More" to="" className="AM-btnPr mf-btn-black" />
      </div>
      <div className="AM-taxesPr">
        <p className="msFontSize18 msGrayColor msFontWeight500">
          Property Taxes
        </p>
        <div className="AM-taxPr">
          <h2 className="msFontWeight600 msFontSize24">$1,250</h2>
          <p className="msFontSize18 msGrayColor msFontWeight500">
            Approximate monthly property tax based on the sale price and local
            rates
          </p>
        </div>
      </div>
      <div className="AM-feesPr">
        <p className="msFontSize18 msGrayColor msFontWeight500">
          Homeowners' Association Fee
        </p>
        <div className="AM-feePr">
          <h2 className="msFontWeight600 msFontSize24">$300</h2>
          <p className="msFontSize18 msGrayColor msFontWeight500">
            Monthly fee for common area maintenance and security
          </p>
        </div>
      </div>
    </div>
  );
}

export default MonthlyCosts;
