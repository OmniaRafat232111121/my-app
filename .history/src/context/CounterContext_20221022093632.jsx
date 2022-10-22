import React, { createContext ,useState} from "react";

const counterContext=createContext(0);
const CounterContextProvider=()=>{
    const [counter,setCounter]=useState(0)
    const increaseCounter=()=>setCounter(couter+1);
    const decreaseCounter=()=>setCounter(counter-1);
const value={counter,increaseCounter,de}
    return(
    <counterContext.Provider value={value}>
    </counterContext.Provider>
)
}

export default CounterContextProvider;