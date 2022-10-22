import React, from 'react'
import { Counter } from './Counter'
import { NameContext } from '../context/NameContext'
import { counterContext } from '../context/CounterContext'
const ComB = () => {
    const name=useContext(NameContext)
    const {counter}= useContext(counterContext)
  return (
    <div>
    <h2>ComponentB:- {counter} {name} </h2>
    </div>
  
  );
}

export default ComB
