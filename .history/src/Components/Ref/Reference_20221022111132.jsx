import React,{useState,useEffect,useRef} from 'react'

const Reference = () => {
    const [user,setUser]=useState('');
    const count=useRef(0)
   const refInput=useRef();
   useEffect(()=>{
    count.current
   })
  return (
    <div>
    <h2>Hooks:-[UseRef]</h2>
      <input ref={refInput} type="text" onChange={(e)=>setUser(e.target.value)}/>
    {user}
    {render}
      </div>
  )
}

export default Reference
