import {useState } from 'react';
import './App.css';
import ThemeSelector from './components/ThemeSelector';
import {ThemeContext, ThemeOptions } from './contexts/ThemeContext';
import React from 'react';
import {useStringStorage} from './hooks/CustomHooks';
import UserCards from './components/UserCards';


function App() {
  const [theme, setTheme] = useStringStorage("theme", ThemeOptions[0]);
  const [userCards,setUserCards] = useState([]);
  const [userName, setUserName] = useState('');


  const handleChange = event => {
    setUserName(event.target.value);
  };

  function getUser(event){
    event.preventDefault();
    fetch('https://api.github.com/users/' + userName).then(resp => resp.json())
    .then(data => { 
        if(data.message){
            alert(data.message);
        } 
        else{   
        setUserCards(userCards => [...userCards, data]);
        }
    });
  }

  function getUserClick(){
   const promis = getUser("NemethNorbert");
   promis.then(user => {

    setUserCards(userCards => [...userCards, user]);
    console.log(user);
   });
   console.log(promis);
  }

  return (
    <ThemeContext.Provider value={{theme: theme}}>
      <div className={"App " + theme} style={{minHeight:'100vh'}}>
        
       <form onSubmit={getUser}>
       <ThemeSelector onThemeChange={setTheme}/> 
       <input onChange={handleChange}/>
       <button type="submit">get user</button> 
       </form>  
       <UserCards userCards={userCards} removeCard={setUserCards}/>  
      </div>
    </ThemeContext.Provider>
  );
}

export default App;
