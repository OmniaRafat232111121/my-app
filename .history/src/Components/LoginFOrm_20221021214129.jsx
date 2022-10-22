import React from 'react'

const LoginFOrm = () => {
    const [email,setEmail]=useState('');
    const [password,setPassword]=useState('');
  useEffect(() => {
    console.log('function component didmount')
    return () => {
     console.log('')
    };
  }, [])
    return (
    <div>
      <h2>Function Example Effect </h2>
      <input value={email} onChange={hanldeEmail} placeholder='email' />

        <input value={password} onChange={hanldePassword} placeholder='password' />
    </div>
  )
}

export default LoginFOrm
