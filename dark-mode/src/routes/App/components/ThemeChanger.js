import React, { useState, useEffect } from 'react'
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faMoon, faSun} from "@fortawesome/free-solid-svg-icons";


const ModeToggler = () => {
    const [themeState, setThemeState] = useState(false);

    useEffect(() => {
        const getTheme = localStorage.getItem('Theme');
        if (getTheme === 'dark') {
            setThemeState(true);
        }
    }, []); // empty array is added cause we want it run only one time

    useEffect(() => {
        if (themeState) {
            localStorage.setItem('Theme', 'dark');
            document.documentElement.classList.add('dark-mode');
        } else {
            localStorage.setItem('Theme', 'light');
            document.documentElement.classList.remove('dark-mode');
        }

    }, [themeState]); // this useEffect now observe themeState

    return (
        <button  onClick={() => setThemeState(!themeState)} className="app__dark-mode-btn icon level-right">
            <FontAwesomeIcon color={themeState? "white" : "black"} icon={themeState? faSun :  faMoon} />
        </button>
    )
}

export default ModeToggler;