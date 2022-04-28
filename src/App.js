import './App.css';
import Amount from './components/Amount';
import React from 'react';


class App extends React.Component {
	constructor(props) {
		super(props)
	}
	
	exchangeRate() {
      return Math.random() * 10000;
    }
  
	render() {
		return (
			<div className="App">
				<Amount id="euros" name="Euros" value="2" />
				<Amount id="btc" name="$BTC" readOnly={true} value={this.exchangeRate()} />
			</div>
		);
	}
}

export default App;
