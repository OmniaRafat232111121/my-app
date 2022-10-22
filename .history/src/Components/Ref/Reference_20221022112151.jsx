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
 const previousInput=useRef();
 useEffect(()=>{
    previousInput.current=inputValue
 },[inputValue])
return (
    <>
    <input 
    type="text"
    value={inputValue}
    onChange={(e)=>setInputValue(e.target.value)}
    />
      
    </>
  )
}

export default Reference
