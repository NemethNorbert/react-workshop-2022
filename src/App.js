import { useEffect, useState } from 'react';
import './App.css';
import FetchConverters from './components/ConverterSource';
import ThemeSelector from './components/ThemeSelector';
import {ThemeContext, ThemeOptions } from './contexts/ThemeContext';
import React from 'react';
import {useBooleanStorage, useStringStorage} from './hooks/CustomHooks';

function App() {
  const [conversion, setConversion] = useState(0);
  const [theme, setTheme] = useStringStorage("theme", ThemeOptions[0]);
  const [isPremium, setIsPremium] =  useBooleanStorage("isPremium",false);

  function handleConversion(){
    setConversion(conversion + 1);
  }

  useEffect(()=>{
    if(conversion >=5 && !isPremium){
      alert("Convert without limits by becoming a premium user");
    }
  },[conversion]);

  function handleClick(){
    setIsPremium(true);
  }

  return (
    <ThemeContext.Provider value={{theme: theme}}>
      <div className={"App " + theme}>

        <FetchConverters source={'http://localhost:3003/data'} onChange={handleConversion}/>
        <ThemeSelector onThemeChange={setTheme}/>

        <div style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center"
          }}>  
                {isPremium ? <strong>you are premium</strong> : <button onClick={handleClick}>Become preimum</button> }
        </div>
      </div>
    </ThemeContext.Provider>
  );
}

export default App;
