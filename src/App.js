import React from "react";
import './App.css';
import Amount from "./components/Amount";

function App() {
  return (
    <div className="App">
      <Amount currency={"Euro"} />
    </div>
  );
}

export default App;
