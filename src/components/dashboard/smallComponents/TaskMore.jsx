import React, { useContext, useState } from 'react'
import { Context } from '../context/Context'
import { BsFillExclamationCircleFill } from 'react-icons/bs'
import { AiFillEdit } from 'react-icons/ai'
import { FaTrash } from 'react-icons/fa'

const TaskMore = ({ id }) => {
  const { setModal, setActiveTask, activeTask } = useContext(Context)

  const handleEdit = () => {
    setModal('e-task')
    setActiveTask(id)
  }

  return (
    <div className='task-more--container'>
      <div className='more--option' onClick={handleEdit}>
        <span>Edit</span>
        <AiFillEdit className='text-primary' />
      </div>
      <div className='more--option'>
        <span>Doing</span>
        <BsFillExclamationCircleFill className='text-secondary' />
      </div>
      <div className='more--option'>
        <span>Delete</span>
        <FaTrash className='text-danger' />
      </div>
    </div>
  )
}

export default TaskMore
