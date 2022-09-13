import React, { useContext, useState } from 'react'
import { Context } from '../context/Context'
import { IoMdClose } from 'react-icons/io'

const AddBoard = () => {
  const { setModal, taskBoards, setTaskBoards, activeBoard } =
    useContext(Context)

  const active = taskBoards.filter((board) => board.id === activeBoard)
  let activeBoardTasks
  if (activeBoard) {
    activeBoardTasks = active[0].tasks
  }

  console.log(activeBoardTasks)

  // watch input
  const [title, setTitle] = useState('')

  // on submit
  const editBoardName = (e) => {
    e.preventDefault()
    setTaskBoards((prev) => [
      ...prev,
      { id: activeBoard, subject: title, tasks: { activeBoardTasks } },
    ])
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

export default AddBoard
