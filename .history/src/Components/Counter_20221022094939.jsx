import React,{useState} from 'react'
import {counterContext} from "../context/CounterContext"
const Counter = () => {
const [counter,setCounter]=useState(0)
  return (
  
<counterContext.Consumer>
</counterContext.Consumer>


  )
}

export default Counter
