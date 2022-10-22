import React from 'react'
import { Counter } from './Counter'
import { ameContext } from '../context/NameContext'
import { counterContext } from '../context/CounterContext'
const ComB = () => {
  return (
    <counterContext.Consumer>
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
  </counterContext.Consumer>
  );
}

export default ComB
