// import React,{useState,useEffect,useRef} from 'react'

// const Reference = () => {
//     const [user,setUser]=useState('');
//     const count=useRef(0)
//    const refInput=useRef();
//    useEffect(()=>{
//     count.current=count.current+1
//    })
//   return (
//     <div>
//     <h2>Hooks:-[UseRef]</h2>
//       <input 
//       ref={refInput}
//        type="text" 
//        onChange={(e)=>setUser(e.target.value)}/>
//     {user}
//     <br/>
//     {count.current}
//       </div>
//   )
// }

// export default Reference
import React,{useState,useEffect,useRef} from 'react'
const Reference = () => {
const [inputValue,setInputValue]=useState("")
  return (
    <>
    <input 
    type="text"
    value={}
    />
      
    </>
  )
}

export default Reference