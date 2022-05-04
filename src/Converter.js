import React, { useContext }  from 'react';
import Currency from './Currency.js';

function Converter({convertedName, convertedLabel, exchangeRate}) {

    const [value, setValue] = React.useState(0)
    const [convertedValue, setConvertedValue] = React.useState(0)

    const validateValue = element => {
        if (element.value < 0) {
          element.className = 'red'
        }
        else {
          element.className = 'black'
        }
        setValue(element.value)
        setConvertedValue(element.value * exchangeRate)
    
      }
    

    return (
         <div>
            <Currency id="euro" name="Euro" value={value} className="black" readOnly={false} onChange={validateValue}/>
            <Currency id={convertedName} name={convertedLabel} value={convertedValue} className="black" readOnly={true}/>
         </div>
    )
}

export default Converter;