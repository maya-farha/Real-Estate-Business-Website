import Title from "../Title/Title";
import ValueCards from "../ValueCards/ValueCards";
import "./Values.css";

function Values() {
  return (
    <div className="AM-valuesAb">
      <div className="AM-valueAb">
        <Title
          title="Our Values"
          description="Our story is one of continuous growth and evolution. We started as a small team with big dreams, determined to create a real estate platform that transcended the ordinary."
          fsDifference="48"
        />
      </div>
      <div className="AM-valueCard">
        <ValueCards />
      </div>
    </div>
  );
}

export default Values;
