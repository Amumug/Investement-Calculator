import React, { useState, useEffect } from 'react';
import Header from './component/Header';
import InvestmentInput from './component/InvestmentInput';
import Result from './component/Result';

const App = () => {
  const [initialInvestment, setInitialInvestment] = useState(0);
  const [annualInvestment, setAnnualInvestment] = useState(0);
  const [expectedReturn, setExpectedReturn] = useState(0);
  const [duration, setDuration] = useState();
  const [investmentValues, setInvestmentValues] = useState([]);
  const error = 'Please Enter a postive number in duration Input'

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
      <Result investmentValues={investmentValues}/>
    </div>
  );
};

export default App;
