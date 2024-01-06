import React from 'react';

const Result = ({ investmentValues }) => {
  return (
    <table id="result">
      <thead>
        <tr>
          <th>Year</th>
          <th>Investment Value</th>
          <th>Interest per Year</th>
          <th>Total Interest</th>
          <th>Invested Capital</th>
        </tr>
      </thead>
      <tbody>
        {investmentValues.map((data) => (
          <tr key={data.year}>
            <td>{data.year}</td>
            <td>{data.investmentValue}$</td>
            <td>{data.interestPerYear}$</td>
            <td>{data.totalInterest}$</td>
            <td>{data.investedCapital}$</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default Result;
