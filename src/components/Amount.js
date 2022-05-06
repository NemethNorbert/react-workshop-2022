import "./Amount.css";
import React from "react";

class Amount extends React.Component {
	constructor(props) {
		super(props);
	}
	
	render() {
		return (
			<div>
				<label htmlFor={this.props.id}>
					{this.props.name}
				</label>
				<input
					id={this.props.id}
					className={this.props.className}
					type="number"
					onChange={this.props.handleChange}
					readOnly={this.props.readOnly}
					value={this.props.value}
				/>
			</div>
		);
	}
}

export default Amount;