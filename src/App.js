import React, { useState, useEffect } from "react"
import './App.css';
import Welcome from './components/Landing'
import 'bootstrap/dist/css/bootstrap.min.css'
import {ThemeProvider} from "styled-components"
import { GlobalStyles } from "./components/styles/globalStyles"
import { lightTheme, darkTheme } from "./components/Themes"
import './components/styles/globalStyles.css'



function App() {
  const [theme, setTheme] = useState('light')

  const themeToggler = () => {
    theme === 'light' 
      ? setTheme('dark') 
      : setTheme('light')
  }

  return (
    <ThemeProvider theme={theme === 'light'
      ? lightTheme
      : darkTheme}>
      <>
      <GlobalStyles />

        <div className="App">
        {/* <button onClick={themeToggler}>Switch Theme</button> */}
        <label className="switch">
        <input onClick={themeToggler} type="checkbox"></input>
          <span className="slider round"></span>
          <p className="toggleName">Light/dark theme</p>
        </label>
      <Welcome />
    </div>
    </>
    </ThemeProvider>
  );
}

export default App;
