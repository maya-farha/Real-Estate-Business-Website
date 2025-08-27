import './GuarateeCards.css'

function GuarateeCards(props) {
  return (
    <div className='RJ-guaranteeCards'>
    <img src='https://maya-farha.github.io/Real-Estate-Business-Website/assets/icons/gurataee.svg' className='RJ-guaratee-Icon'/>
    <p className='RJ-guarateeParaghraf'>{props.paraghraf}</p>

    </div>
  )
}

export default GuarateeCards
