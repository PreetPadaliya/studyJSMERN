import React from 'react'
import toast from 'react-hot-toast';
import TodoServices from '../Services/TodoServices';

const PopModal = ({title, setTitle, description, setDescription, showModal, setShowModal}) => {
  //handle close
  const handleClose = () =>{
    setShowModal(false);
  }

//handle submit
  const handleSubmit = async() =>{
    try {
      const userData = JSON.parse(localStorage.getItem('todo'));
      const id = userData?.user?.id;
      const data = {title, description, createdBy: id};

      if(!title || !description){
        toast.error("All fields are required");
        return;
      }
      const todo = await TodoServices.createTodo(data);
      setShowModal(false);
      toast.success("Task created successfully");
      setTitle("");
      setDescription("");
      console.log(todo);
    } catch (error) {
      console.log(error);
      toast.error("Error in creating task");
    }
  }


  return (
  <>
  {showModal && (
    <div className='modal' tabIndex={-1} role='dialog' style={{display:'block', backgroundColor:'rgba(0,0,0,0.5)'}}>
    <div className='modal-dialog' role='document'>
      <div className='modal-content'>
      <div className='modal-header'>
        <h5 className='modal-title'>Add New Task</h5>
        <button type='button' className='btn-close' aria-label='Close' onClick={handleClose}>
          <span aria-hidden="true">&times;</span>
        </button>
      </div>
      <div className='modal-body'>
      <div className='mb-3'>
        <label className='form-label'>Title</label>
        <input type="text" className='form-control' placeholder='Enter your task name' value={title} onChange={(e)=>setTitle(e.target.value)} />
        </div>
        <div className='form-floating'>
          <textarea className='form-control' placeholder='Enter your task details' style={{height:'100px'}} value={description} onChange={(e)=>setDescription(e.target.value)}></textarea>
          <label className='floatingTextarea'>Description</label>
        </div>
        </div>
        <div className='modal-footer'>
          <button type='button' className='btn btn-secondary' onClick={handleClose}>close</button>
          <button type='button' className='btn btn-primary' onClick={handleSubmit}>create</button>
        </div>
      </div>
      </div>
      </div>
  )}  
  </>
  )
}

export default PopModal;