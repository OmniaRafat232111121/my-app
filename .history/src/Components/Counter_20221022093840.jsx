import React,{useState} from 'react'
const Counter = () => {
const [counter,setCounter]=useState(0)
  return (
    <counterContext.Consumer>
    {({counter,in})}
    </counterContext.Consumer>
  )
}

export default Counter
