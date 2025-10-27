import React, { useId } from 'react'
import './Select.css'

function Select({
    width,
    bgcolor,
    label,
    options,
    ...props
},ref) {
    const id=useId();
    return (
       <div className="slctcont">
        {label && (
            <label htmlFor="id">
            {label}
            </label>
        )}
        <select 
        {...props}
        ref={ref}
        id={id}
        style={{width:width,backgroundColor:bgcolor}}
        >
            {options?.map((option)=>(
            <option className='opt' key={option} value={option}>
                {option}
                </option>
 
            ))}


        </select>


       </div>
    )
}

export default React.forwardRef(Select);
