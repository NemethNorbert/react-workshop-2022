import React, { useContext }  from 'react';
import './App.css';


function Currency ({id, name, value, readOnly}) {
  
  const validateValue = event => {
    if (event.target.value < 0) {
      event.target.className = 'red'
    }
    else {
      event.target.className = 'black'
    }
  }

  return (
    <div>
      <label htmlFor={id}>{name}</label>
      <input id={id} type="number" value={value}  readOnly={readOnly} onChange={validateValue}/>
    </div>
  )
}

function App() {
  const handleChange = event => {
    console.log('handle change')
  }

  return (
    <div className="App">
      <Currency id="euro" name="Euro"  className="black" readOnly={false} onChange={handleChange} />
      <Currency id="btc" name="BTC" defaultValue="0" className="black" readOnly={true}/>
    </div>
  );
}

export default App;
