import React,{createContext} from 'React'
export const counterContext=createContext(0);
const CounterContextProvider = () => {
    const [counter,setCouter]=useState(0);
    const increaseCounter=()=>setCounter(counter+1)
    const increaseCounter=()=>setCounter(counter-1)
  return (
    <div>
      
    </div>
  )
}

export default CounterContextProvider;
