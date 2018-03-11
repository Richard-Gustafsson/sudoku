import React, { Component } from 'react';
import './App.css';
import SudokuBoard from './components/sudokuBoard';

class App extends Component {
  render() {
    return (
      <div className="App">
        <p>SUDOKU</p>
        <SudokuBoard />
      </div>
    );
  }
}

export default App;
