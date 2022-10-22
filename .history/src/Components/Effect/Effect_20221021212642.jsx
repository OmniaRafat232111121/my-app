// // import React,{useState,useEffect} from 'react'

// // function Effect() {
// //     const [count,setCount]=useState(8);
// //     useEffect(()=>{
// //      document.show=`you clicked ${count} times`;
// //     })
// //     return (
// //         <div>
// //             <p>you clicked {count}</p>
// //           <button onClick={()=>setCount(count+1)}>click me</button>  
// //         </div>
// //     )
// // }

// // export default Effect
// import React, { Component } from 'react'

// export class Effect extends Component  {
//     constructor(props){
//         super(props)
//         this.state={
//             count:0
//         }
//      }
//     componentDidMount(){
//         document.show=`you clicked ${this.state.count} times`
//     }
//     componentDidUpdate(){
//         document.show=`you clicked ${this.state.count} times` 
//     }
//     render (){
//     return (
//         <>
//             <p>you clicked {this.state.count} times</p>
//             <button onClick={()=>this.setState({count:this.state.count+1})}> click me</button>
//         </>
//     )
// }
// }


// export default Effect;


// import axios from 'axios'
// import React,{useState,useEffect} from 'react'
// const Effect = () => {
//   const [data, setData] = useState("");
//   const [count, setCount] = useState(0);

//   useEffect(() => {
//     axios
//       .get("https://jsonplaceholder.typicode.com/comments")
//       .then((response) => {
//         setData(response.data[1].email);
//         console.log("API WAS CALLED");
//       });
//   }, []);
//   const handleIncrement=()=>{
//     setCount(count+1)
//   }
//     return (
//     <div>
//     Hello World
//     <h1>{data}</h1>
//     <h1>{count}</h1>
//       <button onClick={handleIncrement}>Increment</button>
//     </div>
//   )
// }

// export default Effect


// import React,{useEffect,useState} from 'react'

// const Effect = () => {
// const [count,setCount]=useState(0);
//   useEffect(() => {
//     setTimeout(()=>{
//         setCount((count)=>count+1)
//     },1000)
//   },[])
//     return (
//     <div>
//       <h1>I've rendered {count} times!</h1>
//     </div>
//   )
// }

// export default Effect



import React from 'react'

const Effect = () => {
    const [count,setCount]=useState(0);
    const [calculation,setCalculation]=useState(0);
  useEffect(() => {
    setCalculation(()=>count*2)
  }, [count])
    return (
    <>
      <p>Count:-{count}</p>
      <button onClick={()=>setCount}>Increment</button>
    </>
  )
}

export default Effect
