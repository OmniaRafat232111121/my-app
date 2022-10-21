import React, {useState} from 'react'

function HooksCounter() {

         const [count,SetCount]=useState (0)
    
    return (
        <div>
            <button onClick={()=>SetCount(count+1)}>count{count}</button>
        </div>
    )
}

export default HooksCounter
