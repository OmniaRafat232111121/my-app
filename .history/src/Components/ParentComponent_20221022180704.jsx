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
      <Button onClick={}>
      INCREMENT
      </Button>
    </div>
  )
}

export default ParentComponent
