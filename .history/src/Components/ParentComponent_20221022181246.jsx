import React,{useState} from 'react'
import Button from './Button'
const ParentComponent = () => {
    const [count,setCount]=useState(0)
    function increment(){
        setCount(count => co+ 1);
      }
      const incremetCallback=useCallback(increment,[]);
     
    return (
    <div>
    <h1>Count:{count}</h1>
      <Button onClick={incremetCallback}>
      INCREMENT
      </Button>
    </div>
  )
}

export default ParentComponent