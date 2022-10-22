import React,{useState} from 'react'
import Button from './Button'
const ParentComponent = () => {
    const [count,setCount]=useState(0)
    function increment(){
        setCount(c => c+ 1);
      }
      const incremetCallback=useCallback(V
     
    return (
    <div>
    <h1>Count:{count}</h1>
      <Button onClick={increment}>
      INCREMENT
      </Button>
    </div>
  )
}

export default ParentComponent
