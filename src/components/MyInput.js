import React, { useState, useEffect, useRef } from 'react';

const MyInput = ({id, name, className, label}) => {

    const [value, setValue] = useState(0);

    const isNegative = (num) => {
        if (Math.sign(parseInt(num, 10)) === -1) {
          return true;
        }
      
        return false;
    }

    const validate = (element) => {
        if (isNegative(element.value)) {
            element.classList.add('invalid');
        } else {
            element.classList.remove('invalid');
        }

        setValue(element.value);
    }

    return (
        <>
        <label htmlFor={id}>
            <input 
                type="number" 
                id={id} 
                name={name}
                value={value} 
                className={className} 
                placeholder={label} 
                onChange={(e) => validate(e.target)}/>
            <span>{label}</span>
        </label>
        </>
    );
  }
  
  export default MyInput;