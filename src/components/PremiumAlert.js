import React from 'react';
import { usePremium } from './PremiumContext';

const PremiumAlert = () => {
    const premiumCount = usePremium();
    
    return (
        <>
          {premiumCount > 4 &&
            <div className="premium-alert center">
                <div className="alert alert-warning">
                  <div className="alert-container">
                    Convert without limits by becoming a premium user
                  </div>
                </div>
            </div>
          }
        </>
    );
  }
  
  export default PremiumAlert;