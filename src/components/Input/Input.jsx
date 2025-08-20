import './Input.css'



function Input({ Heading , Text , type}) {
    return (
        <div className='MS-input'>
            <label className="msFontSize20 msFontWeight600 mswhiteColor" htmlFor={Heading}>{Heading}</label>
            <input className="msFontSize18 msFontWeight500 " type={type} id={Heading} placeholder={Text}/>
        </div>
    )
}

export default Input
