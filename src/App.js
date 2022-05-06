import './App.css';
import Converter from './components/Converter';
import React from 'react';


class App extends React.Component {
	exchangeRateBTC;
	
	constructor(props) {
		super(props)
		
		this.exchangeRateBTC = 995;
	}
  
	render() {
		return (
			<div className="App">
				<Converter cryptoName="$BTC" exchangeRate={this.exchangeRateBTC} />
			</div>
		);
	}

}

export default App;
