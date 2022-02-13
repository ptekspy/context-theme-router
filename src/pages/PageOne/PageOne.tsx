import * as React from 'react';
import './PageOne.css';
import { useTheme, Theme } from '../../ThemeContext';
import PageTwo from '../../pages/PageTwo/PageTwo'; // nested component

const PageOne = () => {
  const { theme, setTheme } = useTheme();
  console.log(theme);

  return (
<div className={`p1p-${theme.toString().toLowerCase()}`}>
    <div>{theme === 'Dark' ? "🌙" : "🌞"}</div>
      <button onClick={() => {
        if(theme === 'Dark'){
          setTheme(Theme.Light)
        }else{
          setTheme(Theme.Dark)
        }
      }}>
        switch to dark theme {theme}
      </button>
        <div className={`p1p-wrap-${theme.toString().toLowerCase()}`}>
          <p>Page One needs some style</p>
          <p>Page Two is called MyPage2 still</p>
          <p>PageTwo is the component 👇</p>
        </div>
        <div className="page-wrapper">
          <PageTwo />
        </div>
</div>
  )
}

export default PageOne;
