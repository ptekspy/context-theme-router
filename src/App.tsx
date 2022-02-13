import * as React from 'react';
import './App.css';
import { Routes, Route, Link } from "react-router-dom";
import { ThemeContext, Theme } from './ThemeContext';
import MyPage from './MyPage';
import Home from './components/Home/Home';
import About from './components/About/About';
import ReactDOM from 'react-dom';

function App() {
  const [theme, setTheme] = React.useState(Theme.Light);

  return (
    <ThemeContext.Provider value={{ theme, setTheme }}>
      <div className="App">
        <header className="App-header">
          <>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="about" element={<About />} />
            </Routes>
            <div className="page">
              <MyPage />
            </div>
          </>
        </header>
      </div>
    </ThemeContext.Provider>
  );
}

export default App;

// https://www.pluralsight.com/guides/using-react's-context-api-with-typescript
