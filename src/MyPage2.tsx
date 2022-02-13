import * as React from 'react';
import { useTheme, Theme } from './ThemeContext';

const MyPage2 = () => {
  const { theme, setTheme } = useTheme();
  console.log(theme);

  return (
    <div>
      <button onClick={() => {
        if(theme === 'Dark'){
          setTheme(Theme.Light)
        }else{
          setTheme(Theme.Dark)
        }

      }}>
        switch to dark theme {theme}
      </button>
        my page 2
      </div>
  )
}

export default MyPage2;
