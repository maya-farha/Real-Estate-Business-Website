import './AchievementCard.css'

function AchievementCard(props) {
  return (
    <div className='RJ-outContainer'>
        <h2 className='RJ-outTitle'>{props.htitle}</h2>
        <p className='RJ-outDis'>{props.pdis}</p>
       
    </div>
    
  )
}

export default AchievementCard
