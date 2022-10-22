import React from 'react'
import { Counter } from './Counter'

const ComB = () => {
  return (
    <CounterContext.Consumer>
    {({count})}
    </CounterContext.Consumer>
  )
}

export default ComB
