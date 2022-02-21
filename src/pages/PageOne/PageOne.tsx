import * as React from 'react';
import './PageOne.css';
import { useTheme, Theme } from '../../ThemeContext';
import PageTwo from '../../pages/PageTwo/PageTwo'; // nested component
import Media from '../../components/Media/Media';

const PageOne = () => {
  const { theme, setTheme } = useTheme();
  console.log(`page one function rendering ${theme}`);

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
              <Media url="https://ipfs.io/ipfs/QmWJ3HnbLKm3WM2rkjugbUJ1tNj5iWLb8ZbUJUw5GkhWmJ" />
              <Media url="https://ipfs.io/ipfs/QmcNtgAdi9fnHWHQa5QxWLFtRYNuyiHCe8VJyYXxLm55HX" />
              <p>Page One needs some style</p>
              <p>PageTwo is the component 👇</p>
            </div>
            <div className="page-wrapper">
              <PageTwo />
            </div>
    </div>
  )
}

export default PageOne;
