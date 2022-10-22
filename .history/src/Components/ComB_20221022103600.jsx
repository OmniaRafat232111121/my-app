import React from 'react'
import { Counter } from './Counter'
import { counterContext } from '../context/CounterContext'
const ComB = () => {
  return (
    <counterCntext.Consumer>
    {({ counter }) => (
      <nameContext.Consumer>
        {(name) => {
          return (
            <div>
              <h2>
                Component B: {counter} - {name}
              </h2>
            </div>
          );
        }}
      </nameContext.Consumer>
    )}
  </counterCntext.Consumer>
  );
}

export default ComB
