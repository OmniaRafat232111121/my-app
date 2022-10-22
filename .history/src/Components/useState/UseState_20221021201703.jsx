import React,{useState} from 'react'

const UseState = () => {
const [inputValue,setInput]=useState("Pedo")
  let onChan
return (
    <div>
    <input placeholder="enter something" onChange={onChange}/>
      
    </div>
  )
}

export default UseState
