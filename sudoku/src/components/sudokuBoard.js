import React, { Component } from 'react';
import '../style/sudokuBoardStyle.css';

export default class SudokuBoard extends Component {

  constructor(props) {
    super(props);
    this.state = {
      board : [ [0,0,0,0,0,0,0,0,0],
                [0,0,0,0,0,0,0,0,0],
                [0,0,0,0,0,0,0,0,0],
                [0,0,0,0,0,0,0,0,0],
                [0,0,0,0,0,0,0,0,0],
                [0,0,0,0,0,0,0,0,0],
                [0,0,0,0,0,0,0,0,0],
                [0,0,0,0,0,0,0,0,0],
                [0,0,0,0,0,0,0,0,0] ]
    }
  }

  checkRow = (val, row) => {
    for(let i = 0; i < this.state.board[row].length; i++) {
      console.log('På rad: ', row);
      if(this.state.board[row][i] === val) {
        return false;
      }
    }
    return true;
  }

  checkColumn = (val, col) => {
    for(let i = 0; i < this.state.board.length; i++) {
      console.log('På col: ', col);
      if(this.state.board[i][col] === val) {
        console.log('Hittade samma värde i samma kolumn: ', col);
        return false;
      }
    }
    return true;
  }

  checkSquare = (val, col, row) => {
    let colCorner = 0;
    let rowCorner=0;
    let square = 3;

    while(col >= colCorner + square) {
      colCorner += square;
    }

    while(row >= rowCorner + square) {
      rowCorner += square;
    }

    // Iterate through each row
    for(let i = rowCorner; i < rowCorner + square; i++) {
      // Iterate through each column
      for(let j = colCorner; j < colCorner + square; j++) {
        // Return false is a match is found
        if(this.state.board[i][j] === val) {
          return false;
        }
      }
    }
  return true;
  }

  checkIfOk = (val, row, col) => {
    console.log('Inne i checkifOK med värdet: ', val)
    if(this.checkRow(val, row) && this.checkColumn(val, col)) {
      console.log("Det gick bra");
      return true;
    }
    else {
      console.log("Det gick mindre bra");
      return false;
    }
  }

  fillBoard = () => {
    console.log('Kommer in i fillboard');
    let i = 0,
        row = 0,
        col = 0,
        found,
        tempBoard = this.state.board;

    while(i < this.state.board.length) {
      console.log('Är inne i första while-loopen');
      let j = 0;
      col = 0;

      while(j < this.state.board[row].length) {
        let min = Math.ceil(1),
            max = Math.floor(10),
            val = Math.floor(Math.random() * (max - min)) + min;

        tempBoard.forEach(function(row) {
          console.log(row.join());
        });

        if(this.checkIfOk(val, row, col)) {
          tempBoard[i][j] = val;
          this.setState({board: tempBoard});
          col++;
          j++;
        }
      }
      row++;
      i++;
    }
  }

  getValuesLeftInRow = (row) => {
    
  }
  // fillBoard = () => {
  //   console.log('Kommer in i fillboard');
  //   let i = 0;
  //   let row = 0; //Rows that will be checked
  //   let col = 0; //Columns that will be checked
  //   let tempBoard = this.state.board;
  //
  //   while(i < this.state.board.length) { //Här går jag igenom min yttersta board
  //      console.log('Inne i första while-loopen ', i);
  //     if(i === this.state.board.length) {
  //       break;
  //     }else {
  //       let j = 0;
  //       col = 0;
  //
  //       while(j < this.state.board[row].length) {
  //         console.log('Inne i andra while-loopen ', j);
  //         let min = Math.ceil(1);
  //         let max = Math.floor(10);
  //         let val = Math.floor(Math.random() * (max - min)) + min;
  //
  //         if(this.checkIfOk(val, row, col) == true) {
  //           tempBoard[i][j] = val;
  //           this.setState({
  //             board : tempBoard
  //           });
  //           col++;
  //           j++;
  //         }
  //       }
  //
  //       row++;
  //       i++;
  //     }
  //   }
  // }

