import React, { useState, useEffect } from "react"
import './App.css';
import Welcome from './components/Landing'
import 'bootstrap/dist/css/bootstrap.min.css'
import {ThemeProvider} from "styled-components"
import { GlobalStyles } from "./components/styles/globalStyles"
import { lightTheme, darkTheme } from "./components/Themes"



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
        <button onClick={themeToggler}>Switch Theme</button>
      <Welcome />
    </div>
    </>
    </ThemeProvider>
  );
}

export default App;
