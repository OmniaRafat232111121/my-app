import React,{useState} from 'react'
import {counter}
const Counter = () => {
const [counter,setCounter]=useState(0)
  return (
    <counterContext.Consumer>
    {({counter,increaseCounter,decreaseCouter})=>{
        return(
            <div>
            <h3>COunter value is {counter}</h3>
            <button onClick={increaseCounter}>Increase</button>
            <button onClick={decreaseCounter}>Decrease</button>
            </div>
        )
    }}
    </counterContext.Consumer>
  )
}

export default Counter
