import {useState, useMemo} from 'react';

function useBooleanStorage(key, defaultValue){
  const storedValue = localStorage.getItem(key);  
  
  const calculateValue = (key,storedValue, defaultValue) =>{
    if(storedValue){
      return storedValue ==="true";
    }
    else{
      if(defaultValue){
        localStorage.setItem(key,defaultValue);
        return defaultValue;
      }else{
        localStorage.setItem(key,false);
        return false;
      }
    }
  }

  const value = useMemo(() => calculateValue(key,storedValue,defaultValue));
  const [state, setState] = useState(value);

  const setValue = (value) => {
  localStorage.setItem(key,value);
    setState(value);
  };


    return [state, setValue];    
}

function useStringStorage(key, defaultValue){
  const storedValue = localStorage.getItem(key);
  
  const calculateValue = (key,storedValue, defaultValue) =>{
    if(storedValue){
      return storedValue;
    }
    else{
      if(defaultValue){
        localStorage.setItem(key,defaultValue);
        return defaultValue;
      }else{
        localStorage.setItem(key,"");
        return "";
      }
    }
  }

  const value = useMemo(() => calculateValue(key,storedValue,defaultValue));
  const [state, setState] = useState(value);

  const setValue = (value) => {
  localStorage.setItem(key,value);
    setState(value);
  };


  return [state, setValue];    
}

function useNumberStorage(key, defaultValue){
  const storedValue = localStorage.getItem(key);
  
  const calculateValue = (key,storedValue, defaultValue) =>{
    if(storedValue){
      return parseInt(storedValue);
    }
    else{
      if(defaultValue){
        localStorage.setItem(key,defaultValue);
        return defaultValue;
      }else{
        localStorage.setItem(key,null);
        return null;
      }
    }
  }
  
  const value = useMemo(() => calculateValue(key,storedValue,defaultValue));
  const [state, setState] = useState(value);

  const setValue = (value) => {
  localStorage.setItem(key,value);
    setState(value);
  };


  return [state, setValue];    
}

export { useBooleanStorage, useStringStorage, useNumberStorage};