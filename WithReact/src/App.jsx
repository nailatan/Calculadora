import { useState } from 'react'
import './App.css'

const numbers =[0,1,2,3,4,5,6,7,8,9];

function CreateTables() {
  const num = 1;
  return numbers.map((num)=> createTable(num));
}

function createTable(num) {
  const a = "table_{num}";
  return (
    <div id={"div_"+num}>
    <table>
      <thead>
        <tr>
          <td>Tabla del {num}</td>
        </tr>
      </thead>
      <tbody>
        {createTableBody(num)}
      </tbody>
    </table>
    </div>
    );
}

function createTableBody(num) {
  return  numbers.map((elem)=> {
  return (<tr>
    <td>{num} &times; {elem} = {num*elem}</td>
  </tr>);
  })
}

export default CreateTables
