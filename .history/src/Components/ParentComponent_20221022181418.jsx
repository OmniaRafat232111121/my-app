import React,{useState,useCallback} from 'react'
import Button from './Button'
const ParentComponent = () => {
    const [count , setCount] = useState(0);

    function increment(){
      setCount(s => s + 1);
    }
  
    const incrementCallback = useCallback(increment, []);
  
    return (
      <div>
        count: {count}
        <Button onClick={incrementCallback}>
          Increment
        </Button>
      </div>
    )
  
}

export default ParentComponent
