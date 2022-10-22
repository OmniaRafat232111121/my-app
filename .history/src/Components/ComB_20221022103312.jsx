import React from 'react'
import { Counter } from './Counter'
import { counterContext } from '../context/CounterContext'
const ComB = () => {
  return (
    <counterContext.Consumer>
    {({counter})=>(
        <nameContext
    )
       
    }}
    </counterContext.Consumer>
  )
}

export default ComB
