import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import ReactSwitch from 'react-switch';
import { useState } from 'react';
import './App.css';
import { Home } from "./features/Home/Home";
import { Header } from "./features/Header/Header";
import { createContext } from 'react';
import { Subreddits } from "./features/subreddits/Subreddits"

export const ThemeContext = createContext(null);

function App() {
  const [theme, setTheme] = useState("light");
  const toggleTheme = () => setTheme((curr) => curr === "light" ? "dark" : "light")

  return (
    <Router>
      <ThemeContext.Provider value={{theme, toggleTheme}} >
        <div className= "App" id={theme}>
          <div>
            <Header style={theme}/>
          </div>
          <div>
            <Home />  
          </div>
          <div className="subreditts" >
            <Subreddits />
          </div>
          <div className="Switch" />
          <ReactSwitch onChange={toggleTheme} checked={theme === "dark"} />
        </div>
        </ThemeContext.Provider>
      </Router>
  );
}

export default App;
