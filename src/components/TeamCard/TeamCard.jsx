
import './TeamCard.css'


const TeamCard = ({profile , xLink , Name , Role , telegramLink }) => {
    return (
        <div className='MS-teamCard'>

            <div className='MS-information'>
                <img src={profile} alt="profile-picture" className='MS-profile' />
                <a href={xLink}>
                    <button className='MS-xButton'> 
                        <img src="assets/icons/x-logo.svg" alt="x-logo" />
                    </button>
                </a>
            </div>

            <div className='MS-container'>
                <p className='msFontSize24 msFontWeight600 mswhiteColor'>{Name}</p>
                <span className='msFontSize18 msFontWeight500 msGrayColor'>{Role}</span>
                <div className='MS-contactBtn'> 
                    <p className='msFontSize18 msFontWeight500 mswhiteColor'>Say Hello 👋</p>
                    <a href={telegramLink}>
                        <button> 
                            <img src="assets/icons/Send.svg" alt="send-logo" />
                        </button>
                    </a> 
                </div>
                
            </div>
        </div>
    )
}

export default TeamCard
