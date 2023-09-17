import { useContext } from "react";
import { TipseeContext } from "../TipseeContext";

const Header = () => {
  const { tipPercentage, billAmount, peopleCount } = useContext(TipseeContext)!;
  return (
    <div>
      <img src="./src/images/tipsee-black-logo.png" className="app-logo" />
      <p>{`${tipPercentage}, ${billAmount}, ${peopleCount}`}</p>
    </div>
  );
};

export default Header;
