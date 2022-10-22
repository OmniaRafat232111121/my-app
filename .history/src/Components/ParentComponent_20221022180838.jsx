import React,{useState} from 'react'
import Button from './Button'
const ParentComponent = () => {
    const [count,setCount]=useState(0)
    return (
    <div>
    <h1>Count:{count}</h1>
      <Button onClick={}>
      INCREMENT
      </Button>
    </div>
  )
}

export default ParentComponent
