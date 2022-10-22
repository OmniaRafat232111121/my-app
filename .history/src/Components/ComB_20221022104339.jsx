import React from 'react'
import { Counter } from './Counter'
import { NameContext } from '../context/NameContext'
import { counterContext } from '../context/CounterContext'
const ComB = () => {
    const name=useContext(NameContext)
    const {counter}= useContext(counterContext)
  return (
   {
    /*
     <counterContext.Consumer>
    {({ counter }) => (
      <NameContext.Consumer>
        {(name) => {
          return (
            <div>
              <h2>
                Component B: {counter} - {name}
              </h2>
            </div>
          );
        }}
      </NameContext.Consumer>
    )}
  </counterContext.Consumer>
    */
   }
  );
}

export default ComB
