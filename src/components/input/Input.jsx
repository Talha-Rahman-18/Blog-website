import React, { useId } from 'react'
import './Input.css'

function Input({
    color,
    border,
    label,
    type="text",
    ...props

},ref) {
    const id=useId();
    return (
        <div className="inp">
            {label && <label 
            htmlFor={id}
            className='label'
            >
                {label}
                </label>
                }

                <input type={type} 
                ref={ref}
                id={id}
                {...props}
                className='input'
                style={{color:color,border:border}}
                
                />
                
        </div>
    )
}

export default React.forwardRef(Input);
