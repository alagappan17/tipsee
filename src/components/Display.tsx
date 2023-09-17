import { useContext, useEffect, useState } from "react";
import { TipseeContext } from "../TipseeContext";

const Display = () => {
  const {
    billAmount,
    peopleCount,
    tipPercentage,
    setBillAmount,
    setPeopleCount,
    setTipPercentage,
  } = useContext(TipseeContext)!;
  const tipAmount = (billAmount * (tipPercentage / 100)) / peopleCount;
  const totalAmount =
    (billAmount + billAmount * (tipPercentage / 100)) / peopleCount;
  const [resetButtonState, setResetButtonState] = useState(false);

  useEffect(() => {
    if (billAmount == 0 && peopleCount == 1 && tipPercentage == 0) {
      setResetButtonState(false);
    } else {
      setResetButtonState(true);
    }
  }, [billAmount, peopleCount, tipPercentage]);

  const reset = () => {
    setBillAmount(0);
    setPeopleCount(1);
    setTipPercentage(0);
    setResetButtonState(false);
  };

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
            <p id="tip-amount-display">{tipAmount.toFixed(2)}</p>
          </div>
        </div>
        <div className="information-container">
          <div className="information-label">
            <p>Total</p>
            <span style={{ whiteSpace: "nowrap" }}>/ person</span>
          </div>
          <div className="information-price">
            <p>$</p>
            <p id="total-amount-display">{totalAmount.toFixed(2)}</p>
          </div>
        </div>
      </div>
      <div className="information-reset-container">
        <button
          type="reset"
          className={resetButtonState ? "button-enabled" : "button-disabled"}
          id="reset-button"
          onClick={reset}
        >
          Reset
        </button>
      </div>
    </div>
  );
};

export default Display;
