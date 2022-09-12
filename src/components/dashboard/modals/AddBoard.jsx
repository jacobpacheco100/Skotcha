import React, { useContext } from 'react'
import { ModalContext } from '../context/ModalContext'
import { IoMdClose } from 'react-icons/io'

const AddBoard = () => {
  const { setModal } = useContext(ModalContext)

  return (
    <>
      <div className='modal--core'>
        <IoMdClose onClick={() => setModal('')} className='modal--close' />
        <h4 className='h2'>+ New Task Board</h4>
        <form className='mt-10 space-y-5'>
          <div>
            <label className='label'>Title</label>
            <input className='input' type='text' />
          </div>
          <button className='btn-2 w-full'>+ Create Board</button>
        </form>
      </div>
      <div onClick={() => setModal('')} className='modal--bg'></div>
    </>
  )
}

export default AddBoard
