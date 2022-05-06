import React, { useContext } from 'react';
import './Amount.css'
import ThemeContext from '../contexts/ThemeContext';

function Amount(props){
    const name = props.name || "";
    const value = props.value || 0;
    const label = props.label || "";
    const readOnly = props.readOnly || false;
    
    const theme = useContext(ThemeContext);
   
    function change(event) {    
      props.onChange(event.currentTarget.value);   
    }

    return (
      <div className={"amount " + theme.theme}>
        <form>
          <label htmlFor={name}>{label}</label>
          <input onChange={change} style={{outline: value < 0 ? '2px solid red' : ""}}  id={name} value={value} readOnly={readOnly}/>    
        </form>
      </div>
    );
  }

  export default Amount
  