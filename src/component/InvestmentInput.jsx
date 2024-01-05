import React from 'react';

const InvestmentInput = ({
  setInitialInvestment,
  setAnnualInvestment,
  setExpectedReturn,
  setDuration,
}) => {
  const handleInitialInvestmentChange = (e) => {
    setInitialInvestment(e.target.value);
  };

  const handleAnnualInvestmentChange = (e) => {
    setAnnualInvestment(e.target.value);
  };

  const handleExpectedReturnChange = (e) => {
    setExpectedReturn(e.target.value);
  };

  const handleDurationChange = (e) => {
    setDuration(e.target.value);
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
            required
          />
        </p>
      </div>
    </section>
  );
};

export default InvestmentInput;
