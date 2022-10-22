import React from 'react'
import { Counter } from './Counter'

const ComB = () => {
  return (
    <CounterContext.Consumer>
    {({counter}=)}
    </CounterContext.Consumer>
  )
}

export default ComB
