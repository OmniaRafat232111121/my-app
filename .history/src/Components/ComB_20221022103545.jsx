import React from 'react'
import { Counter } from './Counter'
import { counterContext } from '../context/CounterContext'
const ComB = () => {
  return (
    <counterCxt.Consumer>
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
  </counterCxt.Consumer>
  );
}

export default ComB
