import React, { useContext, useState } from 'react'
import { Context } from '../context/Context'
import { BsFillExclamationCircleFill } from 'react-icons/bs'
import { AiFillEdit } from 'react-icons/ai'
import { FaTrash } from 'react-icons/fa'

const BoardMore = () => {
  const { setModal } = useContext(Context)

  return (
    <div className='more--container'>
      <div className='more--option' onClick={() => setModal('e-board')}>
        <span>Edit</span>
        <AiFillEdit className='text-primary' />
      </div>
      <div className='more--option' onClick={() => setModal('-board')}>
        <span>Delete</span>
        <FaTrash className='text-danger' />
      </div>
    </div>
  )
}

export default BoardMore
