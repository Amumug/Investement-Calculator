import {useState} from 'react';

const InvestmentInput = ({
  setInitialInvestment,
  setAnnualInvestment,
  setExpectedReturn,
  setDuration,
}) => {
  const handleInitialInvestmentChange = (event) => {
    setInitialInvestment(event.target.value);
  };

  const handleAnnualInvestmentChange = (event) => {
    setAnnualInvestment(event.target.value);
  };

  const handleExpectedReturnChange = (event) => {
    setExpectedReturn(event.target.value);
  };

  const handleDurationChange = (event) => {
    setDuration(event.target.value);
  };

  return (
    <section id="user-input">
      <div className="input-group">
        <p>
          <label htmlFor="">Initial Investment</label>
          <input
            type="number"
            onChange={handleInitialInvestmentChange}
            required
          />
        </p>
        <p>
          <label htmlFor="">Annual Investment</label>
          <input
            type="number"
            onChange={handleAnnualInvestmentChange}
            required
          />
        </p>
      </div>
      <div className="input-group">
        <p>
          <label htmlFor="">Expected Return</label>
          <input
            type="number"
            onChange={handleExpectedReturnChange}
            required
          />
        </p>
        <p>
          <label htmlFor="">Duration (per Year)</label>
          <input
            type="number"
            onChange={handleDurationChange}
            min={0}
            required
          />
        </p>
      </div>
    </section>
  );
};

export default InvestmentInput;
