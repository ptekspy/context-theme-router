import * as React from 'react';
import './App.css';
import { Routes, Route, Link } from "react-router-dom";
import { ThemeContext, Theme } from './ThemeContext';
import { useLocalStorage } from "./hooks/useLocalStorage"
import PageOne from './pages/PageOne/PageOne';
import Home from './components/Home/Home';
import About from './components/About/About';
import ReactDOM from 'react-dom';

function App() {
  const [theme, setTheme] = useLocalStorage("storeTheme",Theme.Light);

  return (
    <ThemeContext.Provider value={{ theme, setTheme }}>
      <div className="App">
        <header className={`App-header-${theme.toString().toLowerCase()}`}>
          <>
            <div className="routes-container">
              <Routes>
                <Route path="/" element={<Home />} />
                <Route path="about" element={<About />} />
              </Routes>
            </div>
            <div className="page">
              <PageOne />
            </div>
          </>
        </header>
      </div>
    </ThemeContext.Provider>
  );
}

export default App;

// https://www.pluralsight.com/guides/using-react's-context-api-with-typescript
