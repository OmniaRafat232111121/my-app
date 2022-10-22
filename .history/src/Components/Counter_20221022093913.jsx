import React,{useState} from 'react'
const Counter = () => {
const [counter,setCounter]=useState(0)
  return (
    <counterContext.Consumer>
    {({counter,increaseCounter,decreaseCouter})=>{
        return(
            <div>
            <h3>COunter va</h3>
            </div>
        )
    }}
    </counterContext.Consumer>
  )
}

export default Counter
