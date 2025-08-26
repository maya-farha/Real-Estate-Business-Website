import Title from '../Title/Title'
import './EstateinsWorld.css'




function EstateinsWorld() {
    return (
        <div className='MS-estateinsWorld msBgGrey10'>
            <img src="/assets/imgs/office.png" alt="office" className='MS-bigPicture' />
            <img src="/assets/imgs/first-team.png" alt="team" className='MS-bigPicture'/>
            <img src="/assets/imgs/meeting.png" alt="meeting" className='MS-bigPicture'/>
            <div>
                <img src="/assets/imgs/second-team.png" alt="team" className='MS-smallPicture'/>
                <img src="/assets/imgs/third-team.png" alt="team" className='MS-smallPicture'/>
            </div>
            <div className='MS-maxWidth'> <Title title ="Explore Estatein's World"
            description = "Step inside the world of Estatein, where professionalism meets warmth, and expertise meets passion. Our gallery offers a glimpse into our team and workspaces, inviting you to get to know us better."
            fsDifference = "48px"/>
            </div>
            <img src="/assets/imgs/deal.png" alt="business deal" id="MS-width" className='MS-bigPicture'/>
        </div>
    )
}

export default EstateinsWorld
