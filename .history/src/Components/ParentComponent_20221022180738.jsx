import React,{useState} from 'react'
import Button from './Button'
const ParentComponent = () => {
    const [count,setCount]=useState(0)
 const increment=()=>{
    setCounter((counter)=>{
        counter+1
    })
 }
    return (
    <div>
    <h1>Count:{count}</h1>
      <Button onClick={()=>setCount(count+1)}>
      INCREMENT
      </Button>
    </div>
  )
}

export default ParentComponent
