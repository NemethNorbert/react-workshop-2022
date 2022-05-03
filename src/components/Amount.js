import '../App.css';
import React, { useContext, useState } from 'react';
import ThemeContext from '../context/ThemeContext';


export default function Amount({label, value, onChange, isReadOnly, isRedBorderAdded}) {

	const theme = useContext(ThemeContext);

	return (
		<div style={{ background: theme.background, color: theme.foreground }}>
		    <div className={(isRedBorderAdded && !isReadOnly) ? "error" : "App"}>
		    	<label>{label}:
		         <input type="number" value={value} readOnly={isReadOnly} onChange=
			        {
			        	(event) => {
			        		onChange(event.target)
			        	}
			        }
		        >
		        </input>
		      </label>
		    </div>
		</div>


  );
}