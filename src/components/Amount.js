import React, { useState } from 'react';
import '../App.css';

function Amount({name}) {
    const [isNegative, setIsNegative] = useState(false);

    const onChangeHandler = (e) => {
        setIsNegative(e.currentTarget.value < 0);
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
                type="number" />
        </>
    );
}

export default Amount;