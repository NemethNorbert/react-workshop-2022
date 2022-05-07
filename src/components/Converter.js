import React, { useContext, useState } from 'react';
import './amount.css';
import ThemeContext from '../ThemeContext';
import Amount from "./Amount";

export default function Converter({cryptoName, exchangeRate, title, onChange}) {
    const [value, setValue] = useState(0);
    const theme = useContext(ThemeContext);

    function handleChange(value){
        onChange();
        setValue(value);
    }

    return(
        <div className={Converter +' ' + theme.theme}>
            <h3>{title}</h3>
            <Amount onChange={handleChange} name={"EUR:"} value={value}/>
            <Amount name={ cryptoName+':'} value={value / exchangeRate} readOnly={true}/>
        </div>
    );
}