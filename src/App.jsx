import React, { useState, useEffect } from 'react';
import Header from './component/Header';
import InvestmentInput from './component/InvestmentInput';

const InvestmentCalculator = () => {
  const [initialInvestment, setInitialInvestment] = useState(0);
  const [annualInvestment, setAnnualInvestment] = useState(0);
  const [expectedReturn, setExpectedReturn] = useState(0);
  const [duration, setDuration] = useState(0);
  const [investmentValues, setInvestmentValues] = useState([]);

  useEffect(() => {
    const years = parseInt(duration);
    const rate = parseFloat(expectedReturn) / 100;

    let data = [];

    let totalInvestment = parseFloat(initialInvestment);
    let totalInterestAccumulated = 0;
    let investedAmount = parseFloat(initialInvestment);

    for (let i = 1; i <= years; i++) {
      const yearlyReturn = (investedAmount + parseFloat(annualInvestment)) * rate;
      totalInterestAccumulated += yearlyReturn;
      investedAmount += parseFloat(annualInvestment);
      totalInvestment += yearlyReturn + parseFloat(annualInvestment);

      data.push({
        year: i,
        investmentValue: totalInvestment.toFixed(2),
        interestPerYear: (totalInterestAccumulated / i).toFixed(2),
        totalInterest: totalInterestAccumulated.toFixed(2),
        investedCapital: investedAmount.toFixed(2),
      });
    }

    setInvestmentValues(data);
  }, [initialInvestment, annualInvestment, expectedReturn, duration]);

  return (
    <div>
      <Header />
      <InvestmentInput
        setInitialInvestment={setInitialInvestment}
        setAnnualInvestment={setAnnualInvestment}
        setExpectedReturn={setExpectedReturn}
        setDuration={setDuration}
      />

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
              <td>{data.investmentValue}</td>
              <td>{data.interestPerYear}</td>
              <td>{data.totalInterest}</td>
              <td>{data.investedCapital}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default InvestmentCalculator;
