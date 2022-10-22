import React,{useState,useEffect} from 'react'

const Reference = () => {
    const [user,setUser]=useState('');
  return (
    <div>
      <input type="text" onChange={(e)=>setUser()}/>
    </div>
  )
}

export default Reference
