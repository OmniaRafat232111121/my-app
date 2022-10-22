import React,{useState} from 'react'

const UseState = () => {
const [inputValue,setInput]=useState("Pedo")
  return (
    <div>
    <input placeholder="enter something" onChange={onChang}/>
      
    </div>
  )
}

export default UseState
