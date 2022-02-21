import * as React from 'react';
import { useTheme, Theme } from '../../ThemeContext';

const MyPage2 = () => {
  const { theme, setTheme } = useTheme();
  console.log(`page two rendering ${theme}`);

  return (
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
        <p>my page 2 is called nested from page 1 but not recursive</p>
        <p>
          just page 2 p elements with text and the copy paste item
          see if styles transcend from higher level components
          and if they dont; make them
        </p>
      </div>
  )
}

export default MyPage2;
