import React from 'react'
import { Counter } from './Counter'
import { counterContext } from '../context/CounterContext'
const ComB = () => {
  return (
    <counterContext.Consumer>
    {({counter})=>{
        return(
            <div>
            <h2>COmponent B:-{</h2>
            </div>
        )
    }}
    </counterContext.Consumer>
  )
}

export default ComB
