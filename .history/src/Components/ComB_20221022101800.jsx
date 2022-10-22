import React from 'react'
import { Counter } from './Counter'
import { counterContext } from '../context/CounterContext'
const ComB = () => {
  return (
    <counterContext.Consumer>
    {({(counter)=>{
        return(
    <h2>Component B:-{counter}</h2>
        );
    }})}
    </ounterContext.Consumer>
  )
}

export default ComB
