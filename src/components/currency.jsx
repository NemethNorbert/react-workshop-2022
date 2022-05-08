import './currency.css';
import React from 'react';

export default function Currency({ name, value, onChange, readOnly }) {

  function onChangeHandler(event) {
    onChange(event.currentTarget.value);
  }

  const elementToShow = (
      <label className='currency'>
        <strong>{name}</strong>
        <br />
        <input
          onChange={onChangeHandler}
          value={value}
          type='number'
          readOnly={readOnly}
          min='0'
          placeholder='0'
          step='0.001'
        />
      </label>
  )

  return (elementToShow);

}