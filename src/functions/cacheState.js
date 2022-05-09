import { useEffect, useState } from 'react';


export function useCachedState(key, defaultValue =''){
	const [state, setState] = useState(() => window.localStorage.getItem(key) || defaultValue);

	useEffect(()=>{
		window.localStorage.setItem(key, state)
	},[state]);

	return [state, setState];
}
