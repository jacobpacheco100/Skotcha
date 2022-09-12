import React, { useContext } from 'react'
import { ModalContext } from '../context/ModalContext'
import { IoMdClose } from 'react-icons/io'

const DeleteBoard = () => {
  const { setModal } = useContext(ModalContext)
  return (
    <>
      <div className='modal--core--delete'>
        <IoMdClose onClick={() => setModal('')} className='modal--close' />
        <h4 className='h2 text-center'>WARNING:</h4>
        <p className='text text-center'>
          You are about to remove this task board from your dashboard
        </p>
        <button className='btn-danger w-full'>Delete Task Board</button>
      </div>
      <div onClick={() => setModal('')} className='modal--bg'></div>
    </>
  )
}

export default DeleteBoard
