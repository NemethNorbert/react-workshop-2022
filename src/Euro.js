import PropTypes from 'prop-types';
import React from 'react'

import './Euro.css';

function Euro({money}) {

    const [borderClass, setBorder] = React.useState('black');
    const [moneyValue, setValue] = React.useState(money)
    return (
        <div>
            <input className={borderClass} type="number" id="euro" name="euro" value={moneyValue} onChange={handleChange}/>
        </div>
    )

    function handleChange(event) {
       console.log(event.target.value);
       setValue(event.target.value)

       if (event.target.value < 0) {
            setBorder('red')
       }
       else {
           setBorder('bleck')
       }
    }
}

Euro.propTypes = {
    money: PropTypes.number,
}

export default Euro;