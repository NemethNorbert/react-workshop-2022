import React, { useState } from 'react';
import { usePremium } from './PremiumContext';

const PremiumAlert = () => {
  const [premium, setPremium] = useState(false);
  const premiumCount = usePremium();

  const onClick = () => {
    setPremium(prevPremium => !prevPremium);
  }
    
  return (
      <>
        {!premium && premiumCount > 4 &&
          <div className="premium-alert center">
              <div className="alert alert-warning">
                <div className="alert-container">
                  <button className="premium-alert-button center" type="button" onClick={onClick}> 
                    Convert without limits by becoming a Premium user
                  </button>
                </div>
              </div>
          </div>
        }
        {premium &&
          <div className="premium-alert center">
            💎 P R E M I U M
          </div>
        }
      </>
  );
}
  
  export default PremiumAlert;