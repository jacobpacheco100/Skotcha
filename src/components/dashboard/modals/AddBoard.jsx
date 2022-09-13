import React, { useContext, useState } from 'react'
import { Context } from '../context/Context'
import { IoMdClose } from 'react-icons/io'

const AddBoard = () => {
  const { setModal, setTaskBoards } = useContext(Context)

  // watch input
  const [title, setTitle] = useState('')

  // on submit
  const addBoard = (e) => {
    e.preventDefault()
    setTaskBoards((prev) => [
      ...prev,
      { id: Math.random(), subject: title, tasks: [] },
    ])
    setModal('')
  }

  return (
    <>
      <div className='modal--core'>
        <IoMdClose onClick={() => setModal('')} className='modal--close' />
        <h4 className='h2'>+ New Task Board</h4>
        <form onSubmit={addBoard} className='mt-10 space-y-5'>
          <div>
            <label className='label'>Title</label>
            <input
              onChange={(e) => setTitle(e.target.value)}
              className='input'
              type='text'
            />
          </div>
          <button className='btn-2 w-full'>+ Create Board</button>
        </form>
      </div>
      <div onClick={() => setModal('')} className='modal--bg'></div>
    </>
  )
}

export default AddBoard
