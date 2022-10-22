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
    <h1>{state.count}</h1>
      <button  label="increment" onCLick={()=>dispatch({type:INCREMENT,payload:3})}/>
      <button  label="decrement" onCLick={()=>dispatch({type:DECREMENT})}/>

   
      </>
  )
}

export default UseReducer
