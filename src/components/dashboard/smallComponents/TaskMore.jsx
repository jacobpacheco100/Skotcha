import React from 'react'
import { BsFillExclamationCircleFill } from 'react-icons/bs'
import { AiFillEdit } from 'react-icons/ai'
import { FaTrash } from 'react-icons/fa'

const TaskMore = () => {
  return (
    <div className='task-more--container'>
      <div className='more--option'>
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
