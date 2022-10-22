import React from 'react'
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
    const [state,dispatch]=useReducer(reducer)
  return (
    <div>
      
    </div>
  )
}

export default UseReducer
