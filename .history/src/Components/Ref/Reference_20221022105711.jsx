import React,{useState,useEffect,useRef} from 'react'

const Reference = () => {
    const [user,setUser]=useState('');
   const refInput=useRef();
   useEffect(()=>{
    
   })
  return (
    <div>
    <h2>Hooks:-[UseRef]</h2>
      <input ref={refInput} type="text" onChange={(e)=>setUser(e.target.value)}/>
    </div>
  )
}

export default Reference
