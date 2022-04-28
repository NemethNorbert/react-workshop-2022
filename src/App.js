import React, { useContext }  from 'react';
import './App.css';


function Currency ({id, name, value, readOnly, onChange}) {
  return (
    <div>
      <label htmlFor={id}>{name}</label>
      <input id={id} type="number" value={value}  readOnly={readOnly} onChange={(e) => onChange(e.target)}/>
    </div>
  )
}

function exchangeRate() {
  return Math.random() * 10000;
}

function App() {
  const [value, setValue] = React.useState(0)
  const [btc, setBTC] = React.useState(0)

  const validateValue = element => {
    if (element.value < 0) {
      element.className = 'red'
    }
    else {
      element.className = 'black'
    }
    setValue(element.value)
    setBTC(value * exchangeRate())

  }

  return (
    <div className="App">
      <Currency id="euro" name="Euro" value={value} className="black" readOnly={false} onChange={validateValue}/>
      <Currency id="btc" name="BTC" value={btc} className="black" readOnly={true}/>
    </div>
  );
}

export default App;
