import React, { useState } from 'react';
import { usePremium } from './PremiumContext';
import { useCachedState, storeCachedState } from './util.js' 

const cachedStateKey = 'premium';

const PremiumAlert = () => {
  const cachedPremium = useCachedState(cachedStateKey, false);
  const [premium, setPremium] = useState(cachedPremium);
  const premiumCount = usePremium();

  const onClick = () => {
    setPremium(prevPremium => {
      const premium = !prevPremium;

      storeCachedState(cachedStateKey, premium);
      
      return premium;
    });
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