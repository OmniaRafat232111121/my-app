import React,{useState,useEffect} from 'react'

const Reference = () => {
    const [user,setUser]=useState('');

  return (
    <div>
    <h2>Hooks:-[UseRef]</h2>
      <input ref={refInpu} type="text" onChange={(e)=>setUser(e.target.value)}/>
    </div>
  )
}

export default Reference