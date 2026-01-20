import React,{useState,useEffect} from 'react';
import {Link,useNavigate} from 'react-router-dom'
import toast from 'react-hot-toast';

const Navbar = () => {
const [userName,setUserName]=useState("");
const navigate = useNavigate();
//logout function
const logoutHandler = () =>{
    localStorage.removeItem('todo');
    toast.success("Logout Successfully");
    navigate('/login');
    
};

//getting username from localstorage
useEffect(()=>{
    const userData = JSON.parse(localStorage.getItem('todo'));
    console.log("username Data :",userData && userData.user.username);
    setUserName(userData && userData.user.username);
},[]);

  return (
    <nav class="navbar navbar-expand-lg bg-body-tertiary">
  <div class="container-fluid">
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarTogglerDemo01" aria-controls="navbarTogglerDemo01" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarTogglerDemo01">
        <h4 className='navbar-brand'><i class="fa-regular fa-user"></i>
        <i> Welcome {userName}!</i>
        </h4>
      <ul class="navbar-nav ms-auto mb-2 mb-lg-0">
        <li class="nav-item">
          <Link class="nav-link active" aria-current="page" to="/home">Home</Link>
        </li>
        <li class="nav-item">
          <Link class="nav-link"to="/Todolist">Todolist</Link>
        </li>
        <li class="nav-item">
          <button class="nav-link" onClick={logoutHandler}>Logout</button>
        </li>
      </ul>
    </div>
  </div>
</nav>
  )
}

export default Navbar
