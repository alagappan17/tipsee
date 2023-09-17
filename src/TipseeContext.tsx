import React, { createContext, useState, ReactNode } from "react";

type TipseeContextType = {
  billAmount: number;
  setBillAmount: React.Dispatch<React.SetStateAction<number>>;
  tipPercentage: number;
  setTipPercentage: React.Dispatch<React.SetStateAction<number>>;
  peopleCount: number;
  setPeopleCount: React.Dispatch<React.SetStateAction<number>>;
};

const TipseeContext = createContext<TipseeContextType | undefined>(undefined);

type TipseeProviderProps = {
  children: ReactNode;
};

const ContextProvider: React.FC<TipseeProviderProps> = ({ children }) => {
  const [billAmount, setBillAmount] = useState(0);
  const [tipPercentage, setTipPercentage] = useState(0);
  const [peopleCount, setPeopleCount] = useState(1);

  const contextValue: TipseeContextType = {
    billAmount,
    setBillAmount,
    tipPercentage,
    setTipPercentage,
    peopleCount,
    setPeopleCount,
  };

  console.log(contextValue);

  return (
    <TipseeContext.Provider value={contextValue}>
      {children}
    </TipseeContext.Provider>
  );
};

export { TipseeContext, ContextProvider };
