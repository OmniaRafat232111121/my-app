import React,{useState} from 'react'
const Counter = () => {
const [counter,setCounter]=useState(0)
  return (
    <div>
    <h3>Counter value is {counter}</h3>
    <button onClick={}>Increase</button>
    <button onClick={}>Decrease</button>
      
    </div>
  )
}

export default Counter