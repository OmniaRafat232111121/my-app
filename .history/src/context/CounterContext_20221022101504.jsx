import React, { createContext, useState } from "react";

export const C = createContext(0);
const CounterContextProvider = (props) => {
  const [counter, setCounter] = useState(0);

  const increaseCounter = () => setCounter(counter + 1);
  const decreaseCounter = () => setCounter(counter - 1);

  const value = { counter, increaseCounter, decreaseCounter };

  return (
    <C.Provider value={value}>
    {props.children}
    </C.Provider>
  );
};

export default CounterContextProvider;