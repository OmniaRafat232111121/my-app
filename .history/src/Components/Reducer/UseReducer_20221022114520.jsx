import React from 'react'
const INCREMENT='INCREMENT';
const DECREMENT="DECREMENT";
const initialState=
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
    const [state,dispatch]=useReducer(reducer,initialState)
  return (
    <div>
      
    </div>
  )
}

export default UseReducer
