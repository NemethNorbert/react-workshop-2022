function Currency ({id, name, value, readOnly, onChange}) {
    return (
      
      <div>
        <label htmlFor={id}>{name}</label>
        <input id={id} type="number" value={value}  readOnly={readOnly} onChange={(e) => onChange(e.target)}/>
      </div>
      
    )
  }
export default Currency;  