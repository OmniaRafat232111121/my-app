import React from 'react'
import { Counter } from './Counter'
import { counterContext } from '../context/CounterContext'
const ComB = () => {
  return (
    <counterContext.Consumer>
    {({counter})=>(
        <name
    )
       
    }}
    </counterContext.Consumer>
  )
}

export default ComB
