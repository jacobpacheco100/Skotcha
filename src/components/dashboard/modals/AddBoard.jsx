import React, { useContext, useState } from 'react'
import { Context } from '../context/Context'
import { IoMdClose } from 'react-icons/io'

// error
import ErrorPopup from './ErrorPopup'

const AddBoard = () => {
  const { setModal, setTaskBoards } = useContext(Context)

  // watch input
  const [title, setTitle] = useState('')

  // on submit

  const [error, setError] = useState('')
  const addBoard = (e) => {
    e.preventDefault()
    if (title.length >= 1 && title.length <= 12) {
      setTaskBoards((prev) => [
        ...prev,
        { id: Math.random(), subject: title, tasks: [] },
      ])
      setModal('')
      setError('')
    } else {
      setError('Title must be between 1-12 characters')
    }
  }

  return (
    <>
      <div className='modal--core'>
        <IoMdClose onClick={() => setModal('')} className='modal--close' />
        <h4 className='h2'>+ New Task Board</h4>
        <form onSubmit={addBoard} className='mt-10 space-y-5'>
          <div>
            <label className='label'>Title ( max characters : 12 )</label>
            <input
              onChange={(e) => setTitle(e.target.value)}
              className='input'
              type='text'
            />
          </div>
          <button className='btn-2 w-full'>+ Create Board</button>
        </form>
      </div>

      {error && <ErrorPopup message={error} />}

      <div onClick={() => setModal('')} className='modal--bg'></div>
    </>
  )
}

export default AddBoard
