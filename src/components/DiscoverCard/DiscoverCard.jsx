import DiscoverButtons from '../DiscoverButtons/DiscoverButtons'
import './DiscoverCard.css'

function DiscoverCard(props) {
  return (
    <div className='RJ-discoverCard'>
        <div className='RJ-discoversubContainer'>
            <p className='RJ-discoverParagh'>{props.paragh}</p>
            <h2 className='RJ-discoverTitli'>{props.titli}</h2>
            <p className='RJ-discoverParagh2'>{props.paragh2}</p>
        </div>
        <div className='RJ-containerBtn'>
        <DiscoverButtons image="assets/icons/email.svg"
        text="info@estatein.com" />
         <DiscoverButtons image="assets/icons/call.svg"
        text="+1 (123) 456-7890" />
         <DiscoverButtons image="assets/icons/location.svg"
        text="Metropolis" />

        </div>

        <button className='RJ-discoverButon'>{props.button}</button>
      
    </div>
  )
}

export default DiscoverCard

