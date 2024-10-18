import React, { useContext, useState } from 'react'

import Usercontext from '../context/Usercontext'


function Login() {
    const [username , setUsername] = useState('')
    const [password ,setPassword ] = useState('')

    let {setUser} = useContext(Usercontext)


function handleLogin (e){
    e.preventDefault();
    setUser({username , password}); 
}
  return (
    <>
    <h1>Login</h1>
      <input
        type="text"
        placeholder="Username"
        value={username}
        onChange={(e) => setUsername(e.target.value)}
      />
      <input
        type="password"
        placeholder="Password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />
        <button onClick={handleLogin}>Login</button>    

    </>
  )
}

export default Login