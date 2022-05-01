import React, { useState } from 'react';
import '../styles/App.css';

function Amount({name, onChange, value}) {
    const [isNegative, setIsNegative] = useState(false);

    const onChangeHandler = (e) => {
        setIsNegative(e.currentTarget.value < 0);
        onChange(e.currentTarget.value);
    }

    return (
        <>
            <label htmlFor="euro">{name}</label>
	        <input
                className={isNegative ? 'negative' : ''}
                id="euro"
                name="euro"
                onChange={onChangeHandler}
                placeholder="0"
                type="number"
                value={value}
                />
        </>
    );
}

export default Amount;