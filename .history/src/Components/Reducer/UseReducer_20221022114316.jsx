import React from 'react'
const INCREMENT='INCREMENT';
const DECREMENT="DECREMENT";
function reducer(state,action){
    switch(action.type){
        case INCREMENT:
            return{
                count:state.count +action.p
            }
    }
}
const UseReducer = () => {
    
  return (
    <div>
      
    </div>
  )
}

export default UseReducer
