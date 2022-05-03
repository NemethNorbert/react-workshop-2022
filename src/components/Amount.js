import React, { useState } from 'react';
import { useTheme } from './ThemeContext';

const Amount = ({id, name, label, className, value, onChange, readonly}) => {
    const darkTheme = useTheme();
    const [isValid, setIsValid] = useState(true);

    if (!isValid) {
        className += " invalid";
    }

    if (darkTheme) {
        className += " dark";
    }

    const isNegative = (num) => {
        if (Math.sign(parseInt(num, 10)) === -1) {
          return true;
        }
    
        return false;
    }

    const onChangeHandler = (event) => {
        let isValid = true;
        let value = event.currentTarget.value;

        if (isNegative(value)) {
            isValid = false;
        } 

        setIsValid(isValid);
        onChange(value);
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
                readOnly={!!readonly}
                onChange={onChangeHandler}/>
            <span>{label}</span>
        </label>
        </>
    );
  }
  
  export default Amount;