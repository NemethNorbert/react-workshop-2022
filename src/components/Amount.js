import React, { useContext } from 'react';
import './Amount.css'
import ThemeContext from '../contexts/ThemeContext';

function Amount({name, value = 0, label = "label", readOnly = false, onChange}){
  
    const theme = useContext(ThemeContext);
   
    function change(event) {    
      onChange(event.currentTarget.value);   
    }

    return (
      <div className={"amount " + theme.theme}>
        <form>
          <label htmlFor={name ? name : undefined}>{label}</label>
          <input onChange={change} style={{outline: value < 0 ? '2px solid red' : ""}}  id={name ? name : undefined} value={value} readOnly={readOnly}/>    
        </form>
      </div>
    );
  }

  export default Amount
  