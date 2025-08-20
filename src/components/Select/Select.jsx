
import './Select.css'


function Select({Heading , Text}) {
    return (
        <div className='MS-select'>
            <label className="msFontSize20 msFontWeight600 mswhiteColor" htmlFor={Heading}>{Heading}</label>
            <select className="msFontSize18 msFontWeight500 " name={Heading} id="">
                <option value="">{Text}</option>
            </select>
        </div>
    )
}

export default Select