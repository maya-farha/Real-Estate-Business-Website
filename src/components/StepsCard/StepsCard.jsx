
import './StepsCard.css'


const StepsCard = ({stepNumber , Heading , Paragraph}) => {
    return (
        <div className='MS-StepsCard'>
            <div className='MS-HeadContainer'><p className='msFontSize20 msFontWeight500 mswhiteColor'>step {stepNumber}</p></div>
            <div className='MS-TextContainer'>
                <div className='MS-LinarGradiant'></div>
                <p className='msFontWeight500 mswhiteColor'>{Heading}</p>
                <span className='msFontSize18 msFontWeight500 msLineHeight150 msGrayColor'>{Paragraph}</span>
            </div>
        </div>
    )
}

export default StepsCard
