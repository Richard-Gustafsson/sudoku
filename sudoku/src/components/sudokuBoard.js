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

  /*This function will recive a random value and row value.
  Then iterate trough the selected row and check if the value exist*/
  checkRow = (val, row) => {
    for(let i = 0; i < this.state.board[row].length; i++) {
      if(this.state.board[row][i] === val) {
        return false;
      }
    }
    return true;
  }

  /*This function will recive a random value and column value.
  Then iterate trough the the board and check selected column with the value on every row,
  to see if the value exist*/
  checkColumn = (val, col) => {
    for(let i = 0; i < this.state.board.length; i++) {
      if(this.state.board[i][col] === val) {
        return false;
      }
    }
    return true;
  }

  /*This function will recive a random value and column- and row values
  The function will find the 3x3 square that matches the values.*/
  checkSquare = (val, col, row) => {
    let colCorner = 0;
    let rowCorner = 0;
    let square = 3;

    //To find the left corner of the square
    while(col >= colCorner + square) {
      colCorner += square;
    }

    //To find the upper row
    while(row >= rowCorner + square) {
      rowCorner += square;
    }

    // Iterate through each matching row
    for(let i = rowCorner; i < rowCorner + square; i++) {
      // Iterate through each matching column
      for(let j = colCorner; j < colCorner + square; j++) {
        if(this.state.board[i][j] === val) {
          return false;
        }
      }
    }
  return true;
  }

  /*Purpose of this function is simply to call the evaluation functions
  If the evaluation functions return true, it will return true.
  (checkSquare not added yet)*/
  checkIfOk = (val, row, col) => {
    if(this.checkRow(val, row) && this.checkColumn(val, col)) {
      return true;
    }
    else {
      return false;
    }
  }

  /*This function is called when "Generate"-button is clicked
  It will iterate through the board and for every small square
  it will check the row and column and eventually 3x3 square
  (What is missing here is backtracking, that I did not complete)*/
  fillBoard = () => {
    let i = 0,
        row = 0,
        found,
        tempBoard = this.state.board;

    //Iterate all rows on the board
    while(i < this.state.board.length) {
      let j = 0,
          col = 0;

      //Iterate a row in the board
      while(j < this.state.board[row].length) {
        let min = Math.ceil(1),
            max = Math.floor(10),
            val = Math.floor(Math.random() * (max - min)) + min;

        //If checkValue returns true, the value will be set on the small square
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

  /*This was going to be my backtracking method, did not have
  the time to finish it. It should check which values are left to
  use in a row. Then calculate the the amount of tries left with the values left,
  if the program could not find the value, then go back one square and change value.*/
  getValuesLeftInRow = (row) => {

  }

  /*Renders a simple board layout on the screen. Could be done in a better way,
  using a loop to create the layout, instead of doing it manually*/
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
