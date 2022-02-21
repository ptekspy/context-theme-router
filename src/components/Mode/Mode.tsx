import React from 'react';
import './Mode.css';
import { useTheme, Theme } from '../../ThemeContext';

export default function Mode() {
  const { theme, setTheme } = useTheme();
  return (
        <span
          className="mode-setting"
          onClick={() => {
            if(theme === 'Dark'){
              setTheme(Theme.Light)
            }else{
              setTheme(Theme.Dark)
            }
          }}>
            {theme === 'Dark'?
              (<><span className="empty"></span><span className="circle-switch">🌙</span></>)
            :
              (<><span className="circle-switch">🌞</span><span className="empty"></span></>)
            }
        </span>
  );
}
