import React, {useState } from 'react';
import Amount from './Amount';

function Converter({cryptoName, exchangeRate}) {

    const [value, setValue] = useState(0);

    const handleChange = value => {
		setValue(value);
	}
    
    const cryptoValue = parseFloat(value * exchangeRate).toFixed(2);

    return (
        <>
            <Amount 
                name="Euro"                 
                onChange={handleChange} 
                readonly={false}
                value={value}
            />
            
            <Amount 
                name={cryptoName}                 
                readonly={true}
                value={cryptoValue}
            />         
        </>
    );
}

export default Converter;