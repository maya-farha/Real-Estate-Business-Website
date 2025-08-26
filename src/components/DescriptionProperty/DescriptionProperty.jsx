import PropertyInformation from "../PropertyInformation/PropertyInformation";
import "./DescriptionProperty.css";

function DescriptionProperty({
  Heading,
  Paragraph,
  Bedrooms,
  Bathrooms,
  SquareFeet,
}) {
  return (
    <div className="MS-descriptionProperty">
      <p className="msFontSize24 msFontWeight600 mswhiteColor">{Heading}</p>
      <span className="msFontSize18 msFontWeight500 msLineHeight150 msGrayColor">
        {Paragraph}
      </span>
      <div className="MS-informationContainer">
        <div className="MS-paddingRight MS-paddingRightSmallScreen">
          <PropertyInformation
            heading="Bedrooms"
            pictureLink="/assets/icons/bedroom-Icon.svg"
            text={Bedrooms}
          />
        </div>
        <div className="MS-borderPaddingLeft MS-paddingRight MS-paddingBorderLeftSmallScreen ">
          <PropertyInformation
            heading="Bathrooms"
            pictureLink="/assets/icons/bathroom-Icon.svg"
            text={Bathrooms}
          />
        </div>
        <div className="MS-borderPaddingLeft MS-width">
          <PropertyInformation
            heading="Area"
            pictureLink="/assets/icons/Area-Icon.svg"
            text={SquareFeet}
          />
        </div>
      </div>
    </div>
  );
}

export default DescriptionProperty;

/*       <DescriptionProperty Heading="Description"  
    Paragraph="Discover your own piece of paradise with the Seaside Serenity Villa. T With an open floor plan, breathtaking ocean views from every room, and direct access to a pristine sandy beach, this property is the epitome of coastal living."/> */
