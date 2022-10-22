import React,{createContext} from 'React'
export const CounterCxt=createContext(0);
const CounterContextProvider = ({props}) => {
    const [counter,setCounter]=useState(0);
    const increaseCounter=()=>setCounter(counter+1)
    const decreaseCounter=()=>setCounter(counter-1)
    const value={counter,increaseCounter,decreaseCounter}
  return (
   <CounterCxt.Provider value={value}>
   {props.children}
   </CounterCxt.Provider>
  )
}

export default CounterContextProvider;
