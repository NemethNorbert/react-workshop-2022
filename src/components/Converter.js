import './Converter.css';
import Amount from './Amount';
import React from 'react';

class Converter  extends React.Component {
	prefix;
	
	constructor(props) {
		super(props);
		this.state = {
			eur: 0
		};
		
		this.prefix = props.cryptoName.toLowerCase().replace("$", "");
	}
	
	handleChange = (event) => {
		this.setState((state, props) => ({
			eur: event.target.value
		}));
		
		this.props.onConversion();
	}
	
	render() {
		return (
			<div className="converter">
				<Amount
					id={this.prefix + "euros"}
					className={this.state.eur < 0 ? "red" : ""}
					handleChange={this.handleChange}
					name="Euros"
					value={this.state.eur} />
				<Amount
					id={this.prefix}
					name={this.props.cryptoName}
					readOnly={true}
					value={this.state.eur * this.props.exchangeRate} />
			</div>
		);
	}
}

export default Converter;