import React,{useState} from 'react'
import Button from './Button'
const ParentComponent = () => {
    const [count,setCount]=useState(0)
  return (
    <div>
      <Button onClick={increment}>
      INCREMENT
      </Button>
    </div>
  )
}

export default ParentComponent
