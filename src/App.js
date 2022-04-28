import './App.css';
import React from 'react';

const defaultEuroValue=10;
var isRedBorderAdded = false;


function App() {

	const [mystate, setMyState] = React.useState({euroValue: defaultEuroValue});
    const {euroValue} = mystate;

    const myOnChange = (element) => {
		let calcEur = element.value;

		setMyState({
		  euroValue: calcEur
		});
	}

	const euroComponent = <Amount label="Euros" value={euroValue} onChange={myOnChange} />

  return (
    euroComponent
  );
}


function Amount({label, value, onChange}) {

	if (value >= 0){
    	isRedBorderAdded = false;
    } else {
    	isRedBorderAdded = true;
    }

	return (
    <div className={isRedBorderAdded ? "error" : "App"}>
    	<label>{label}:
         <input type="number" value={value} onChange=
	        {
	        	(event) => {
	        		onChange(event.target)
	        	}
	        }
        >
        </input>
      </label>
    </div>
  );
}

export default App;