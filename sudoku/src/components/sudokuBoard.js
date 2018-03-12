import React, { Component } from 'react';
import '../style/sudokuBoardStyle.css';

// let array = [ 0,1,0,0,0,0,0,0,0,
//               0,0,0,2,0,0,0,0,0,
//               0,0,0,0,0,0,0,0,0,
//               0,0,0,0,0,0,0,0,0,
//               0,0,0,0,0,0,0,0,0,
//               0,0,0,0,0,0,0,0,0,
//               0,0,0,0,0,4,0,0,0,
//               0,0,0,0,0,0,0,0,0,
//               0,0,5,0,0,0,0,0,0 ];



// const SudokuBoard = (props) => {
export default class SudokuBoard extends Component {

  constructor(props) {
    super(props);
    this.state = {
      array : [ [0,0,0,0,0,0,0,0,0],
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

  checkRow = (val) => {

    console.log('test', this.state.array[0])

    for(let i = 0; i < this.state.array[0].length; i++) {
      if(this.state.array[0][i] === val) {
        return false;
      }
    }
    return true;
  }

  checkColumn = (val) => {
    for(let i = 0; i < this.state.array.length; i++) {
      //console.log(this.state.array[i]);
      if(this.state.array[i][0] === val) {
        console.log("false", this.state.array[i]);
        return false;
      }
    }
    return true;
  }

  checkSquare = (val, col, cow) => {
    let colCorner = 0;
    let rowCorner=0;
    let square = 3;


  }

  checkIfOk = (val) => {
    if(this.checkRow(val) && this.checkColumn(val)) {
      console.log("Det gick bra");
      return true;
    }
    else {
      console.log("Det gick mindre bra");
      return false;
    }
  }

  fillBoard = () => {

    let min = Math.ceil(1);
    let max = Math.floor(10);
    let val = Math.floor(Math.random() * (max - min)) + min;

    
    // let t = document.getElementById("sb");
    // let cell = document.getElementsByName('td')
    //
    //
    // for(let r = 0; r < t.rows.length; r++) {
    //   for(let c = 0; c < 9; c++) {
    //     let cellText = document.createTextNode(c);
    //     console.log(cell.text)
    //   }
    // }
  }

  render() {
    return (
      <div className="SudokuDiv">
        <table name="Sudoku" id="sb">
          <tbody>
            <tr id="1">
              <td id="11">{this.state.array[0][0]}</td>
              <td id="12">{this.state.array[0][1]}</td>
              <td id="13">{this.state.array[0][2]}</td>
              <td id="14">{this.state.array[0][3]}</td>
              <td id="15">{this.state.array[0][4]}</td>
              <td id="16">{this.state.array[0][5]}</td>
              <td id="17">{this.state.array[0][6]}</td>
              <td id="18">{this.state.array[0][7]}</td>
              <td id="19">{this.state.array[0][8]}</td>
            </tr>
            <tr id="2">
              <td id="21">{this.state.array[1][0]}</td>
              <td id="22">{this.state.array[1][1]}</td>
              <td id="23">{this.state.array[1][2]}</td>
              <td id="24">{this.state.array[1][3]}</td>
              <td id="25">{this.state.array[1][4]}</td>
              <td id="26">{this.state.array[1][5]}</td>
              <td id="27">{this.state.array[1][6]}</td>
              <td id="28">{this.state.array[1][7]}</td>
              <td id="29">{this.state.array[1][8]}</td>
            </tr>
            <tr id="3">
              <td id="31">{this.state.array[2][0]}</td>
              <td id="32">{this.state.array[2][1]}</td>
              <td id="33">{this.state.array[2][2]}</td>
              <td id="34">{this.state.array[2][3]}</td>
              <td id="35">{this.state.array[2][4]}</td>
              <td id="36">{this.state.array[2][5]}</td>
              <td id="37">{this.state.array[2][6]}</td>
              <td id="38">{this.state.array[2][7]}</td>
              <td id="39">{this.state.array[2][8]}</td>
            </tr>
            <tr id="4">
              <td id="41">{this.state.array[3][0]}</td>
              <td id="42">{this.state.array[3][1]}</td>
              <td id="43">{this.state.array[3][2]}</td>
              <td id="44">{this.state.array[3][3]}</td>
              <td id="45">{this.state.array[3][4]}</td>
              <td id="46">{this.state.array[3][5]}</td>
              <td id="47">{this.state.array[3][6]}</td>
              <td id="48">{this.state.array[3][7]}</td>
              <td id="49">{this.state.array[3][8]}</td>
            </tr>
            <tr id="5">
              <td id="51">{this.state.array[4][0]}</td>
              <td id="52">{this.state.array[4][1]}</td>
              <td id="53">{this.state.array[4][2]}</td>
              <td id="54">{this.state.array[4][3]}</td>
              <td id="55">{this.state.array[4][4]}</td>
              <td id="56">{this.state.array[4][5]}</td>
              <td id="57">{this.state.array[4][6]}</td>
              <td id="58">{this.state.array[4][7]}</td>
              <td id="59">{this.state.array[4][8]}</td>
            </tr>
            <tr id="6">
              <td id="61">{this.state.array[5][0]}</td>
              <td id="62">{this.state.array[5][1]}</td>
              <td id="63">{this.state.array[5][2]}</td>
              <td id="64">{this.state.array[5][3]}</td>
              <td id="65">{this.state.array[5][4]}</td>
              <td id="66">{this.state.array[5][5]}</td>
              <td id="67">{this.state.array[5][6]}</td>
              <td id="68">{this.state.array[5][7]}</td>
              <td id="69">{this.state.array[5][8]}</td>
            </tr>
            <tr id="7">
              <td id="71">{this.state.array[6][0]}</td>
              <td id="72">{this.state.array[6][1]}</td>
              <td id="73">{this.state.array[6][2]}</td>
              <td id="74">{this.state.array[6][3]}</td>
              <td id="75">{this.state.array[6][4]}</td>
              <td id="76">{this.state.array[6][5]}</td>
              <td id="77">{this.state.array[6][6]}</td>
              <td id="78">{this.state.array[6][7]}</td>
              <td id="79">{this.state.array[6][8]}</td>
            </tr>
            <tr id="8">
              <td id="81">{this.state.array[7][0]}</td>
              <td id="82">{this.state.array[7][1]}</td>
              <td id="83">{this.state.array[7][2]}</td>
              <td id="84">{this.state.array[7][3]}</td>
              <td id="85">{this.state.array[7][4]}</td>
              <td id="86">{this.state.array[7][5]}</td>
              <td id="87">{this.state.array[7][6]}</td>
              <td id="88">{this.state.array[7][7]}</td>
              <td id="89">{this.state.array[7][8]}</td>
            </tr>
            <tr id="9">
              <td id="91">{this.state.array[8][0]}</td>
              <td id="92">{this.state.array[8][1]}</td>
              <td id="93">{this.state.array[8][2]}</td>
              <td id="94">{this.state.array[8][3]}</td>
              <td id="95">{this.state.array[8][4]}</td>
              <td id="96">{this.state.array[8][5]}</td>
              <td id="97">{this.state.array[8][6]}</td>
              <td id="98">{this.state.array[8][7]}</td>
              <td id="99">{this.state.array[8][8]}</td>
            </tr>
          </tbody>
        </table>

        <button onClick={() => this.fillBoard()}>Generate</button>
      </div>
    );
  }
}

//export default SudokuBoard;
