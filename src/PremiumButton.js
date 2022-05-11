import React from 'react';
import {PremiumConsumer} from './PremiumContext';
function PremiumButton() {

	return (
        <PremiumConsumer>
            {({premium, becomePremiumMember}) => (
		        <button type="button" onClick={becomePremiumMember}>Become a Premium Member</button>
            )}
        </PremiumConsumer>
        
	)
}

export default PremiumButton;