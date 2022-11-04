import React from 'react';
import Table from 'react-bootstrap/Table';

function BmiList({range , bmi }) {
  console.log(range);
  return (
    <div  >
      <Table  bordered  className='text-center shadow rounded'>
      <thead>
        <tr className='bg-light'>
          
          <th>Type</th>
          <th>BMI</th>
          <th>WEIGHT</th>
        </tr>
      </thead>
      <tbody>
        <tr className={ bmi < 18.5 && "border border-danger border-3 shadow"}>
          
          <td>Underweight</td>
          <td>&lt; 18.5</td>
          <td>{range.underWeight.low} kg</td>
        </tr>
        <tr className= {18.5 < bmi && bmi < 24.9 && "border border-success border-3 shadow"}>
          
          <td>Normal</td>
          <td>18.5 - 24.9</td>
          <td>{range.normal.low} kg - {range.normal.high} kg</td>
        </tr>
        <tr className= {24.9 < bmi && bmi < 29.9 && "border border-danger border-3 shadow"}>
          <td>Over weight</td>
          <td>24.9 - 29.9</td>
          <td>{range.overWeight.low} kg - {range.overWeight.high} kg</td>
        </tr>
        <tr className= {29.9 < bmi && bmi < 34.4 && "border border-danger border-3 shadow"}>
          <td>Obesity Class I</td>
          <td>29.9 - 34.9</td>
          <td>{range.obesityOne.low} kg - {range.obesityOne.high} kg</td>
        </tr>
        <tr className= {34.4 < bmi && bmi < 39.9 && "border border-danger border-3 shadow"}>
          <td>Obesity Class II</td>
          <td>34.9 - 39.9</td>
          <td>{range.obesityTwo.low} kg - {range.obesityTwo.high} kg</td>
        </tr>
        <tr className={ bmi > 39.9 && "border border-danger border-3 shadow"}>
          <td>Obesity Class III</td>
          <td>&gt; 39.9</td>
          <td>{range.obesityThree.high} kg</td>
        </tr>
        
      </tbody>
    </Table>
    </div>
  )
}

export default BmiList