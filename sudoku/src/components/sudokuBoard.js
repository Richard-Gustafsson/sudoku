import React from 'react';
import '../style/sudokuBoardStyle.css';

const SudokuBoard = () => {

  const fillBoard = () => {
    console.log("table");
  }

  return (
    <div className="SudokuDiv">
      <table name="Sudoku" id="sb">
      <tbody>
        <tr id="1">
          <td id="11"></td>
          <td id="12"></td>
          <td id="13"></td>
          <td id="14"></td>
          <td id="15"></td>
          <td id="16"></td>
          <td id="17"></td>
          <td id="18"></td>
          <td id="19"></td>
        </tr>
        <tr id="2">
          <td id="21"></td>
          <td id="22"></td>
          <td id="23"></td>
          <td id="24"></td>
          <td id="25"></td>
          <td id="26"></td>
          <td id="27"></td>
          <td id="28"></td>
          <td id="29"></td>
        </tr>
        <tr id="3">
          <td id="31"></td>
          <td id="32"></td>
          <td id="33"></td>
          <td id="34"></td>
          <td id="35"></td>
          <td id="36"></td>
          <td id="37"></td>
          <td id="38"></td>
          <td id="39"></td>
        </tr>
        <tr id="4">
          <td id="41"></td>
          <td id="42"></td>
          <td id="43"></td>
          <td id="44"></td>
          <td id="45"></td>
          <td id="46"></td>
          <td id="47"></td>
          <td id="48"></td>
          <td id="49"></td>
        </tr>
        <tr id="5">
          <td id="51"></td>
          <td id="52"></td>
          <td id="53"></td>
          <td id="54"></td>
          <td id="55"></td>
          <td id="56"></td>
          <td id="57"></td>
          <td id="58"></td>
          <td id="59"></td>
        </tr>
        <tr id="6">
          <td id="61"></td>
          <td id="62"></td>
          <td id="63"></td>
          <td id="64"></td>
          <td id="65"></td>
          <td id="66"></td>
          <td id="67"></td>
          <td id="68"></td>
          <td id="69"></td>
        </tr>
        <tr id="7">
          <td id="71"></td>
          <td id="72"></td>
          <td id="73"></td>
          <td id="74"></td>
          <td id="75"></td>
          <td id="76"></td>
          <td id="77"></td>
          <td id="78"></td>
          <td id="79"></td>
        </tr>
        <tr id="8">
          <td id="81"></td>
          <td id="82"></td>
          <td id="83"></td>
          <td id="84"></td>
          <td id="85"></td>
          <td id="86"></td>
          <td id="87"></td>
          <td id="88"></td>
          <td id="89"></td>
        </tr>
        <tr id="9">
          <td id="91"></td>
          <td id="92"></td>
          <td id="93"></td>
          <td id="94"></td>
          <td id="95"></td>
          <td id="96"></td>
          <td id="97"></td>
          <td id="98"></td>
          <td id="99"></td>
        </tr>
        </tbody>
      </table>

      <button type="button" onClick={() => this.fillBoard}>Generate</button>
    </div>
  );
}

export default SudokuBoard;
