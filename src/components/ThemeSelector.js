import React, { useContext } from 'react';
import {ThemeContext, ThemeOptions} from '../contexts/ThemeContext';
import PropTypes from 'prop-types';

function ThemeSelector({onThemeChange}){
const theme = useContext(ThemeContext);

function handleThemeChange(event){
    onThemeChange(event.target.value);
  }

return( 
   
        <select onChange={handleThemeChange} value={theme.theme}>
            {ThemeOptions.map(option => {
            return (<option key={option} value={option}>{option}</option>);
        })}
        </select>
)};

ThemeSelector.propTypes = {
    onThemeChange: PropTypes.func,
}

export default ThemeSelector;