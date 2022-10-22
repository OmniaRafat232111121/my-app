import React from 'react'

const LoginFOrm = () => {
    const [email,setEmail]=useState('');
    const [password,setPassword]=useState('');
  return (
    <div>
      <h2>Function Example Effect </h2>
      <input placeholder='email'/>
      <input placeholder='pass'/>
    </div>
  )
}

export default LoginFOrm
