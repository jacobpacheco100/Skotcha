import React, { useContext, useState } from 'react'
import { Context } from '../context/Context'
import { IoMdClose } from 'react-icons/io'

const AddTask = () => {
  const { setModal, setTaskBoards, taskBoards, activeBoard, setIsMore } =
    useContext(Context)

  // watch input
  const [title, setTitle] = useState('')
  const [description, setDescription] = useState('')

  const active = taskBoards.filter((board) => board.id === activeBoard)
  let activeBoardTasks
  let activeBoardSubject
  let activeBoardID
  if (activeBoard) {
    activeBoardID = active[0].id
    activeBoardTasks = active[0].tasks
    activeBoardSubject = active[0].subject
  }

  // on submit
  const addTask = (e) => {
    e.preventDefault()
    setTaskBoards(taskBoards.filter((board) => board.id !== activeBoard))
    setTaskBoards((prev) => [
      ...prev,
      {
        id: activeBoardID,
        subject: activeBoardSubject,
        tasks: [
          {
            id: Math.random(),
            task: title,
            description: description,
            doing: false,
            completed: false,
          },
          ...activeBoardTasks,
        ],
      },
    ])
    setModal('')
    setIsMore(false)
  }
  return (
    <>
      <div className='modal--core'>
        <IoMdClose onClick={() => setModal('')} className='modal--close' />
        <h4 className='h2'>+ New Task</h4>
        <form onSubmit={addTask} className='mt-10 space-y-5'>
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
          <button className='btn-2 w-full'>+ Add Task</button>
        </form>
      </div>
      <div onClick={() => setModal('')} className='modal--bg'></div>
    </>
  )
}

export default AddTask
