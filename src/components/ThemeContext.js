import React, { useState, useContext, useEffect } from 'react';
import useCachedState from '../hooks/useCachedState';

const ThemeContext = React.createContext();
const ThemeUpdateContext = React.createContext();

export function useTheme() {
    return useContext(ThemeContext);
}

export function useThemeUpdate() {
    return useContext(ThemeUpdateContext);
}

const cachedStateKey = 'darkTheme';

export function ThemeProvider({ children }) {
    const [darkTheme, setDarkTheme] = useCachedState(cachedStateKey, false);

    useEffect(()=> {
        if (darkTheme === false) {
            document.body.classList.remove('dark');
        } else {
            document.body.classList.add('dark');
        }
      }, [darkTheme])

    const swapTheme = () => {
        document.body.classList.toggle('dark');

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