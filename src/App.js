import './App.css';
import React from 'react';

const defaultEuroValue=10;
var isRedBorderAdded = false;


function App() {

	const [mystate, setMyState] = React.useState({euroValue: defaultEuroValue, btcValue: 0});
    const {euroValue, btcValue} = mystate;
    const exchangeRate = getExchangeRate();

    const myOnChange = (element) => {
		let calcEur = element.value;
		let calcBtc = element.value / exchangeRate;

		setMyState({
		  euroValue: calcEur,
		  btcValue: calcBtc
		});
	}

	const euroComponent = <Amount label="Euros" value={euroValue} onChange={myOnChange} isReadOnly={false} />
	const btcComponent = <Amount label="BTC" value={btcValue} isReadOnly={true} />

  return (
    React.createElement(React.Fragment,null,euroComponent,btcComponent)
  );
}


function Amount({label, value, onChange, isReadOnly}) {

	if (value >= 0){
    	isRedBorderAdded = false;
    } else {
    	isRedBorderAdded = true;
    }

	return (
    <div className={(isRedBorderAdded && !isReadOnly) ? "error" : "App"}>
    	<label>{label}:
         <input type="number" value={value} readOnly={isReadOnly} onChange=
	        {
	        	(event) => {
	        		onChange(event.target)
	        	}
	        }
        >
        </input>
      </label>
    </div>
  );
}

function getExchangeRate() {
	return Math.random() * 10000;
}

export default App;