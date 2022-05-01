import React from 'react';

function Amount({name}) {
  return (
    <>
        <label for="euro">{name}</label>
	    <input id="euro" name="euro" placeholder="0" type="number" />
    </>
  );
}

export default Amount;