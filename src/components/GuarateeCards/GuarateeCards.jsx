import './GuarateeCards.css'

function GuarateeCards(props) {
  return (
    <div className='RJ-guaranteeCards'>
    <img src='/assets/icons/gurataee.svg' className='RJ-guaratee-Icon'/>
    <p className='RJ-guarateeParaghraf'>{props.paraghraf}</p>

    </div>
  )
}

export default GuarateeCards
