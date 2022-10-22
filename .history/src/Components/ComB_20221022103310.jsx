import React from 'react'
import { Counter } from './Counter'
import { counterContext } from '../context/CounterContext'
import { NameContextProvider } from '../context/NameContext'
const ComB = () => {
  return (
    <counterContext.Consumer>
    {({counter})=>(
        <NameContextProvider.
    )
       
    }}
    </counterContext.Consumer>
  )
}

export default ComB
