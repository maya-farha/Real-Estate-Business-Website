
import StepsCard from '../StepsCard/StepsCard'
import './StepsCArdContainer.css'

const StepsCArdContainer = () => {
    return (
        <div className='MS-stepsCArdContainer'>
            <div className='MS-TopContainer'>
                <StepsCard 
                    stepNumber = "01"
                    Heading = "Discover a World of Possibilities"
                    Paragraph = "Your journey begins with exploring our carefully curated property listings. Use our intuitive search tools to filter properties based on your preferences, including location, type, size, and budget."/>
                <StepsCard 
                    stepNumber = "02"
                    Heading = "Narrowing Down Your Choices"
                    Paragraph = "Once you've found properties that catch your eye, save them to your account or make a shortlist. This allows you to compare and revisit your favorites as you make your decision."/>
                <StepsCard 
                    stepNumber = "03"
                    Heading = "Personalized Guidance"
                    Paragraph = "Have questions about a property or need more information? Our dedicated team of real estate experts is just a call or message away."/>
            </div>
            <div className='MS-BottomContainer'>
                <StepsCard 
                    stepNumber = "04"
                    Heading = "See It for Yourself"
                    Paragraph = "Arrange viewings of the properties you're interested in. We'll coordinate with the property owners and accompany you to ensure you get a firsthand look at your potential new home."/>
                <StepsCard 
                    stepNumber = "05"
                    Heading = "Making Informed Decisions"
                    Paragraph = "Before making an offer, our team will assist you with due diligence, including property inspections, legal checks, and market analysis. We want you to be fully informed and confident in your choice."/>
                <StepsCard 
                    stepNumber = "06"
                    Heading = "Getting the Best Deal"
                    Paragraph = "We'll help you negotiate the best terms and prepare your offer. Our goal is to secure the property at the right price and on favorable terms."/>
            </div>
        </div>
    )
}

export default StepsCArdContainer
