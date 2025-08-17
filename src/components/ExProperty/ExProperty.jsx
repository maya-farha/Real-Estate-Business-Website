import Button from "../Button/Button";
import Title from "../Title/Title";

import "./ExProperty.css";

function ExProperty() {
  return (
    <>
      <div className="amInformations white-spacing">
        <div className="amInfoCard">
          <Title
            title="Start Your Real Estate Journey Today"
            description="Your dream property is just a click away. Whether you're looking for a new home, a strategic investment, or expert real estate advice, Estatein is here to assist you every step of the way. Take the first step towards your real estate goals and explore our available properties or get in touch with our team for personalized assistance."
            fsDifference="48"
          />
        </div>
        <div>
          <Button
            children="Explore Properties"
            to="/property"
            className="mf-btn-purble-p54"
          />
        </div>
      </div>
    </>
  );
}

export default ExProperty;
