import React, {useState, useContext } from 'react';
import ThemeContext from '../contexts/ThemeContext';
import Amount from'./Amount.js';
import PropTypes from 'prop-types';
import "./Converter.css";

function Converter({cryptoName = "currency", exchangeRate = 0, onChange, title}){
    const [value, setValue] = useState(0);
    const theme = useContext(ThemeContext);

    function handleChange(value){
        onChange();
        setValue(value);
    }

    return(
     <div className={'converter '+ theme.theme}>
         {title}
        <Amount onChange={handleChange} name={cryptoName + "-euro"} label="Euros:" value={value}/>
        <Amount name={cryptoName} label={cryptoName + ':'} value={value * exchangeRate} readOnly={true}/>   
     </div>
    );
}

Converter.prototypes = {
    cryptoName: PropTypes.string,
    exchangeRate: PropTypes.number,
    onChange: PropTypes.func,
    title: PropTypes.string,

}

export default Converter;