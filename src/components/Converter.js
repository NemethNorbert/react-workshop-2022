import React, {useState, useContext } from 'react';
import ThemeContext from '../contexts/ThemeContext';
import Amount from'./Amount.js';

function Converter({cryptoName = 'currency', exchangeRate = 0, onChange, title}){
    const [value, setValue] = useState(0);
    const theme = useContext(ThemeContext);

    function handleChange(value){
        onChange();
        setValue(value);
    }

    return(
     <div className={Converter +' ' + theme.theme}>
         {title}
        <Amount onChange={handleChange} name={cryptoName+"-euro"} label="Euros:" value={value}/>
        <Amount name={ cryptoName.toLowerCase} label={cryptoName+ ':' } value={value * exchangeRate} readOnly={true}/>   
     </div>
    );
}

export default Converter;