import React, { useState } from 'react'
import GoogleButton from 'react-google-button'

const Login = () => {
  const [email,setEmail] = useState();
  const [password,setPassword] = useState();
  const LoginHandler = () => {
    if(!email || !password){
      return ;
    }
    else{
      
    }
  }

  return (
    <div className='h-screen w-screen p-8 flex justify-center items-center'>
        <div className='h-3/4 w-96 bg-white shadow-2xl p-4 border rounded-md'>
          <h2 className='text-center text-2xl font-serif '>Login</h2>
          
          <div className='flex justify-center gap-4 m-4'>
            <GoogleButton
              type = 'dark'
            />
          </div>

          <div className='flex gap-3 flex-col'>
            <label>Email</label>
            <input className='border p-4' type="text" placeholder='Enter Username'
            onChange={(event) => {setEmail(event.target.value)}} />
          </div>

          <div className='flex gap-3 flex-col mt-8'>
            <label>Password</label>
            <input className='border p-4' type="text" placeholder='Enter Username'
            onChange={(event)=>{
              setPassword(event.target.value)}} />
          </div>

          <div className='flex justify-center'>
            <button className='border p-2 mt-4 bg-blue-500 text-white rounded-md'
            onClick={LoginHandler}>Login</button>
          </div>
        </div>
    </div>
  )
}

export default Login
