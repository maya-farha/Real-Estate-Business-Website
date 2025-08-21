

import TeamCardContainer from '../TeamCardContainer/TeamCardContainer'
import Title from '../Title/Title'
import './EstateinTeam.css'



const EstateinTeam = () => {
    return (
        <div >
            <Title title ="Meet the Estatein Team"
            description = "At Estatein, our success is driven by the dedication and expertise of our team. Get to know the people behind our mission to make your real estate dreams a reality."
            fsDifference = "48px"/>
            <TeamCardContainer/>
        </div>
    )
}

export default EstateinTeam
