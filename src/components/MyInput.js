import React, { useState, useEffect, useRef } from 'react';

const MyInput = ({id, name, className, label}) => {

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
    }

    return (
        <>
        <label htmlFor={id}>
            <input 
                type="number" 
                id={id} 
                name={name} 
                className={className} 
                placeholder={label} 
                onChange={(e) => validate(e.target)}/>
            <span>{label}</span>
        </label>
        </>
    );
  }
  
  export default MyInput;