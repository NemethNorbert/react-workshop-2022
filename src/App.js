import './App.css';
import {useState} from "react";

function App() {

    return (
        <div className="App">
        </div>
    );
}

function Amount(props) {
    const myStyle = (props.value<0) ? { color: "red" } : { color: "black" }
    return <p style={myStyle}>{props.message}{props.value}</p>;
}

export default App;
