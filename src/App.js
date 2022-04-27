import './App.css';
import PropTypes from 'prop-types'
import React from 'react';
import ReactDOM from 'react-dom';

const defaultEuroValue=10;
const euroComponent = <EuroComponent label="Euros" defaultValue={defaultEuroValue} />
const btcComponent = <BTCComponent label="BTC"/>
const root = document.getElementById('root');
var isRedBorderAdded = false;


function App() {

	return (
	 React.createElement(React.Fragment,null,euroComponent,btcComponent)
	);
}

function EuroComponent({label, defaultValue}) {
	const exchangeRate = getExchangeRate();
	const [euroValue, setEuroValue] = React.useState(window.localStorage.getItem('euroValue') || defaultValue);
	const [btcValue, setBTCValue] = React.useState(window.localStorage.getItem('btcValue') || (euroValue * exchangeRate));

	 if (euroValue >= 0){
    	isRedBorderAdded = false;
    } else {
    	isRedBorderAdded = true;
    }

	console.error("exchangeRate: " + exchangeRate);
	console.error("euroValue: " + euroValue);
	console.error("btcValue: " + btcValue);


    React.useEffect(() => {
    	window.localStorage.setItem('euroValue',euroValue)
    	window.localStorage.setItem('btcValue',btcValue)
    })

	return (
    <div className={isRedBorderAdded ? "error" : "App"}>
    	<label>{label}:
        <input type="number" value={euroValue} onChange=
	        {
	        	(event) => {
	        		setEuroValue(event.target.value)
	        		setBTCValue(event.target.value * exchangeRate)

	        	}
	        }
        >
        </input>
      </label>
    </div>
  );
}

function BTCComponent({label}) {
	const [btcValue, setBTCValue] = React.useState(window.localStorage.getItem('btcValue') || 0);

	//itt ez nem jelenik meg ,mert hiába fut le fentebb az event, azt a komponenst nem rendereli újra :( 
	console.error("btcValueeeeeeee: " + btcValue);

	return (
    <div className="App">
    	<label>{label}:
        <input type="input" defaultValue={btcValue} readOnly/>
      </label>
    </div>
  );
}

function getExchangeRate() {
	return Math.random() * 10000;
}


export default App;
