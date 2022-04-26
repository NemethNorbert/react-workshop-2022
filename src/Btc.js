import React from 'react'

import './Euro.css';

function BTC() {

    const [btcValue, setValue] = React.useState(exchangeRate());

    setTimeout(() => setValue(0), 5000)

    return (
        <div>
            {btcValue}
        </div>
    )

    function exchangeRate() {
        return Math.random() * 10000;
    }
  
}

export default BTC;