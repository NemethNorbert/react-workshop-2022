import React from 'react';
import { useTheme } from './ThemeContext';

const Amount = ({id, name, label, className, value, onChange, invalid, readonly}) => {
    const darkTheme = useTheme();

    if (invalid) {
        className += " invalid";
    }

    if (darkTheme) {
        className += " dark";
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
                onChange={(e) => onChange(e.target)}/>
            <span>{label}</span>
        </label>
        </>
    );
  }
  
  export default Amount;