import AchievementCard from '../AchievementCard/AchievementCard'
import OutContainer  from '../OutContainer/OutContainer'
import Title from '../Title/Title'

import './SectionOut.css'


function SectionOut(props) {
  return (
    <div className='RJ-sectionContainer' style={{backgroundColor: "#141414"}}>
        <div className='RJ-textContainer'>
                <Title
                        title="Our Achievements"
                        description="Our story is one of continuous growth and evolution. We started as a small team with big dreams, determined to create a real estate platform that transcended the ordinary."
                        fsDifference="48"/>
                
        </div>
        <OutContainer>
            <AchievementCard  htitle="3+ Years of Excellence" 
                    pdis="With over 3 years in the industry, we've amassed a wealth of knowledge and experience, becoming a go-to resource for all things real estate." >

            </AchievementCard>


            <AchievementCard  htitle="Happy Clients"
                    pdis="Our greatest achievement is the satisfaction of our clients. Their success stories fuel our passion for what we do." >

            </AchievementCard>

            <AchievementCard  htitle="Industry Recognition" 
                    pdis="We've earned the respect of our peers and industry leaders, with accolades and awards that reflect our commitment to excellence." >

            </AchievementCard>
            </OutContainer>




       

      
    </div>
  )
}

export default SectionOut
