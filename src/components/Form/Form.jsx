import './Form.css'
import Input from '../Input/Input'
import Select from '../Select/Select'
import Button from '../Button/Button'




function Form() {
    return (
        <form action="" className='MS-Form' >
            <div className='MS-inputsContainer'>
                <Input id ='FirstName' Heading='First Name' Text='Enter First Name' type ="text"/>
                <Input id ='LastName' Heading='Last Name' Text='Enter Last Name' type ="text"/>
                <Input id ='Email' Heading='Email' Text='Enter your Email' type ="email"/>
            </div>
            <div className='MS-inputsContainer'>
                <Input Heading='Phone' Text='Enter First Name' type ="text"/>
                <Select Heading='Inquiry Type' Text='Select Inquiry Type'/>
                <Select Heading='How Did You Hear About Us?' Text='Select'/>
            </div>
            <div>
                <label className="msFontSize20 msFontWeight600 mswhiteColor" htmlFor="textArea">Message</label>
                <textarea className="msFontSize18 msFontWeight500 "  name="" id="textArea" placeholder='Enter your Message here..'></textarea>
            </div>
            <div className='MS-sendContainer'>
                <div className='MS-checkboxContainer'>
                    <input type="checkbox" id ="agree"/>
                    <label className="msFontSize18 msFontWeight500 msGrayColor" htmlFor="agree">I agree with Terms of Use and Privacy Policy</label>
                </div>
                <Button
                children="Send Your Message"
                className="mf-btn-purble"/>
            </div>
        </form>
    )
}
export default Form
