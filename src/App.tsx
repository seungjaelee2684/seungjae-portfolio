import React from 'react';
import logo from './logo.svg';
import './App.css';
import { BrowserRouter } from 'react-router-dom';
import Router from './shared/Router';

function App() {
  return (
    <main className='App'>
      <Router />
    </main>
  );
}

export default App;