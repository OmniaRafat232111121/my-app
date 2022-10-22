import React,{useState,useEffect} from 'react'

const Reference = () => {
    const [user,setUser]=useState('');
  return (
    <div>
    <h2>Hooks:-[Use</h2>
      <input type="text" onChange={(e)=>setUser(e.target.value)}/>
    </div>
  )
}

export default Reference
