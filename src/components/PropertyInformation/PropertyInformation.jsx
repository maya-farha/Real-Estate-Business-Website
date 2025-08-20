
import './PropertyInformation.css'



function PropertyInformation({heading , pictureLink , text}) {
    return (
        <div className='MS-propertyInformation '>
            <span className='msFontSize18 msFontWeight500 msGrayColor'><img src={pictureLink} alt="" />{heading}</span>
            <p className='msFontSize24 msFontWeight600 mswhiteColor'>{text}</p>
        </div>
    )
}

export default PropertyInformation
