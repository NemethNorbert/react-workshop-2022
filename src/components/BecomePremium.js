import React from "react";

class BecomePremium extends React.Component {
	constructor(props) {
		super(props);
	}

	render() {
		return (
			<div>
				<input
					id="becomePremium"
					type="submit"
					onClick={this.props.onClick}
					value="Become Premium"
				/>
			</div>
		);
	}

}

export default BecomePremium;