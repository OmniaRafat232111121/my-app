import React,{useState} from 'react'

const UseState = () => {
const [inputValue,setInput]=useState("P")
  let onChange=(e)=>{
    const newValue=e.targrt.value;
    setInput(newValue);
  }
return (
    <div>
    <input placeholder="enter something" onClick={onChange}/>
      {inputValue}
    </div>
  )
}

export default UseState
