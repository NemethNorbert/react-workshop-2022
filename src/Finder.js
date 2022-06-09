import React from 'react';

function Finder({setValue}) {

    const inputRef = React.createRef();

    const handleKeyDown = (event) => {
        if (event.key === 'Enter') {
            setValue(event.target.value);
        }
    }

    
    const handleClick = () => {
        setValue(inputRef.current);
    }
return (
    <>
        <label htmlFor="search">GitHub User : </label>
        <input ref={inputRef} type="text" name="search" id="search" onKeyDown={handleKeyDown} />
        <button type="button" onClick={handleClick}>Search...</button>
    </>
    
)
}

export default Finder;