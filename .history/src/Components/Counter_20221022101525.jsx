import React from "react";
import {} from "../context/CounterContext"
export const Counter = () => {
  return (
    <.Consumer>
      {({ counter, increaseCounter, decreaseCounter }) => {
        return (
          <div>
            <h3>Counter value is {counter}</h3>
            <button onClick={increaseCounter}>Increase</button>
            <button onClick={decreaseCounter}>Decrease</button>
          </div>
        );
      }}
    </.Consumer>
  );
};