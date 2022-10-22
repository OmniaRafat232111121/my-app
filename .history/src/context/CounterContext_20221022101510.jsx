import React, { createContext, useState } from "react";

export const counter = createContext(0);
const CounterContextProvider = (props) => {
  const [counter, setCounter] = useState(0);

  const increaseCounter = () => setCounter(counter + 1);
  const decreaseCounter = () => setCounter(counter - 1);

  const value = { counter, increaseCounter, decreaseCounter };

  return (
    <counter.Provider value={value}>
    {props.children}
    </counter.Provider>
  );
};

export default CounterContextProvider;