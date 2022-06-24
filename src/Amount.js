import React, { useContext, useEffect, useState, useRef } from 'react';
import './Amount.css';
import PropTypes from 'prop-types';
import ThemeContext from './ThemeContext.js';

function Amount({name, onChangeHandler, focus, value, readOnly}) {
  const [negative, setNegative] = useState(false);
  const handleChange = event => {
    setNegative(event.target.value < 0 ? true : false);
    onChangeHandler(event);
  }
  const inputEl = useRef(null);
  useEffect(() => {
    if (focus === true) {
      inputEl.current.focus();
    }
  }, []);

  const theme = useContext(ThemeContext);

  return (
    <span style={{ background: theme.background, color: theme.foreground }}>
      <label htmlFor={name}>{name}</label><br/>
      <input id={name} type="number" className={negative ? 'redborder' : ""} onChange={handleChange} value={value} readOnly={readOnly} ref={inputEl}/><br/>
    </span>
  );
}

Amount.propTypes = {
  name: PropTypes.string,
  onChangeHandler: PropTypes.func,
  focus: PropTypes.bool,
  value: PropTypes.number,
  readOnly: PropTypes.bool
}

export default Amount;
