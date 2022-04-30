import React from "react";

function Amount({currency}) {
    return (
        <div className="amount">
            <label htmlFor="amount">{currency}: </label>
            <input type="number" id="amount"/>
        </div>
    );
}

export default Amount;
