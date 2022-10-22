import React, { createContext } from "react";

const counterContext=createContext(0);
const CounterContextProvider=()=>{
    const [counter,setCounter]=use
    const increaseCounter=()=>setCounter(couter+1);
    const decreaseCounter=()=>setCounter(counter-1);
}

export default CounterContextProvider;