import React from 'react';
// import './Home.css';
import { useTheme, Theme } from '../../ThemeContext';
import { Link } from "react-router-dom";

export default function About() {
  const { theme, setTheme } = useTheme();
  return (
    <>
      <main>
        <h2>Who are we?</h2>
        <p>
          That feels like an existential question, don't you
          think?
        </p>
        <p>
          Well, you can set dark and light mode and see state here too
        </p>
        <div>
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
      <nav>
        <Link to="/">Home</Link>
      </nav>
    </>
  );
}
