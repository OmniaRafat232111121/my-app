import React from "react";
import {co} from "../context/CounterContext"
export const Counter = () => {
  return (
    <co.Consumer>
      {({ counter, increaseCounter, decreaseCounter }) => {
        return (
          <div>
            <h3>Counter value is {counter}</h3>
            <button onClick={increaseCounter}>Increase</button>
            <button onClick={decreaseCounter}>Decrease</button>
          </div>
        );
      }}
    </co.Consumer>
  );
};