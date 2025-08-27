
import TeamCard from '../TeamCard/TeamCard'
import './TeamCardContainer.css'



const TeamCardContainer = () => {
    return (
    <div className='MS-teamCardContainer'>
        <TeamCard profile = 'assets/imgs/Max-Mitchell.png' Name = "Max Mitchell" Role = "Founder" />
        <TeamCard profile = 'assets/imgs/Sarah-Johnson.png' Name = "Sarah Johnson" Role = "Chief Real Estate Officer" />
        <TeamCard profile = 'assets/imgs/David-Brown.png' Name = "David Brown" Role = "Head of Property Management" />
        <TeamCard profile = 'assets/imgs/Michael-Turner.png' Name = "Michael Turner" Role = "Legal Counsel" />
    </div>
    )
}

export default TeamCardContainer
