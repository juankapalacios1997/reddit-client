import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import ReactSwitch from 'react-switch';
import { useState } from 'react';
import './App.css';
import { Home } from "./features/posts/Posts";
import { Header } from "./features/Header/Header";
import { createContext } from 'react';
import { Subreddits } from "./features/subreddits/Subreddits"

import logo from "./reddit-logo-error.png";
import logoDark from "./reddit-dark-logo.png";
import logoLight from "./reddit-logo.png";

export const ThemeContext = createContext(null);

function App() {
  const [theme, setTheme] = useState("light");
  const toggleTheme = () => setTheme((curr) => curr === "light" ? "dark" : "light")

  return (
    <Router>
      <ThemeContext.Provider value={{theme, toggleTheme}} >
        <div className= "App" id={theme}>
          <div>
            <Header logo={theme === "light" ? logoLight : logoDark} />
          </div>
          <div className="body">
            <div className="subreditts">
              <Subreddits logo={logo} /> 
            </div>
            <div className="home">
              <Home />
            </div>
          </div>
          <ReactSwitch onChange={toggleTheme} checked={theme === "dark"} />
        </div>
        </ThemeContext.Provider>
      </Router>
  );
}

export default App;
