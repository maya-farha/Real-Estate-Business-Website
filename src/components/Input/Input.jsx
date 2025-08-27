import './Input.css'



function Input({ id, Heading , Text , type}) {
    return (
        <div className='MS-input'>
            <label className="msFontSize20 msFontWeight600 mswhiteColor" htmlFor={id}>{Heading}</label>
            <input className="msFontSize18 msFontWeight500 " type={type} id={id} placeholder={Text}/>
        </div>
    )
}

export default Input
