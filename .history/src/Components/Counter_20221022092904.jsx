import React,{useState} from 'react'
const Counter = () => {
const [counter,setCounter]=useState(0)
  return (
    <div>
    <h3>Counter value is {counter}</h3>
    <button>Increas</button>
      
    </div>
  )
}

export default Counter