import React from 'react'
import { Counter } from './Counter'

const ComB = () => {
  return (
    <CounterContext.Consumer>
    {({(coun)})}
    </CounterContext.Consumer>
  )
}

export default ComB
