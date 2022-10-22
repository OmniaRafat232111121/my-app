import React,{createContext} from 'React'
export const counterContext=createContext(0);
const CounterContextProvider = ({props}) => {
    const [counter,setCouter]=useState(0);
    const increaseCounter=()=>setCounter(counter+1)
    const decreaseCounter=()=>setCounter(counter-1)
    const value={counter,increaseCounter,decreaseCounter}
  return (
   <counterContext.Provider valu>
   {props.children}
   </counterContext.Provider>
  )
}

export default CounterContextProvider;
