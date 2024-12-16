import React from 'react'
import { useDispatch } from 'react-redux'
import {deleteData} from '../features/data/dataSlice'
import { Link } from 'react-router-dom';

function DataList({data}) {

    const dispatch=useDispatch();


  return (
    <div className='container border rounded shadow-sm'>
    <table className="table">
        <thead>
            <tr>
                <th scope="col">Id</th>
                <th scope="col">Image</th>
                <th scope="col">Name</th>
                <th scope="col">Email</th>
                <th scope="col">Mobile No</th>
                <th scope="col">Designation</th>
                <th scope="col">Gender</th>
                <th scope="col">Course</th>
                <th scope="col">Create Date</th>
                <th scope="col">Action</th>
            </tr>
        </thead>
        <tbody>
                    {data ? data.map((data,index)=>{
                        return(
                            <>
                            <tr key={data.id}>
                            <th scope="row" style={{fontWeight:"normal"}}>{index+1}</th>
                            <td></td>
                            <td>{data.name}</td>
                            <td>{data.email}</td>
                            <td>{data.mobileno}</td>
                            <td>{data.designation}</td>
                            <td>{data.gender}</td>
                            <td>{data.course}</td>
                            <td>{new Date(data.createdAt).toLocaleString('en-US')}</td>
                            <td>
                            <Link to="/update">
                            <button className="m-1 p-1 rounded bg-info text-white border-0">Edit</button></Link>
                            <button className="m-1 p-1 rounded bg-danger text-white border-0" 
                            onClick={()=>dispatch(deleteData(data._id))}>Delete</button>
                            </td>
                           </tr>

                            </>

                        )
                    }):null}
                    
       

                
            
           
        </tbody>
    </table>
    </div>
  )
}

export default DataList