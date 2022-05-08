import '../amount.css';

function Amount({currency, value, onChange}) {
    const isNegative = value < 0;
    const setInputValue = (event) => {
        onChange(event.currentTarget.value);
    }
    return (
        <div>
            <label htmlFor="amount">{currency}: </label>
            <input
                className={`amount${isNegative ? `--negative` : ''}`}
                onChange={setInputValue}
                value={value}
                placeholder="0"
                type="number"
                id="amount"/>
        </div>
    );
}

export default Amount;
