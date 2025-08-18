
import './Card.css'

const Card = ({ showHead, SecondHeading, showStars ,Heading , Paragraph ,Name , Text , showImg ,profileImg , showBtn}) => {
    return (
        <div className='MS-card'>
            <b className='msFontSize24 msFontWeight600 mswhiteColor MS_maxWidth'style={{display : showHead ? "inline-block" : "none"}}>{SecondHeading}</b>
            <div className='MS-starsContainer'style={{display : showStars ? "block" : "none"}}>
                <img src="/assets/icons/star-icon.svg" alt="star"/>
                <img src="/assets/icons/star-icon.svg" alt="star"/>
                <img src="/assets/icons/star-icon.svg" alt="star"/>
                <img src="/assets/icons/star-icon.svg" alt="star"/>
                <img src="/assets/icons/star-icon.svg" alt="star"/>
                
            </div>
            <div className='MS-textContainer'>           
                <b className='msFontSize24 msFontWeight600 mswhiteColor'>{Heading}</b>
                <p className='msFontSize18 msFontWeight500 msLineHeight150 mswhiteColor'>{Paragraph}</p>
            </div>
            <div className='MS-informationContainer' style={{display : showImg ? "block" : "none"}}>
                <div className='MS-container'>
                    <img src={profileImg} alt="profileImg" />
                    <div className='raa'>
                        <b className='msFontSize20 msFontWeight500 mswhiteColor'>{Name}</b> 
                        <p className='msFontSize18 msFontWeight500 msGrayColor'>{Text}</p>
                    </div>
                </div>
            </div>
            <button className='msBgGrey10 mswhiteColor' style={{display : showBtn ? "block" : "none"}}>Read More</button>
        </div>
    )
}

export default Card
