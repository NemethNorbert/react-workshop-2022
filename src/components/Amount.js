import React, { useState, useEffect, useRef } from 'react';
import PropTypes from 'prop-types';
import { useTheme } from './ThemeContext';

const Amount = ({id, name, label, className, value, onChange, readonly}) => {
    const darkTheme = useTheme();
    const [isValid, setIsValid] = useState(true);
    const inputReference = useRef(null);

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

    useEffect(() => {
        if (name == "Ethernium") {
            inputReference.current.focus();
        }
    }, []);

    return (
        <>
        <label htmlFor={id}>
            <input 
                type="number" 
                id={id} 
                name={id}
                ref={inputReference}
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

  Amount.propTypes = {
    id: PropTypes.string,
    name: PropTypes.string,
    label: PropTypes.string,
    className: PropTypes.string,
    value: PropTypes.number,
    onChange: PropTypes.func,
    readonly: PropTypes.bool,
  };
  
  export default Amount;