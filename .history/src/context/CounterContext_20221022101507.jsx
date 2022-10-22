import React, { createContext, useState } from "react";

export const  = createContext(0);
const CounterContextProvider = (props) => {
  const [counter, setCounter] = useState(0);

  const increaseCounter = () => setCounter(counter + 1);
  const decreaseCounter = () => setCounter(counter - 1);

  const value = { counter, increaseCounter, decreaseCounter };

  return (
    <.Provider value={value}>
    {props.children}
    </.Provider>
  );
};

export default CounterContextProvider;