  solvePuzzle = () => {
  // Variables to track our position in the solver
  let limit = 9,
      i, row, column, value, found;
  let tempBoard = this.state.board;

  for(i = 0; i < 81; i++) {
    row = tempBoard[i];
    column = tempBoard[i][0];
    // Try the next value
    value = tempBoard[row][column] + 1;
    // Was a valid number found?
    found = false;
    // Keep trying new values until either the limit
    // was reached or a valid value was found
    while(!found && value <= limit) {
      // If a valid value is found, mark found true,
      // set the position to the value, and move to the
      // next position
      if(this.checkIfOk(value, row, column)) {
        found = true;
        tempBoard[row][column] = value;
        i++;
      }
      // Otherwise, try the next value
      else {
        value++;
      }
    }
    // If no valid value was found and the limit was
    // reached, move back to the previous position
    if(!found) {
      tempBoard[row][column] = 0;
      i--;
    }
  }

  // A solution was found! Log it
  this.state.board.forEach(function(row) {
    console.log(row.join());
  });

  // return the solution
  this.setState({
    board: tempBoard
  });
};






  render() {
    return (
      <div className="SudokuDiv">
        <table name="Sudoku" id="sb">
          <tbody>
            <tr id="1">
              <td id="11">{this.state.board[0][0]}</td>
              <td id="12">{this.state.board[0][1]}</td>
              <td id="13">{this.state.board[0][2]}</td>
              <td id="14">{this.state.board[0][3]}</td>
              <td id="15">{this.state.board[0][4]}</td>
              <td id="16">{this.state.board[0][5]}</td>
              <td id="17">{this.state.board[0][6]}</td>
              <td id="18">{this.state.board[0][7]}</td>
              <td id="19">{this.state.board[0][8]}</td>
            </tr>
            <tr id="2">
              <td id="21">{this.state.board[1][0]}</td>
              <td id="22">{this.state.board[1][1]}</td>
              <td id="23">{this.state.board[1][2]}</td>
              <td id="24">{this.state.board[1][3]}</td>
              <td id="25">{this.state.board[1][4]}</td>
              <td id="26">{this.state.board[1][5]}</td>
              <td id="27">{this.state.board[1][6]}</td>
              <td id="28">{this.state.board[1][7]}</td>
              <td id="29">{this.state.board[1][8]}</td>
            </tr>
            <tr id="3">
              <td id="31">{this.state.board[2][0]}</td>
              <td id="32">{this.state.board[2][1]}</td>
              <td id="33">{this.state.board[2][2]}</td>
              <td id="34">{this.state.board[2][3]}</td>
              <td id="35">{this.state.board[2][4]}</td>
              <td id="36">{this.state.board[2][5]}</td>
              <td id="37">{this.state.board[2][6]}</td>
              <td id="38">{this.state.board[2][7]}</td>
              <td id="39">{this.state.board[2][8]}</td>
            </tr>
            <tr id="4">
              <td id="41">{this.state.board[3][0]}</td>
              <td id="42">{this.state.board[3][1]}</td>
              <td id="43">{this.state.board[3][2]}</td>
              <td id="44">{this.state.board[3][3]}</td>
              <td id="45">{this.state.board[3][4]}</td>
              <td id="46">{this.state.board[3][5]}</td>
              <td id="47">{this.state.board[3][6]}</td>
              <td id="48">{this.state.board[3][7]}</td>
              <td id="49">{this.state.board[3][8]}</td>
            </tr>
            <tr id="5">
              <td id="51">{this.state.board[4][0]}</td>
              <td id="52">{this.state.board[4][1]}</td>
              <td id="53">{this.state.board[4][2]}</td>
              <td id="54">{this.state.board[4][3]}</td>
              <td id="55">{this.state.board[4][4]}</td>
              <td id="56">{this.state.board[4][5]}</td>
              <td id="57">{this.state.board[4][6]}</td>
              <td id="58">{this.state.board[4][7]}</td>
              <td id="59">{this.state.board[4][8]}</td>
            </tr>
            <tr id="6">
              <td id="61">{this.state.board[5][0]}</td>
              <td id="62">{this.state.board[5][1]}</td>
              <td id="63">{this.state.board[5][2]}</td>
              <td id="64">{this.state.board[5][3]}</td>
              <td id="65">{this.state.board[5][4]}</td>
              <td id="66">{this.state.board[5][5]}</td>
              <td id="67">{this.state.board[5][6]}</td>
              <td id="68">{this.state.board[5][7]}</td>
              <td id="69">{this.state.board[5][8]}</td>
            </tr>
            <tr id="7">
              <td id="71">{this.state.board[6][0]}</td>
              <td id="72">{this.state.board[6][1]}</td>
              <td id="73">{this.state.board[6][2]}</td>
              <td id="74">{this.state.board[6][3]}</td>
              <td id="75">{this.state.board[6][4]}</td>
              <td id="76">{this.state.board[6][5]}</td>
              <td id="77">{this.state.board[6][6]}</td>
              <td id="78">{this.state.board[6][7]}</td>
              <td id="79">{this.state.board[6][8]}</td>
            </tr>
            <tr id="8">
              <td id="81">{this.state.board[7][0]}</td>
              <td id="82">{this.state.board[7][1]}</td>
              <td id="83">{this.state.board[7][2]}</td>
              <td id="84">{this.state.board[7][3]}</td>
              <td id="85">{this.state.board[7][4]}</td>
              <td id="86">{this.state.board[7][5]}</td>
              <td id="87">{this.state.board[7][6]}</td>
              <td id="88">{this.state.board[7][7]}</td>
              <td id="89">{this.state.board[7][8]}</td>
            </tr>
            <tr id="9">
              <td id="91">{this.state.board[8][0]}</td>
              <td id="92">{this.state.board[8][1]}</td>
              <td id="93">{this.state.board[8][2]}</td>
              <td id="94">{this.state.board[8][3]}</td>
              <td id="95">{this.state.board[8][4]}</td>
              <td id="96">{this.state.board[8][5]}</td>
              <td id="97">{this.state.board[8][6]}</td>
              <td id="98">{this.state.board[8][7]}</td>
              <td id="99">{this.state.board[8][8]}</td>
            </tr>
          </tbody>
        </table>

        <button onClick={() => this.fillBoard()}>Generate</button>
      </div>
    );
  }
}

