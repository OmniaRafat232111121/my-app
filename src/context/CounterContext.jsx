import React, { createContext, useState } from "react";

export const counterContext = createContext(0);
counterContext.displayName="Counter"
const CounterContextProvider = (props) => {
  const [counter, setCounter] = useState(0);

  const increaseCounter = () => setCounter(counter + 1);
  const decreaseCounter = () => setCounter(counter - 1);

  const value = { counter, increaseCounter, decreaseCounter };

  return (
    <counterContext.Provider value={value}>
    {props.children}
    </counterContext.Provider>
  );
};

export default CounterContextProvider;