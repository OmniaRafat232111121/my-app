import React from 'react'
import { Counter } from './Counter'

const ComB = () => {
  return (
    <CounterContext.Consumer>
    {({(counter)=>{
        return(
    <h2>Component B:-{</h2>
        );
    }})}
    </CounterContext.Consumer>
  )
}

export default ComB
