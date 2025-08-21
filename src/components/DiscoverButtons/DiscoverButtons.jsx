import './DiscoverButtons.css'

function DiscoverButtons(props) {
  return (
    <div className='RJ-discoverButtons'>
          <button className='RJ-discoverBtn'><img src={props.image} alt=''  className='RJ-imgBtn'/>{props.text}</button>
      
    </div>
  )
}

export default DiscoverButtons
