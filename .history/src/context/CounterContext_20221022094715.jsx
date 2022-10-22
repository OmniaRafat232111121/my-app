import React,{createContext} from 'React'
export const counterContext=createContext(0);
const CounterContextProvider = () => {
    const [counter,setCouter]=useState(0);
    const increaseCounter=()=>setCounter(counter+1)
    const decreaseCounter=()=>setCounter(counter-1)
    const value={counter,inc}
  return (
    <div>
      
    </div>
  )
}

export default CounterContextProvider;
