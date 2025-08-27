import BranchTitle from "../BranchTitle/BranchTitle";
import CardServices from "../CardServices/CardServices";
import Title from "../Title/Title";
import "./UnlockProperty.css";

function UnlockProperty({ title, informations, branchTitle }) {
  return (
    <div className="AM-unlockPropertySe ">
      <Title
        image={title.image}
        title={title.title}
        description={title.description}
        fsDifference={title.fsDifference}
      />
      
      <div className="AM-cardsSe ">
        {informations.map((info, index) => (
          <CardServices
            key={index}
            image={info.image}
            title={info.title}
            description={info.description}
          />
        ))}

        <BranchTitle
          title={branchTitle.title}
          description={branchTitle.description}
        />
      </div>
    </div>
  );
}

export default UnlockProperty;
