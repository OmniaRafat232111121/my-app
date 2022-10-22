import React,{useState,useEffect,useRef} from 'react'

const Reference = () => {
    const [user,setUser]=useState('');
    const[counr,setcount]=usestate(0)
   const refInput=useRef();
   useEffect(()=>{
    setRender(render+1)
   },[render])
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
