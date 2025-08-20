
import Card from '../Card/Card'
import Slider from '../Slider/Slider'
import Title from '../Title/Title'



function AskedQuestions() {
    const questionsCards = [
    {
    showHead : true,
    SecondHeading:"How do I search for properties on Estatein?" ,
    Paragraph :"Learn how to use our user-friendly search tools to find properties that match your criteria.",
    showBtn : true
    },
    {
    showHead : true,
    SecondHeading :"What documents do I need to sell my property through Estatein?" ,
    Paragraph :"Find out about the necessary documentation for listing your property with us.",
    showBtn : true
    },
    {
    showHead : true,
    SecondHeading:"How can I contact an Estatein agent?" ,
    Paragraph :"Discover the different ways you can get in touch with our experienced agents.",
    showBtn : true
    }
] 
    return (
        <div>
            <Title
                title="Frequently Asked Questions"
                description="Find answers to common questions about Estatein's services, property listings, and the real estate process. We're here to provide clarity and assist you every step of the way."
                fsDifference="48"
            />
            <div className='MS-sliderContainer'>
            <Slider
            spaceBetween={20}
            slidesPerView={1}
            breakpoints={{992: {slidesPerView: 3,spaceBetween: 50,},}}
            data={questionsCards}
            renderItem={(card) => (
            <Card 
                showHead = {card.showHead} 
                SecondHeading ={card.SecondHeading} 
                Paragraph={card.Paragraph} 
                showBtn ={card.showBtn}/> 
            )}
            />
            </div>
        </div>
    )
}

export default AskedQuestions
