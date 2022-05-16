import { useState, useEffect, useMemo } from 'react';

 export default function useCachedState(key, defaultValue) {
   const initialValue = useMemo(() => {
     let value = localStorage.getItem(key);
     let booleanDefaultValue = (String(defaultValue) === 'true');

     if(!(value === 'true' || value === 'false')) {
        value = booleanDefaultValue;
     }

    value = (String(value) === 'true');

    return value;
   }, [defaultValue, key]);

   const [state, setState] = useState(initialValue);

   useEffect(() => {
     setState(initialValue);
   }, [initialValue]);

   useEffect(() => {
     localStorage.setItem(key, state);
   }, [key, state]);

   return [state, setState];
 } 