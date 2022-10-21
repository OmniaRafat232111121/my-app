import React,{useState} from 'react'
import UpdatedComponent from '../HOC'

const Person2 = ({money,handleIncrease}) => {
    return (
    <div>
      <h2>Omnia is offered is ${money}</h2>
    <button onClick={handleIncrease}>IncreaseMoney</button>
      </div>
  )
}

export default UpdatedComponent(P)
