import React, { useState, useContext, useEffect } from 'react';
import { useCachedState, storeCachedState } from './util.js' 

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
    const cachedDarkTheme = useCachedState(cachedStateKey, false);
    const [darkTheme, setDarkTheme] = useState(cachedDarkTheme);

    useEffect(()=> {
        if (darkTheme === false) {
            document.body.classList.remove('dark');
        } else {
            document.body.classList.add('dark');
        }
      }, [darkTheme])

    const swapTheme = () => {
        document.body.classList.toggle('dark');

        setDarkTheme(prevDarkTheme => {
            const darkTheme = !prevDarkTheme;

            storeCachedState(cachedStateKey, darkTheme);

            return darkTheme
        });
    }

    return (
        <ThemeContext.Provider value={darkTheme}>
            <ThemeUpdateContext.Provider value={swapTheme}>
                {children}
            </ThemeUpdateContext.Provider>
        </ThemeContext.Provider>
    )
}