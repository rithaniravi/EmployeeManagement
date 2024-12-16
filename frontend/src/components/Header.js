import React from 'react'
import {Link} from 'react-router-dom'
import {FaSignInAlt,FaSignOutAlt,FaUser} from 'react-icons/fa'
import { FaAlignJustify } from "react-icons/fa";
import { useSelector,useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { logout } from '../features/auth/authslice';


function Header() {

    const navigate=useNavigate() 
    const dispatch=useDispatch()
    const {user}=useSelector((state)=>state.auth)

    const onLogout=()=>{
        localStorage.removeItem('user')
        dispatch(logout())
        navigate('/login')
    }
  return (
    <div className='header m-5 d-flex flex'>
        <div className='container col-sm-6 col-md-6 col-lg-9'>
            <Link to='/' className='text-decoration-none ml-1 text-primary h3 p-2'>
            <FaAlignJustify/> <span className=''>Employee Central</span></Link>
        </div>
        <ul className='d-flex m-1' style={{listStyle:"none"}}>
       
            
            {
                user ? 
                (<li className=' d-flex m-2'>
                <button className='btn btn-primary m-1 w-100 text-white' onClick={onLogout}><FaSignOutAlt/>{user.name}</button>
            </li> ):(
                <>
            <li className='m-2'>
                <FaUser/><Link to='/register' className='m-1 text-decoration-none text-primary'>Register</Link>
            </li>
            <li className='m-2'>
                <FaSignInAlt/>
                <Link to='/login' className='m-1 text-decoration-none text-primary'>Login</Link>
            </li>
                </>
                
            )

            }
            
        </ul>

    </div>
  )
}

export default Header