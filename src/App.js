import React from 'react';
import logo from './logo.svg';
import './App.css';
import Game from './components/Game';

function App() {
  return (
    <div className="App">
      <header>
        <h1 className="title">Tic-Tac-Toe</h1>
      </header>
      <Game />
    </div>
  );
}

export default App;
