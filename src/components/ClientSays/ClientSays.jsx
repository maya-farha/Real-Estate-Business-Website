import './ClientSays.css'
import Title from "../Title/Title"
import Slider from '../Slider/Slider'
import Card from '../Card/Card'


function ClientSays() {
    const msFSliderCards =[{
    showStars:true,
    Heading:"Exceptional Service!" ,
    Paragraph :"Our experience with Estatein was outstanding. Their team's dedication and professionalism made finding our dream home a breeze. Highly recommended!",
    showImg :true,
    profileImg :"assets/imgs/wade-Profile.png",
    Name :"Wade Warren",
    Text :"USA, California"
    },
    {
    showStars:true ,
    Heading :"Efficient and Reliable" ,
    Paragraph :"Estatein provided us with top-notch service. They helped us sell our property quickly and at a great price. We couldn't be happier with the results",
    showImg :true,
    profileImg :"assets/imgs/emelie-Profile.png",
    Name :"Emelie Thomson",
    Text :"USA, Florida"
    },
    {
    showStars:true,
    Heading:"Trusted Advisors" ,
    Paragraph :"The Estatein team guided us through the entire buying process. Their knowledge and commitment to our needs were impressive. Thank you for your support!",
    showImg :true,
    profileImg :"assets/imgs/john-Profile.png",
    Name :"John Mans",
    Text :"USA, Nevada",
    },
    {
    showStars:true ,
    Heading :"Efficient and Reliable" ,
    Paragraph :"Estatein provided us with top-notch service. They helped us sell our property quickly and at a great price. We couldn't be happier with the results",
    showImg :true,
    profileImg :"assets/imgs/emelie-Profile.png",
    Name :"Emelie Thomson",
    Text :"USA, Florida"
    }
    
]
    return (
        <div>
            <Title
                title="What Our Clients Say"
                description="Read the success stories and heartfelt testimonials from our valued clients. Discover why they chose Estatein for their real estate needs."
                fsDifference="48"
            />
            <div className='MS-sliderContainer'>
            <Slider
            spaceBetween={20}
            slidesPerView={1}
            breakpoints={{992: {slidesPerView: 3,spaceBetween: 50,},}}
            data={msFSliderCards}
            renderItem={(card) => (
                <Card
                    showStars = {card.showStars}
                    Heading ={card.Heading} 
                    Paragraph={card.Paragraph} 
                    showImg ={card.showImg} 
                    profileImg={card.profileImg} 
                    Name={card.Name} 
                    Text ={card.Text}
                />
            )}
        />
            </div>
        </div>
    )
}

export default ClientSays
