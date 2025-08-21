import DiscoverCard from '../DiscoverCard/DiscoverCard'
import './DiscoverContainer.css'

function DiscoverContainer() {
  return (
    <div className='RJ-discoverContainer'>
        <DiscoverCard   paragh='Main Headquarters' 
                         titli="123 Estatein Plaza, City Center, Metropolis" 
                         paragh2="Our main headquarters serve as the heart of Estatein. Located in the bustling city center, this is where our core team of experts operates, driving the excellence and innovation that define us."
                         button="Get Direction"    >


        </DiscoverCard>

        <DiscoverCard   paragh='Regional Offices' 
                         titli="456 Urban Avenue, Downtown District, Metropolis" 
                         paragh2="Estatein's presence extends to multiple regions, each with its own dynamic real estate landscape. Discover our regional offices, staffed by local experts who understand the nuances of their respective markets."
                         button="Get Direction"    >


        </DiscoverCard>
      
    </div>
  )
}

export default DiscoverContainer
