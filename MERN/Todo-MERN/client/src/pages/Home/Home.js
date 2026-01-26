import React, { useState } from 'react'
import Navbar from '../../components/Layout/Navbar'
import PopModal from '../../components/PopModal'

const Home = () => {
    const [showModal,setShowModal] = useState(false);
    const [title,setTitle] = useState("");
    const [description,setDescription] = useState("");

    //handle modal
    const openModalHandler = () =>{
      setShowModal(true);
    }

  return (
    <>
    <Navbar />
      <div className='container'>
        <div className='add-task'>
          <h1>
            Your Tasks
          </h1>
          <input type="search" placeholder="Search your task" />
          <button className='add-task-buuton' onClick={openModalHandler}>Add Task</button>
        </div>

        <h1>{title}  {description}</h1>

        <PopModal
        showModal={showModal}
        setShowModal={setShowModal}
        title={title}
        setTitle={setTitle}
        description={description}
        setDescription={setDescription}
        />
      </div>
  </>   
  )
}

export default Home
