import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import './AuthStyle.css'


const Login = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    //login handler function
    const loginHandler = (e) => { 
        try {
          e.preventDefault();
          alert('Login Successful');
        } catch (error) {
          console.log(error);
        }
    }
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
