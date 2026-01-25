import React from 'react'
import Navbar from '../../components/Layout/Navbar'

const Home = () => {
  return (
    <>
    <Navbar />
      <div className='container'>
        <div className='add-task'>
          <h1>
            Your Tasks
          </h1>
          <input type="search" placeholder="Search your task" />
          <button className='add-task-buuton'>Add Task</button>
        </div>
      </div>
  </>   
  )
}

export default Home
