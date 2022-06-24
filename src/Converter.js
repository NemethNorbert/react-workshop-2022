import Amount from './Amount.js';
import './Converter.css';
import PropTypes from 'prop-types';
import React, {useState} from 'react';

function Converter({cryptoName, exchangeRate, header}) {
    const [convertedValue, setConvertedValue] = useState(0);
    const handleChange = event => {
        setConvertedValue(event.target.value * exchangeRate);
    }

    return (
        <span className='box'>
            {header}<br/>
            <Amount name="Euros" onChangeHandler={handleChange} focus={cryptoName == "Ethernium"}/>
            <Amount name={cryptoName} value={convertedValue} readOnly={true} />
        </span>
    );
}

Converter.propTypes = {
    cryptoName: PropTypes.string,
    exchangeRate: PropTypes.number,
    header: PropTypes.string
}

export default Converter;