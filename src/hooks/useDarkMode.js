import React, {useEffect} from 'react';
import UseLocalStorage from './useLocalStorage';

function UseDarkMode(key){
    const [darkMode, setDarkMode] = UseLocalStorage(key)

    useEffect((key)=>{
        const body = document.querySelector('body');
        darkMode ? body.classList.add('dark-mode') : body.classList.remove('dark-mode');
    }

    ,[darkMode])

    return [darkMode, setDarkMode]
}

export default UseDarkMode;