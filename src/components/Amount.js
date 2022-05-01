import React, { useState } from 'react';
import '../App.css';

function Amount({name}) {
    const [isNegative, setIsNegative] = useState(false);
    const [value, setValue] = useState(0);

    const onChangeHandler = (e) => {
        setIsNegative(e.currentTarget.value < 0);
        setValue(e.currentTarget.value);
    }

    return (
        <>
            <label for="euro">{name}</label>
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