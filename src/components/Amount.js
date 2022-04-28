import './Amount.css';
import React from 'react';

class Amount extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			className: "",
			value : this.props.value
		};
	}
	
	handleChange = (event) => {
		this.setState((state, props) => ({
			className: event.target.value < 0 ? "red" : "",
			value: event.target.value
		}));
	}
	
	render() {
		return (
			<div>
				<label htmlFor={this.props.id}>
					{this.props.name}
				</label>
				<input
					id={this.props.id}
					className={this.state.className}
					type="number"
					onChange={this.handleChange}
					value={this.state.value}
				/>
			</div>
		);
	}
}

export default Amount;