// Inne i checkifOK med värdet:  1
// 4sudokuBoard.js:23 På rad:  5
// sudokuBoard.js:75 Det gick mindre bra
// sudokuBoard.js:98 9,4,2,3,8,1,7,6,5
// sudokuBoard.js:98 5,8,3,2,4,7,6,1,9
// sudokuBoard.js:98 8,1,4,9,2,5,3,7,6
// sudokuBoard.js:98 2,3,6,8,9,4,1,5,7
// sudokuBoard.js:98 3,9,8,6,7,2,5,4,1
// sudokuBoard.js:98 4,6,5,1,3,9,2,8,0
// 3sudokuBoard.js:98 0,0,0,0,0,0,0,0,0
// sudokuBoard.js:69 Inne i checkifOK med värdet:  4
// sudokuBoard.js:23 På rad:  5
// sudokuBoard.js:75 Det gick mindre bra
// sudokuBoard.js:98 9,4,2,3,8,1,7,6,5
// sudokuBoard.js:98 5,8,3,2,4,7,6,1,9
// sudokuBoard.js:98 8,1,4,9,2,5,3,7,6
// sudokuBoard.js:98 2,3,6,8,9,4,1,5,7
// sudokuBoard.js:98 3,9,8,6,7,2,5,4,1
// sudokuBoard.js:98 4,6,5,1,3,9,2,8,0
// 3sudokuBoard.js:98 0,0,0,0,0,0,0,0,0
// sudokuBoard.js:69 Inne i checkifOK med värdet:  4
// sudokuBoard.js:23 På rad:  5
// sudokuBoard.js:75 Det gick mindre bra
// sudokuBoard.js:98 9,4,2,3,8,1,7,6,5
// sudokuBoard.js:98 5,8,3,2,4,7,6,1,9
// sudokuBoard.js:98 8,1,4,9,2,5,3,7,6
// sudokuBoard.js:98 2,3,6,8,9,4,1,5,7
// sudokuBoard.js:98 3,9,8,6,7,2,5,4,1
// sudokuBoard.js:98 4,6,5,1,3,9,2,8,0
// 3sudokuBoard.js:98 0,0,0,0,0,0,0,0,0
// sudokuBoard.js:69 Inne i checkifOK med värdet:  8
// 8sudokuBoard.js:23 På rad:  5
// sudokuBoard.js:75 Det gick mindre bra
// sudokuBoard.js:98 9,4,2,3,8,1,7,6,5
// sudokuBoard.js:98 5,8,3,2,4,7,6,1,9
// sudokuBoard.js:98 8,1,4,9,2,5,3,7,6
// sudokuBoard.js:98 2,3,6,8,9,4,1,5,7
// sudokuBoard.js:98 3,9,8,6,7,2,5,4,1
// sudokuBoard.js:98 4,6,5,1,3,9,2,8,0
// 3sudokuBoard.js:98 0,0,0,0,0,0,0,0,0
// sudokuBoard.js:69 Inne i checkifOK med värdet:  2
