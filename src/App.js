import "./App.css";
import Converter from "./components/Converter";
import BecomePremium from "./components/BecomePremium";
import React from "react";


class App extends React.Component {

	constructor(props) {
		super(props)
		this.state = {
			conversions: 0,
			currencies: [],
			isPremium: false
		};
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

	componentDidMount() {
		fetch('http://localhost:3003/data')
			.then(resp => resp.json())
			.then(data => {
				console.log(data);
				this.setState({
					currencies: data
				});
			});
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
				{this.state.currencies.map(currency => (
				<Converter
					onConversion={this.onConversion}
					cryptoName={currency.name}
					exchangeRate={currency.conversionRate}
					key={currency.id}
					title={<span>valami <strong>is</strong> working</span>}
				/>
				))}
			</div>
		);
	}

}

export default App;
