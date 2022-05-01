import React, { useState } from 'react';
import '../amount.css';

function Amount({currency, value, onChange}) {
    const [isNegative, setIsNegative] = React.useState(false)
    const setInputValue = (event) => {
        setIsNegative( event.currentTarget.value < 0);
        onChange(event.currentTarget.value);
    }
    return (
        <div>
            <label htmlFor="amount">{currency}: </label>
            <input
                className={`amount${isNegative ? `--negative` : ''}`}
                onChange={setInputValue}
                value={value}
                placeholder="0"
                type="number"
                id="amount"/>
        </div>
    );
}

export default Amount;
