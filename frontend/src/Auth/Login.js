import React, { useState } from 'react';
import GoogleButton from 'react-google-button';
import {useNavigate, Link} from 'react-router-dom';
import toast, {Toaster} from  'react-hot-toast';
import { useDispatch } from 'react-redux';
import { setToken } from '../Slices/authSlice';


const Login = () => {
  const router = useNavigate();
  const [email,setEmail] = useState("");
  const [password,setPassword] = useState("");
  const dispatch = useDispatch();

  const RegisterHandeler = () => {

    const parsedresp = (data) => {
      if(data.success){
        localStorage.setItem('token' ,JSON.stringify(data.token));
        toast.success(data.message);
        
        setTimeout(() => {
          router('/Upload');
        }, 2000);
      }  
      else{
        console.log("User not found");
        toast.error("User not Found");
        return;
      }   
    }
    const response = (resp) => {
        resp.json().then(parsedresp);
    }
    fetch("http://localhost:4000/api/v1/Login" ,{
        method: "POST",
        headers: {
            'Content-Type': 'application/json'
          },
          body: JSON.stringify({
            "email": email,
            "password": password,
          
          }) 
    }).then(response).catch((err)=>{
      console.log("Error occurred while posting the Login data ",err);
      return;
    })
    
}

  return (
    <div className='h-screen w-screen dark:bg-gray-900 p-8 flex justify-center items-center'>
      <Toaster/>
        <div className='h-min-96 w-96 bg-gray-800 text-white shadow-2xl p-4 border rounded-md'>
          <h2 className='text-center text-2xl font-serif '>Login</h2>
          
          <div className='flex justify-center gap-4 m-4'>
            <GoogleButton
              type = 'dark'
            />
          </div>

          <div className='flex gap-3 flex-col mt-8'>
            <label>Email</label>
            <input className='border p-4 text-gray-900 bg-gray-300' 
            type="text"
            placeholder='Enter Username' 
            onChange={(event)=>{setEmail(event.target.value)}}
             />
          </div>

          <div className='flex gap-3 flex-col mt-8'>
            <label>Password</label>
            <input className='border p-4 text-gray-900 bg-gray-300'
             type="text" 
             placeholder='Enter Username' 
             onChange={(event)=>{setPassword(event.target.value)}}
             />
          </div>

          <div className='flex justify-center'>
            <button className='border p-2 mt-4 bg-blue-500 text-white rounded-md' onClick={RegisterHandeler}>Login</button>
          </div>
          <div className='mt-8 text-center'>
            <span>Don't Have an Account? <Link to="/Signup" className='text-blue-600'>Create One</Link></span>
          </div>
        </div>

    </div>
  )
}

export default Login
