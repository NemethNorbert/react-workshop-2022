import React, { useState, useContext } from 'react';

const PremiumContext = React.createContext();
const PremiumUpdateContext = React.createContext();

export function usePremium() {
    return useContext(PremiumContext);
}

export function usePremiumUpdate() {
    return useContext(PremiumUpdateContext);
}

export function PremiumProvider({ children }) {
    const [premium, setPremium] = useState(0);

    const countPremium = () => {  
        setPremium(prevPremium => prevPremium+1);
    }

    return (
        <PremiumContext.Provider value={premium}>
            <PremiumUpdateContext.Provider value={countPremium}>
                {children}
            </PremiumUpdateContext.Provider>
        </PremiumContext.Provider>
    )
}