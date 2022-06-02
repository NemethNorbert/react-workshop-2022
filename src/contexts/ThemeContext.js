import React from 'react';

const ThemeContext = React.createContext({});

const ThemeOptions = ["dark", "light", "magenta"];

export default ThemeContext;
export {ThemeContext, ThemeOptions };