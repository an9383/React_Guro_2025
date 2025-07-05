/* eslint-disable no-unused-vars */
import React , {createContext, useContext, useState}   from 'react'
import {ThemeContext} from './ThemeProvider';

const ThemeButton=()=> {
    const {theme, setTheme} = useContext(ThemeContext);
    const buttonStyle = {
        backgroundColor: theme === 'light'? 'black' : 'white',
        color: theme === 'light'? 'white' : 'black',
        border: '1px solid gray',
        padding: '10px 20px',
        cursor: "pointer",

    }
    return (
        <button style={buttonStyle} onClick={(setTheme)}>
            현재 테마: {theme} (클릭하여 변경)
        </button>
    )
}


export default ThemeButton