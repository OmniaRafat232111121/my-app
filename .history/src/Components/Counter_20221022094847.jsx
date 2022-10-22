import React,{useState} from 'react'
import {counterContext} from "../context/CounterContext"
const Counter = () => {
const [counter,setCounter]=useState(0)
  return (
    <counterContext.Consumer>
    {({counter,increaseCounter,decreaseCouter})=>{
        return(
            <div>
            <h3>COunter value is {counter}</h3>
            <button onClick={increaseCounter}>Increase</button>
            <button onClick={decreaseCouter}>Decrease</button>
            </div>
        )
    }}
    </counterContext.Consumer>
    <counter
  )
}

export default Counter
