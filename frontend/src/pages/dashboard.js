import React from 'react'
import { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import { useSelector,useDispatch } from 'react-redux'
import { Link } from 'react-router-dom'
import Spinner from '../components/Spinner'
import { getData, reset } from '../features/data/dataSlice'
import DataList from '../components/DataList'


function Dashboard() {
  const navigate=useNavigate();
  const dispatch=useDispatch();
  const {user}=useSelector((state)=>state.auth)
  const {datas,isError,isLoading,message,isSuccess}= useSelector((state)=>state.datas);

  // const handleChange=(e)=>{
  //   e.preventDefault()
  //   navigate('/')
  // }
  
  useEffect(()=>{
    if(isError){
      console.log(message)
    }
    if(!user){
      navigate("/login")
    }
    dispatch(getData())
    return ()=>dispatch(reset())

  },[user,isError,dispatch,message,reset,getData])

  if(isLoading){
    return <Spinner/>
  }
  return (
    <div>
     <h4 className='d-flex justify-content-center'>Welcome {user && user.name}</h4>
     <Link to='/createemployee' className='d-flex justify-content-end me-5 mb-2 text-decoration-none'><button className='btn btn-success'>Create Employee</button></Link>
     <div>
       {datas.length===0 ? (<h3>There is no datas are created</h3>):(
          <div>
            <DataList  data={datas}/>

          </div>
       )}
     </div>
    </div>
  )
}

export default Dashboard