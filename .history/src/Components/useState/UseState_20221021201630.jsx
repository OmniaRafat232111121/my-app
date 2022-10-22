import React,{useState} from 'react'

const UseState = () => {
const [inputValue,setInput]=useState("Pedo")
  return (
    <div>
    <input placeholder="enter something" onChange={o}/>
      
    </div>
  )
}

export default UseState
