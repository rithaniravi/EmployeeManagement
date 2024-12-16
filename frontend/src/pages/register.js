import React from 'react'
import { useState, useEffect} from 'react';
import { useSelector,useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import {FaUser} from 'react-icons/fa';
import { reset,register } from '../features/auth/authslice';
import Spinner from '../components/Spinner';


function Register() {

  const[formData,setFormData]=useState({
    name:'',
    email:'',
    password:'',
    confirmpassword:'',
  })
  

  const {name,email,password,confirmpassword}=formData;

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

  const handleChange=(e)=>{
    setFormData((prevState)=>({
      ...prevState,
      [e.target.name]:e.target.value}));
  };

  const handleSubmit=(e)=>{
     e.preventDefault();
     if(password !== confirmpassword){
      toast.error("password is not matching")
     }else{
      const userData={
        name,
        email,
        password,
      };
      dispatch(register(userData))
     }
  }
  if(isLoading){
    <Spinner/>
  }
  

  return (
    <div className='col-sm-6 col-md-6 col-lg-9 d-flex container border justify-content-center shadow-sm rounded'>
        <form className='col-sm-6 col-md-12 col-lg-12 w-75 ms-5 p-2' onSubmit={handleSubmit}>
            <h4 className='m-2'>Create an account</h4>
        <label htmlFor="name" className='m-1'>Name</label><br></br>
        <input 
        type='text' 
        name='name'
        id="name"
        value={name}
        onChange={handleChange}
        className='m-1 p-1 w-50'
        placeholder='Enter your name'/><br/>
        <label htmlFor="email" className='m-1'>Email</label><br/>
        <input 
        type='email' 
        name='email'
        id="email"
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
        onChange={handleChange}
        className='m-1 p-1 w-50'
        placeholder='Enter your password'/><br/>
        <label htmlFor="password" className='m-1'>Confirm Password</label><br/>
        <input 
        type='password' 
        name='confirmpassword'
        value={confirmpassword}
        onChange={handleChange}
        id="confirmpassword"
        className='m-1 p-1 w-50'
        placeholder='Enter your password'/><br/>
        <button className='btn btn-success m-1 mt-1 p-2 w-50'>Register</button>
        </form>
        
    </div>
  )
}

export default Register;