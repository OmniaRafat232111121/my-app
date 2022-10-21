import React,{useState} from 'react'

function HooksCounterFour() {
    const[items,setItems]=useState([]);
    const addItem=()=>{
        setItems([
            ...items,{
                id:items.length,
                value:Math.floor(Math.random()*10)
            }
        ])
    }
    
    return (
        <div>
            <button onClick={addItem}>Add Number</button>
            <ul>
                {
                    items.map(item=>(
                        <li key={item.key}>{item.value}</li>
                    ))
                }
            </ul>
        </div>
    )
}

export default HooksCounterFour
