import React, { useState } from 'react'
import { Link,useNavigate } from 'react-router-dom'
import './AuthStyle.css'
import AuthServices from '../../Services/AuthServices';
import  toast from 'react-hot-toast';


const Login = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');


    const navigate = useNavigate();
    //login handler function
    const loginHandler = async(e) => { 
       try {
        e.preventDefault();
        const data = {email,password};
        const res = await AuthServices.loginUser(data);
        toast.success(res.data.message);
        navigate('/home');
        localStorage.setItem('todo',JSON.stringify(res.data));
        console.log(res.data);
       } catch (error) {
        toast.error(error.response.data.message); 
        console.log(error);
       }
    };
  return (
   <div className='form-container'>
    <div className='form'>
      <div className='mb-3'>
        <h1 className='Heading'>Login</h1>
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
            not a user ? Please <Link to='/register' className='register-link'>Register</Link>
          </p>
          <button type='submit' className='login-btn' onClick={loginHandler}>Login</button>
        </div>
      </div>
      </div>
   </div>

  )
}

export default Login
