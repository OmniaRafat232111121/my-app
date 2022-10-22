import React,{useReducer} from 'react'
const INCREMENT='INCREMENT';
const DECREMENT="DECREMENT";
function reducer(state,action){
    switch(action.type){
        case INCREMENT:
            return{
                count:state.count +action.payload
            }
        case DECREMENT:
            return{
                count:state.count-1
            }
            default:
                return state;
    }
}
const UseReducer = () => {
    const [state,dispatch]=useReducer(reducer,{count:0})
  return (
    <>
    
    <button
    label="increment"
    onClick={() => dispatch({ type: INCREMENT, payload: 3 })}></button>
  <h1>{state.count}</h1>
  <button label="decrement" onClick={() => dispatch({ type: DECREMENT })} >
  </button>
  <
  )
}

export default UseReducer
