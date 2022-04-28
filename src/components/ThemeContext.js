import React, { useState, useContext } from 'react';

const ThemeContext = React.createContext();
const ThemeUpdateContext = React.createContext();

export function useTheme() {
    return useContext(ThemeContext);
}

export function useThemeUpdate() {
    return useContext(ThemeUpdateContext);
}

export function ThemeProvider({ children }) {
    const [darkTheme, setDarkTheme] = useState(false);

    const swapTheme = () => {
        document.body.classList.toggle('dark');
        const sunMoonContainer = document.querySelector('.sun-moon-container');
        const currentRotation = parseInt(getComputedStyle(sunMoonContainer).getPropertyValue('--rotation'));
        sunMoonContainer.style.setProperty('--rotation', currentRotation + 180);
    
        setDarkTheme(prevDarkTheme => !prevDarkTheme);
    }

    return (
        <ThemeContext.Provider value={darkTheme}>
            <ThemeUpdateContext.Provider value={swapTheme}>
                {children}
            </ThemeUpdateContext.Provider>
        </ThemeContext.Provider>
    )
}