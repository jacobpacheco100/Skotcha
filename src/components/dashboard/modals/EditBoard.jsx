import React, { useContext, useState } from 'react'
import { Context } from '../context/Context'
import { IoMdClose } from 'react-icons/io'

const EditBoard = () => {
  const { setModal, taskBoards, setTaskBoards, activeBoard } =
    useContext(Context)

  // grabs the active board data ( to add them to the replacement board / set input value to old name)
  const active = taskBoards.filter((board) => board.id === activeBoard)
  let activeBoardTasks
  let activeBoardSubject
  if (activeBoard) {
    activeBoardTasks = active[0].tasks
    activeBoardSubject = active[0].subject
  }

  // watch input
  const [title, setTitle] = useState('')

  // on submit ( replaces board )
  const editBoardName = (e) => {
    e.preventDefault()
    const filterOld = taskBoards.filter((board) => board.id !== activeBoard)
    setTaskBoards([
      ...filterOld,
      { id: activeBoard, subject: title, tasks: activeBoardTasks },
    ])
    setModal('')
  }

  return (
    <>
      <div className='modal--core'>
        <IoMdClose onClick={() => setModal('')} className='modal--close' />
        <h4 className='h2'>Edit Board Name</h4>
        <form onSubmit={editBoardName} className='mt-10 space-y-5'>
          <div>
            <label className='label'>Title</label>
            <input
              onChange={(e) => setTitle(e.target.value)}
              className='input'
              type='text'
            />
          </div>
          <button className='btn-2 w-full'>Apply</button>
        </form>
      </div>
      <div onClick={() => setModal('')} className='modal--bg'></div>
    </>
  )
}

export default EditBoard
