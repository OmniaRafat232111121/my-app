import React,{useState,useEffect,useRef} from 'react'

const Reference = () => {
    const [user,setUser]=useState('');
    const[render,setRender]=
   const refInput=useRef();
   useEffect(()=>{
    console.log("Helo")
    refInput.current.focus()
   })
  return (
    <div>
    <h2>Hooks:-[UseRef]</h2>
      <input ref={refInput} type="text" onChange={(e)=>setUser(e.target.value)}/>
    {user}
      </div>
  )
}

export default Reference
