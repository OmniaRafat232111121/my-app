import React,{useState} from 'react'

const Person2 = ({money,handleIncrease}) => {
    return (
    <div>
      <h2>Omnia is offered is ${money}</h2>
    <button onClick={handleIncrease}>IncreaseMoney</button>
      </div>
  )
}

export default 
