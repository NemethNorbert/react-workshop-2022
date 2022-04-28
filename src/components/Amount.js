const Amount = ({id, name}) => {
	return (
		<div>
			<label htmlFor={id}>{name}</label>
			<input id={id} type="number" />
		</div>
	)
}

export default Amount