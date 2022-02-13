import * as React from 'react';
import { useTheme, Theme } from './ThemeContext';
import MyPage2 from './MyPage2';


const MyPage = () => {
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
        my page
        <div>
          <MyPage2 />
        </div>
      </div>
  )
}

export default MyPage;
