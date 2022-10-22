import React from 'react'
import { Counter } from './Counter'

const ComB = () => {
  return (
    <CounterContext.Consumer>
    {({cou})}
    </CounterContext.Consumer>
  )
}

export default ComB
