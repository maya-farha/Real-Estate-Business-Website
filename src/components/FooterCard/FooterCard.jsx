import './FooterCard.css'
import {Link} from "react-router-dom"; 

function FooterCard({items , href , title}) {
  return (
    <div className='RJ_FooterCard'>
          <h2 className='RJ_TitleFooter' ><Link to={href}>{title}</Link></h2>
        <ul className='RJ_ItemsFooter'>
        {items.map((item , index) =>{
                return(
                    <li key={index} ><Link to={item.url}>{item.cont}</Link></li>
                )
            })}
        
        </ul>
        


      
    </div>
  )
}

export default FooterCard
