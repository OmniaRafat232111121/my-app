
import React from 'react'
const randomColour = () => '#'+(Math.random()*0xFFFFFF<<0).toString(16);
function Button(props){
    return(
        <div>
        <button style={{back}}>
        {props.children}
        </button>
        </div>
    )
}