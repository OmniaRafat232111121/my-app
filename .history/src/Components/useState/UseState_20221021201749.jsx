import React,{useState} from 'react'

const UseState = () => {
const [inputValue,setInput]=useState("Pedo")
  let onChange=(e)=>{
    const newValue=e.targrt.value;
    setInput(newValue);
  }
return (
    <div>
    <input placeholder="enter something" onChange={onChange}/>
      {in}
    </div>
  )
}

export default UseState
