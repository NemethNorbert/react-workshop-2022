import React, { useState, useEffect, useRef } from 'react';

const MyInput = ({id, name, className, label}) => {
    return (
        <>
        <label htmlFor={id}>
            <input type="text" id={id} name={name} className={className} placeholder={label} />
            <span>{label}</span>
        </label>
        </>
    );
  }
  
  export default MyInput;