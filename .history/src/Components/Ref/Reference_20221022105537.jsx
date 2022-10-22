import React,{useState,useEffect} from 'react'

const Reference = () => {
    const [user,setUser]=useState('');
  return (
    <div>
      <input type="text" onChange={(e)=>setUser(e.target.va)}/>
    </div>
  )
}

export default Reference
