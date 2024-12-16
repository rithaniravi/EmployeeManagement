import React from 'react'
import { useState } from 'react'
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom'
import {createData} from '../features/data/dataSlice' 


function Createemployee() {
    const [name,setName]=useState("")
    const [email,setEmail]=useState("")
    const [mobileno,setMobileno]=useState("")
    const [designation,setDesignation]=useState("")
    const [course,setCourse]=useState("")
    const [gender,setGender]=useState("")
    // const [file,setFile]=useState("")
    const navigate=useNavigate()

    const dispatch=useDispatch()

  
//   const handleChange=(e)=>{
//     e.preventDefault()
//     setText(e.target.value)
//   }

  const handleSubmit=(e)=>{
    e.preventDefault()
    // const formData=new FormData()
    // formData.append('file',file)
    dispatch(createData({name,email,mobileno,designation,gender,course}))
    
    setName('')
    setMobileno('')
    setCourse('')
    setDesignation('')
    setGender('')
    setEmail('')
    // setFile('')
    navigate('/')
   }
  return (
    <div className='col-sm-6 col-md-6 col-lg-9 container border justify-content-center shadow-sm rounded'>
         
        <form className='col-sm-6 col-md-12 col-lg-12 w-50 mx-auto p-2' onSubmit={handleSubmit}>
        
        <div className='ms-5 w-100'>
        <h4 className='m-2 d-flex justify-content-center'>Create an Employee</h4>
        <label htmlFor="name" className='m-2'>Name</label>
        <input 
        type='name' 
        name='name'
        id="name"
        value={name}
        onChange={(e)=>setName(e.target.value)}
        className='m-1 ms-5 p-1 w-50'
        placeholder='Enter your name'/><br/>
        <label htmlFor="email" className='m-2 ms-2'>Email</label> 
        <input 
        type='email' 
        name='email'
        id="email"
        value={email}
        onChange={(e)=>setEmail(e.target.value)}
        className='m-1 p-1 ms-5 w-50'
        placeholder='Enter your email'/><br/>
        <label htmlFor="mobileno" className='m-2'>Mobile No</label>
        <input 
        type='mobileno' 
        name='mobileno'
        id="mobileno"
        value={mobileno}
        onChange={(e)=>setMobileno(e.target.value)}
        className='m-1 p-1 ms-3 w-50'
        placeholder='Enter your mobileno'/><br/>
        <label htmlFor="Designation" className='m-2'>Designation</label>
        <select id="designation" 
        name="designation"  
        value={designation} 
        onChange={(e)=>setDesignation(e.target.value)} 
        className='ms-2'>
            <option value="">select Designation</option>
            <option value="HR">HR</option>
            <option value="Manager">Manager</option>
            <option value="Sales">Sales</option>
        </select><br/>
        <label htmlFor='gender' value={gender} 
        onChange={(e)=>setGender(e.target.value)}
        className='m-2'>Gender</label>
        
        <label for='Male' className='m-3'>
          <input 
          type='radio' 
          id='gender' 
          value="Male"
          onChange={(e)=>setGender(e.target.value)}
          checked={gender==="Male"}
          name='gender' 
          className='ms-4'/>Male</label>
        
        <label for='Female' className='m-1'>
          <input 
          type='radio' 
          id='gender' 
          onChange={(e)=>setGender(e.target.value)}
          checked={gender==="Female"} 
          value="Female" 
          name='gender' 
          className='ms-2'/>Female</label><br/>

        <label htmlFor="course" className='m-2'>Course</label>
        
        <label for="course1">
          <input type="checkbox" 
          id="course1" 
          name="course" 
          onChange={(e)=>setCourse(e.target.value)} 
          value="MCA" 
          className='ms-5'/>
          MCA</label>
        
        <label for="course2">
          <input type="checkbox" 
          id="course2" name="course" 
          onChange={(e)=>setCourse(e.target.value)} 
          value="BCA" 
          className='ms-5'/>
          BCA</label>
        
        <label for="course3">
          <input type="checkbox" id="course3" name="course" onChange={(e)=>setCourse(e.target.value)} value="BSC" className='ms-5'/>
          BSC</label><br></br>
 
        {/* <label htmlFor="imageupload" className='m-1'>Image Upload</label>
        <input 
        type='file' 
        name='file'
        id="file"
        value={file}
        onChange={(e)=>setFile(e.target.files[0])}
        className='m-1 p-1 w-50'
        />  */}

        <button className='btn btn-success m-1 mt-1 p-2 w-50'>Register</button>
        </div>
        </form>
        
    </div>
    
  )
}

export default Createemployee