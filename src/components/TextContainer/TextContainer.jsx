
import './TextContainer.css'

const TextContainer = ({heading , Paragraph}) => {
    return (
            <div className='textContainer msBgGrey10'>
                <b className='msFontSize40 msFontWeight700 mswhiteColor'>{heading}</b>
                <span className='msFontSize18 msFontWeight500 msGrayColor'>{Paragraph} </span>
            </div>
    )
}

export default TextContainer