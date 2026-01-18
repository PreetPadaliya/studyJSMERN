import React from 'react'
import { Link,useNavigate } from 'react-router-dom'
import { useState } from 'react'
import AuthServices from '../../Services/AuthServices';
import  toast from 'react-hot-toast';

const Register = () => {
  const [username, setUsername] = useState('');
    const [email, setEmail] = useState('');
        const [password, setPassword] = useState('');
        
        const navigate = useNavigate();
        //register handler function
        const registerHandler = async (e) => { 
            try {
        e.preventDefault();
        const data = {email,password,username};
        const res = await AuthServices.registerUser(data);
        toast.success(res.data.message);
        navigate('/login');
        localStorage.setItem('todo',JSON.stringify(res.data));
        console.log(res.data);
       } catch (error) {
        toast.error(error.response.data.message); 
        console.log(error);
       }
        }
  return (
    <div className='form-container'>
    <div className='form'>
      <div className='mb-3'>
        <h1 className='Heading'>Register</h1>
        <div className='mb-3'>
          <input type="text" className='form-control' placeholder='Enter your username' value={username}
          onChange={(e)=>setUsername(e.target.value)}/>
        </div>
        <div className='mb-3'>
          <input type="email" className='form-control' placeholder='Enter your email' value={email}
          onChange={(e)=>setEmail(e.target.value)}/>
        </div>
        <div className='mb-3'>
          <input type="password" className='form-control' placeholder='Enter your password' value={password}
          onChange={(e)=>setPassword(e.target.value)} />
        </div>
        <div className='form-bottom'>
          <p className='text-center'>
            already registered ? Please <Link to='/login' className='register-link'>Login</Link>
          </p>
          <button type='submit' className='login-btn' onClick={registerHandler}>Register</button>
        </div>
      </div>
      </div>
   </div>
  )
}

export default Register
