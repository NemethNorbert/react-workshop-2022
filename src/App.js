import "./App.css";
import Converter from "./components/Converter";
import BecomePremium from "./components/BecomePremium";
import React from "react";


class App extends React.Component {
	exchangeRateBTC;
	
	constructor(props) {
		super(props)
		this.state = {
			conversions: 0,
			isPremium: false
		};

		this.exchangeRateBTC = 995;
	}

	onBecomePremium = (event) => {
		event.preventDefault();
		
		this.setState({
			isPremium: true
		});
	}

	onConversion = () => {
		this.setState((state, props) => ({
			conversions: state.conversions + 1
		}));
	}

	componentDidUpdate() { 
		if (!this.state.isPremium && this.state.conversions == 5 ) {
			console.log("Need more conversions");
		}
	};

	render() {
		return (
			<div className="App">
				{!this.state.isPremium ?
					<BecomePremium
						onClick={this.onBecomePremium}
					/>
					: ""
				}
				<Converter
					onConversion={this.onConversion}
					cryptoName="$BTC"
					exchangeRate={this.exchangeRateBTC}
					title={<span>valami <strong>is</strong> working</span>}
				/>
				<Converter
					onConversion={this.onConversion}
					cryptoName="$ETH"
					exchangeRate={1.2} />
			</div>
		);
	}

}

export default App;
