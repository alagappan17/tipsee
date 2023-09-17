import { useContext } from "react";
import { TipseeContext } from "../TipseeContext";

const Form = () => {
  const { setBillAmount, setPeopleCount, setTipPercentage, tipPercentage } =
    useContext(TipseeContext)!;

  const handleBillAmountChange = (
    event: React.ChangeEvent<HTMLInputElement>,
  ) => {
    const value = event.target.value !== "" ? parseInt(event.target.value) : 0;
    setBillAmount(value);
  };

  const handlePeopleCountChange = (
    event: React.ChangeEvent<HTMLInputElement>,
  ) => {
    const value = event.target.value !== "" ? parseInt(event.target.value) : 1;
    setPeopleCount(value);
  };

  const handTipPercentageChange = (
    event: React.ChangeEvent<HTMLInputElement>,
  ) => {
    const value = event.target.value !== "" ? parseInt(event.target.value) : 0;
    setTipPercentage(value);
  };

  return (
    <div className="form">
      <div>
        <span className="label-input">Bill</span>
        <div className="left-inner-icon">
          <img className="icon" src="./src/images/icon-dollar.svg" />
          <input
            type="number"
            id="bill-amount"
            name="bill"
            min="0"
            placeholder="0"
            // value={billAmount}
            onChange={handleBillAmountChange}
          />
        </div>
      </div>
      <div className="tips">
        <span className="label-input">Select Tip %</span>
        <div className="tip-percentage">
          <label
            className={`tip-option ${tipPercentage === 5 ? "active-tip" : ""}`}
          >
            <input
              type="radio"
              name="tipPercentage"
              id="tip-5"
              value="5"
              className="tip-radio"
              onChange={handTipPercentageChange}
            />
            5%
          </label>
          <label
            className={`tip-option ${tipPercentage === 10 ? "active-tip" : ""}`}
          >
            <input
              type="radio"
              name="tipPercentage"
              id="tip-10"
              value="10"
              className="tip-radio"
              onChange={handTipPercentageChange}
            />
            10%
          </label>
          <label
            className={`tip-option ${tipPercentage === 15 ? "active-tip" : ""}`}
          >
            <input
              type="radio"
              name="tipPercentage"
              id="tip-15"
              value="15"
              className="tip-radio"
              onChange={handTipPercentageChange}
            />
            15%
          </label>
          <label
            className={`tip-option ${tipPercentage === 25 ? "active-tip" : ""}`}
          >
            <input
              type="radio"
              name="tipPercentage"
              id="tip-25"
              value="25"
              className="tip-radio"
              onChange={handTipPercentageChange}
            />
            25%
          </label>
          <label
            className={`tip-option ${tipPercentage === 50 ? "active-tip" : ""}`}
          >
            <input
              type="radio"
              name="tipPercentage"
              id="tip-50"
              value="50"
              className="tip-radio"
              onChange={handTipPercentageChange}
            />
            50%
          </label>
          <label>
            <input
              id="custom-tip"
              type="number"
              className="custom-tip"
              placeholder="Custom"
              min="0"
              onChange={handTipPercentageChange}
            />
          </label>
        </div>
      </div>
      <div>
        <span className="label-input">Number of People</span>
        <div className="left-inner-icon">
          <img className="icon" src="./src/images/icon-person.svg" />
          <input
            type="number"
            id="people-count"
            name="people"
            min="1"
            placeholder="1"
            // value={peopleCount}
            onChange={handlePeopleCountChange}
          />
        </div>
      </div>
    </div>
  );
};

export default Form;
