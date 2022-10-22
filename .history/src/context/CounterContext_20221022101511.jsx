import React, { createContext, useState } from "react";

export const counterCon = createContext(0);
const CounterContextProvider = (props) => {
  const [counter, setCounter] = useState(0);

  const increaseCounter = () => setCounter(counter + 1);
  const decreaseCounter = () => setCounter(counter - 1);

  const value = { counter, increaseCounter, decreaseCounter };

  return (
    <counterCon.Provider value={value}>
    {props.children}
    </counterCon.Provider>
  );
};

export default CounterContextProvider;