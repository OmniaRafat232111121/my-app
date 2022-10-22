import React,{useState,useEffect} from 'react'

const Reference = () => {
    const [user,setUser]=useState('');

  return (
    <div>
    <h2>Hooks:-[UseRef]</h2>
      <input ref={ref} type="text" onChange={(e)=>setUser(e.target.value)}/>
    </div>
  )
}

export default Reference
