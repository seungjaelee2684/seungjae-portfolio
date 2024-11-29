import React from 'react';
import logo from './logo.svg';
import './App.css';
import { BrowserRouter } from 'react-router-dom';
import Router from './shared/Router';
import { useSelector } from 'react-redux';
import { RootState } from './store/config/configureStore';
import { commonBgColor, commonTextColor } from './styles/colorToken';

function App() {

  const theme = useSelector((state: RootState) => state.darkMode);
  const isDark = (theme === 1) ? true : false;

  return (
    <main
      className='App'
      style={{
        color: commonTextColor[theme],
        backgroundColor: commonBgColor[theme]
      }}>
      <Router />
    </main>
  );
}

export default App;