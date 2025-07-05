/* eslint-disable no-unused-vars */
import React , {createContext, useContext, useState}   from 'react'

const ThemeContext = createContext(null);

const ThemeProvider = ({children}) => {
    const [theme, setTheme] = useState('dark');
    const contextValue = {theme, setTheme};

  return (
    <ThemeContext.Provider value={contextValue}>
        {children}
    </ThemeContext.Provider>
  )
}


export default ThemeProvider