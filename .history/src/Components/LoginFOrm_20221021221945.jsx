// import React,{useState,useEffect} from 'react'

// const LoginFOrm = () => {
//     const [email,setEmail]=useState('');
//     const [password,setPassword]=useState('');
//   useEffect(() => {
//     console.log('function component didmount')
//     return () => {
//      console.log('function will unamount')
//     };
//   }, [])
//   useEffect(() => {
//     if(email === '')
//         return;

//     console.log('function Component did update');
// });
// useEffect(() => {
//     if(email === '')
//         return;

//     console.log('function ComponentL:-email did update');
// },[email]);

// useEffect(() => {
// if(password===" ")
// return;
// console.log('function component Update') 
// });
// useEffect(()=>{
//     if(password===" ")
//     return;
    
//     console.log('function ComponentL:-Password did update');

// },[password])
// function hanldeEmail(e){
//     setEmail(e.target.value);
// };

// function hanldePassword(e){
//     setPassword(e.target.value);
// };
//     return (
//     <div>
//       <h2>Function Example Effect </h2>
//       <input value={email} onChange={hanldeEmail} placeholder='email' />

//         <input value={password} onChange={hanldePassword} placeholder='password' />
//     </div>
//   )
// }

// export default LoginFOrm



import React, { useEffect } from 'react'

const LoginFOrm = () => {
    const [data, setData] = useState({ hits: [] });
 useEffect(()=>{
    const fetchData=async()=>{
        const result=await axios(
            'https://hn.algolia.com/api/v1/search?query=redux',
        )
        setData()
    }
 })
    return (
    <div>
      
    </div>
  )
}

export default LoginFOrm
