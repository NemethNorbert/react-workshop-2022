import React, { useContext }  from 'react';
import './App.css';


function Currency ({id, name, className, value, readOnly}) {
  return (
    <div>
      <label htmlFor={id}>{name}</label>
      <input className={className} id={id} type="number" value={value}  readOnly={readOnly} />
    </div>
  )
}

function App() {
  
  return (
    <div className="App">
      <Currency id="euro" name="Euro" value="0" className="black" readOnly={false} />
    </div>
  );
}

export default App;
