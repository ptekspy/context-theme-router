import React from 'react';
import './About.css';
import { useTheme, Theme } from '../../ThemeContext';
import { Link } from "react-router-dom";

export default function About() {
  const { theme, setTheme } = useTheme();
  return (
    <>
      <nav>
        <Link to="/">Home</Link>
      </nav>
      <main>
        <h2>About page clicked</h2>
        <p>
          You can set dark and light mode icon (stles don't adjust yet) and verify state is changed (the ocon adjusts).
          If you refresh the page you can verify that local storage is being used to persist
        </p>
        <div className="mode-setting">
            <span>{theme === 'Dark' ? "🌙" : "🌞"}</span>
            <button onClick={() => {
              if(theme === 'Dark'){
                setTheme(Theme.Light)
              }else{
                setTheme(Theme.Dark)
              }
            }}>
              switch to dark theme {theme}
          </button>
        </div>
      </main>
    </>
  );
}
