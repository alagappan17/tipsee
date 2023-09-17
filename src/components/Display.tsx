const Display = () => {
  return (
    <div className="display">
      <div className="tips-information">
        <div className="information-container">
          <div className="information-label">
            <p>Tip Amount</p>
            <span style={{ whiteSpace: "nowrap" }}>/ person</span>
          </div>
          <div className="information-price">
            <p>$</p>
            <p id="tip-amount-display">0.00</p>
          </div>
        </div>
        <div className="information-container">
          <div className="information-label">
            <p>Total</p>
            <span style={{ whiteSpace: "nowrap" }}>/ person</span>
          </div>
          <div className="information-price">
            <p>$</p>
            <p id="total-amount-display">0.00</p>
          </div>
        </div>
      </div>
      <div className="information-reset-container">
        <button type="reset" className="button-disabled" id="reset-button">
          Reset
        </button>
      </div>
    </div>
  );
};

export default Display;
