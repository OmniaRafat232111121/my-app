import React from 'react'
import { Counter } from './Counter'
import { counterContext } from '../context/CounterContext'
const ComB = () => {
  return (
    <counterContext.Consumer>
    {({counte{
        return(
    <h2>Component B:-{counter}</h2>
        );
    }})}
    </counterContext.Consumer>
  )
}

export default ComB
