import React from 'react'
import { Counter } from './Counter'
import { counterContext } from '../context/CounterContext'
const ComB = () => {
  return (
    <counterContext.Consumer>
    {({counter})=>(
        <nameContext.Consumer>
        {({name})=>(

        )        </nameContext.Consumer>
    )
       
    }}
    </counterContext.Consumer>
  )
}

export default ComB
