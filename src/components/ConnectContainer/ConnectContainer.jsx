import Form from "../Form/Form";
import Title from "../Title/Title";
import "./ConnectContainer.css";

function ConnectContainer() {
  return (
    <div className="MS-connectContainer">
      <Title
        title="Let's Connect"
        description="We're excited to connect with you and learn more about your real estate goals. Use the form below to get in touch with Estatein. Whether you're a prospective client, partner, or simply curious about our services, we're here to answer your questions and provide the assistance you need."
        fsDifference="48"
      />
      <div className="MS-formPlace">
        <Form />
      </div>
    </div>
  );
}

export default ConnectContainer;
