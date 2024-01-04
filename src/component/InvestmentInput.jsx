export default function InvestmentInput() {
  return (
    <section id="user-input">
      <div className="input-group">
        <p>
          <label htmlFor="">Initial Investement</label>
          <input type="number" required />
        </p>
        <p>
          <label htmlFor="">Annual Investement</label>
          <input type="number" required />
        </p>
      </div>
      <div className="input-group">
        <p>
          <label htmlFor="">Expected Return</label>
          <input type="number" required />
        </p>
        <p>
          <label htmlFor="">Duration(per Year
          )</label>
          <input type="number" required />
        </p>
      </div>
    </section>
  );
}
