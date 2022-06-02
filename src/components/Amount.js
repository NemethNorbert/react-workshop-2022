import React, { useContext } from 'react';
import PropTypes from 'prop-types';
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
          <label htmlFor={name}>{label}</label>         
          <input onChange={change} id={name} style={{outline: value < 0 ? '2px solid red' : ""}} value={value} readOnly={readOnly}/>    
        </form>
      </div>
    );
  }

  Amount.propTypes = {    
    name: PropTypes.string,
    label: PropTypes.string,    
    value: PropTypes.number,
    onChange: PropTypes.func,
    readOnly: PropTypes.bool,
  }

  export default Amount;
  