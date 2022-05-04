import React, { useContext }  from 'react';
import Currency from './Currency.js';
import './App.css';
function Converter({convertedName, cryptoName, exchangeRate}) {

    const [value, setValue] = React.useState(0)
    const [convertedValue, setConvertedValue] = React.useState(0)
    const [msg, setMsg] = React.useState('')
    const [converts, setConverts] = React.useState(1)

    const validateValue = element => {
        if (element.value < 0) {
          element.className = 'red'
        }
        else {
          element.className = 'black'
        }
        setValue(element.value)
      }

    function convert() {
      increment()
      setConvertedValue(value * exchangeRate)
      if (converts > 4) {
        setMsg('Convert without limits by becoming a premium user')
      }
    }

    function increment() {
      setConverts(converts + 1)
      console.log(converts)
    }
    return (
         <div>
            <span className="premium" id="msg">{msg}</span>
            <Currency id="euro" name="Euro" value={value} className="black" readOnly={false} onChange={validateValue}/>
            <Currency id={convertedName} name={cryptoName} value={convertedValue} className="black" readOnly={true} />
            <button onClick={convert}>Convert</button>
         </div>
    )
}

export default Converter;