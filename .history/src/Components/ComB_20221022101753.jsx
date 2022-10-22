import React from 'react'
import { Counter } from './Counter'
import { counterContext } from '../context/CounterContext'
const ComB = () => {
  return (
    <CounterContext.Consumer>
    {({(counter)=>{
        return(
    <h2>Component B:-{counter}</h2>
        );
    }})}
    </CounterContext.Consumer>
  )
}

export default ComB
