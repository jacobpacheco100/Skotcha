import React, { useContext, useState } from 'react'
import { Context } from '../context/Context'
import { IoMdClose } from 'react-icons/io'

const EditTask = () => {
  const {
    setModal,
    taskBoards,
    setTaskBoards,
    activeBoard,
    activeTask,
    setActiveTask,
  } = useContext(Context)

  // watch input
  const [title, setTitle] = useState('')
  const [description, setDescription] = useState('')

  // grabs the active board data ( to add them to the replacement board && set input value to old name)
  const activeBoardItem = taskBoards.filter((board) => board.id === activeBoard)
  const activeTaskObject = activeBoardItem[0].tasks.filter(
    (task) => task.id === activeTask
  )

  let activeBoardTasks
  let activeBoardSubject
  if (activeBoard) {
    activeBoardSubject = activeBoardItem[0].subject
    activeBoardTasks = activeBoardItem[0].tasks
  }

  const filterOldTasks = activeBoardTasks.filter(
    (task) => task.id !== activeTask
  )

  console.log(filterOldTasks)

  // on submit ( replaces board )
  const editBoardName = (e) => {
    e.preventDefault()
    const filterOld = taskBoards.filter((board) => board.id !== activeBoard)
    setTaskBoards([
      {
        id: activeBoard,
        subject: activeBoardSubject,
        tasks: [
          {
            id: activeTask,
            task: title,
            description: description,
            doing: false,
            completed: false,
          },
          ...filterOldTasks,
        ],
      },
      ...filterOld,
    ])
    setModal('')
  }

  const closeHandler = () => {
    setModal('')
    setActiveTask('')
  }

  return (
    <>
      <div className='modal--core'>
        <IoMdClose onClick={closeHandler} className='modal--close' />
        <h4 className='h2'>Edit Task</h4>
        <form onSubmit={editBoardName} className='mt-10 space-y-5'>
          <div>
            <label className='label'>Title</label>
            <input
              onChange={(e) => setTitle(e.target.value)}
              className='input'
              type='text'
            />
          </div>
          <div>
            <label className='label'>Title</label>
            <textarea
              onChange={(e) => setDescription(e.target.value)}
              className='input h-28'
              type='text'
            />
          </div>
          <button className='btn-2 w-full'>Apply</button>
        </form>
      </div>
      {/* dark background */}
      <div onClick={closeHandler} className='modal--bg'></div>
    </>
  )
}

export default EditTask
