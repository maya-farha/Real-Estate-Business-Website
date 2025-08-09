
import './Card.css'

const Card = ({  showStars ,Heading , Paragraph ,Name , Text , showImg ,profileImg , showBtn}) => {
    return (
        <div className='Card'>
            <div className='starsContainer'style={{display : showStars ? "block" : "none"}}>
                <img src="/assets/icons/star-icon.svg" alt="star"/>
                <img src="/assets/icons/star-icon.svg" alt="star"/>
                <img src="/assets/icons/star-icon.svg" alt="star"/>
                <img src="/assets/icons/star-icon.svg" alt="star"/>
                <img src="/assets/icons/star-icon.svg" alt="star"/>
            </div>
            <div className='msTextContainer'>           
                <b className='msFontSize24 msFontWeight600 mswhiteColor'>{Heading}</b>
                <p className='msFontSize18 msFontWeight500 msLineHeight150 mswhiteColor'>{Paragraph}</p>
            </div>
            <div className='msContainer'>
                <img  style={{display : showImg ? "block" : "none"}} src={profileImg} alt="profileImg" />
                <div>
                    <b className='msFontSize20 msFontWeight500 mswhiteColor'>{Name}</b> 
                    <p className='msFontSize18 msFontWeight500 msGrayColor'>{Text}</p>
                </div>
            </div>
            <button className='msBgGrey10 mswhiteColor' style={{display : showBtn ? "block" : "none"}}>Read More</button>
        </div>
    )
}

export default Card
