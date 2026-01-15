import React from 'react'
import {Link} from 'react-router-dom'
import Hero from '../../assets/images/hero.jpg'
import './Landing.css'

const Landing = () => {
  return (
    <div className='hero'>
      <div className='intro-text'>
        <h1>
          <span className='tagline1'>Organise your work and life, <br/>
            <span className='tagline2'>Finally</span>
          </span>
        </h1>
        <p>
          Welcome to Todo-MERN, your ultimate task management solution built with the power of the MERN stack.
          Whether you're a busy professional, a student juggling multiple assignments, or someone looking to boost productivity, Todo-MERN has got you covered.
        </p>
      <Link className="btn red" to="/register">Register Now !</Link>
      <Link className="btn blue" to="/login">Login Now !</Link>
      </div>
      
      <div className='hero-image'>
        <img src={Hero} alt="Hero" width={"100%"} height={"515"} />     
        </div>
    </div>
  )
}

export default Landing;
