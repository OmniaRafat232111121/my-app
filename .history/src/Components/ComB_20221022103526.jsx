import React from 'react'
import { Counter } from './Counter'
import { counterContext } from '../context/CounterContext'
const ComB = () => {
  return (
    <CounterCxt.Consumer>
    {({ counter }) => (
      <NameCxt.Consumer>
        {(name) => {
          return (
            <div>
              <h2>
                Component B: {counter} - {name}
              </h2>
            </div>
          );
        }}
      </NameCxt.Consumer>
    )}
  </CounterCxt.Consumer>
  );
}

export default ComB
