import React,{useState} from 'react'
const Counter = () => {
const [counter,setCounter]=useState(0)
  return (
    <counterContext.Consumer>
    {({counter,increaseCounter,decreaseCouter})=>{
        return(
            <div>
            </div>
        )
    }}
    </counterContext.Consumer>
  )
}

export default Counter
