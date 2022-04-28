import './App.css';


const euroComponent = <Amount label="Euros"/>

function App() {
  return (
    euroComponent
  );
}

function Amount({label}) {
	return (
    <div className="App">
    	<label>{label}:
        <input type="number" defaultValue={10}>
        </input>
      </label>
    </div>
  );
}

export default App;
