import React, { useState } from 'react';
import '../amount.css';

function Amount({currency}) {
    const [isNegative, setIsNegative] = React.useState(false)
    const checkInputValue = (event) => {
        setIsNegative( event.currentTarget.value < 0);
    }
    return (
        <div>
            <label htmlFor="amount">{currency}: </label>
            <input
                className={`amount${isNegative ? `--negative` : ''}`}
                onChange={checkInputValue}
                placeholder="0"
                type="number"
                id="amount"/>
        </div>
    );
}

export default Amount;
