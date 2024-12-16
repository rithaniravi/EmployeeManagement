import React from 'react'
import { useState,useEffect } from 'react';
import { useSelector,useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { reset,login } from '../features/auth/authslice';
import Spinner from '../components/Spinner';
import { toast } from 'react-toastify';


function Login() {
  
  const[formData,setFormData]=useState({
    
    email:'',
    password:'',

  })

  const {email,password}=formData

  const handleChange=(e)=>{
    setFormData((prevstate)=>({
      ...prevstate,
      [e.target.name]:e.target.value,}))
  }
  
  const navigate=useNavigate();
  const dispatch=useDispatch();
  const {user,isError,isLoading,message,isSuccess}=useSelector((state)=>state.auth)

  useEffect(()=>{
    if(isError){
      toast.error(message)
    }

    if(isSuccess && user){
      navigate('/')
      }
    dispatch(reset())
  },[user,isError,message,isSuccess,dispatch,navigate])

  const handleSubmit=(e)=>{
     e.preventDefault();
     const userData={
      email,
      password,
    };
    dispatch(login(userData))
  }
  if(isLoading){
    <Spinner/>;
  }
  return (
    
    <div className='d-flex container border align-item-center justify-content-center rounded'>
        
        <form className='w-50 ms-6 p-2' onSubmit={handleSubmit}>
        <h4 className='ms-6 m-2'>Login</h4>
            
    
        <label htmlFor="email" className='m-1'>Email</label><br/>
        <input 
        type='email' 
        id="email"
        name='email'
        value={email}
        onChange={handleChange}
        className='m-1 p-1 w-50'
        placeholder='Enter your email'/><br/>
        <label htmlFor="password" className='m-1'>Password</label><br/>
        <input 
        type='password' 
        name='password'
        id="password"
        value={password} 
        className='m-1 p-1 w-50'
        onChange={handleChange}
        placeholder='Enter your password'/><br/>
        <button className='btn btn-success m-1 w-50'>Login</button>
        </form>
    </div>
  )
  
}

export default Login