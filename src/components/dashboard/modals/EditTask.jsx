import React, { useContext, useState } from 'react'
import { Context } from '../context/Context'
import { IoMdClose } from 'react-icons/io'

// error
import ErrorPopup from './ErrorPopup'

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

  //   grabs the active board object
  const activeBoardItem = taskBoards.filter((board) => board.id === activeBoard)

  //   variables based off the active board object (activeBoardItem)
  let activeBoardTasks
  let activeBoardSubject
  if (activeBoard) {
    activeBoardSubject = activeBoardItem[0].subject
    activeBoardTasks = activeBoardItem[0].tasks
  }

  //   filters boards and tasks no being edited
  const filterOldBoards = taskBoards.filter((board) => board.id !== activeBoard)
  const filterOldTasks = activeBoardTasks.filter(
    (task) => task.id !== activeTask
  )

  // on submit ( replaces active board / tasks in active board )
  const [error, setError] = useState('')
  const editTask = (e) => {
    e.preventDefault()
    if (title.length === 0 || title.length > 18) {
      setError('Title must be between 1-18 characters')
    } else if (description.length > 100) {
      setError('Description cannot exceed 100 characters')
    } else {
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
        ...filterOldBoards,
      ])
      setModal('')
      setError(false)
    }
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
        <form onSubmit={editTask} className='mt-10 space-y-5'>
          <div>
            <label className='label'>Title</label>
            <input
              onChange={(e) => setTitle(e.target.value)}
              className='input'
              type='text'
            />
          </div>
          <div>
            <label className='label'>Description</label>
            <textarea
              onChange={(e) => setDescription(e.target.value)}
              className='input h-28'
              type='text'
            />
          </div>
          <button className='btn-2 w-full'>Apply</button>
        </form>
      </div>
      {error && <ErrorPopup message={error} />}
      {/* dark background */}
      <div onClick={closeHandler} className='modal--bg'></div>
    </>
  )
}

export default EditTask
