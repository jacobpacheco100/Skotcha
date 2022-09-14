import React, { useContext, useState } from 'react'
import { Context } from '../context/Context'
import { BsFillExclamationCircleFill } from 'react-icons/bs'
import { AiFillEdit } from 'react-icons/ai'
import { FaTrash } from 'react-icons/fa'

const TaskMore = ({ task, setIsMore }) => {
  const {
    setModal,
    setActiveTask,
    taskBoards,
    setTaskBoards,
    activeBoard,
    activeTask,
  } = useContext(Context)

  console.log(task)

  setActiveTask(task.id)
  const handleEdit = () => {
    setModal('e-task')
    setIsMore(false)
  }

  // ========================================================================================

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

  const deleteTask = (e) => {
    e.preventDefault()
    setTaskBoards([
      {
        id: activeBoard,
        subject: activeBoardSubject,
        tasks: [...filterOldTasks],
      },
      ...filterOldBoards,
    ])
    setModal('')
  }

  const doingTask = (e) => {
    e.preventDefault()
    setTaskBoards([
      {
        id: activeBoard,
        subject: activeBoardSubject,
        tasks: [
          {
            id: activeTask,
            task: task.task,
            description: task.description,
            doing: !task.doing,
            completed: false,
          },
          ...filterOldTasks,
        ],
      },
      ...filterOldBoards,
    ])
    setModal('')
  }

  // ========================================================================================

  return (
    <div className='task-more--container'>
      <div className='more--option' onClick={handleEdit}>
        <span>Edit</span>
        <AiFillEdit className='text-primary' />
      </div>
      <div className='more--option' onClick={doingTask}>
        <span>Doing</span>
        <BsFillExclamationCircleFill className='text-secondary' />
      </div>
      <div className='more--option' onClick={deleteTask}>
        <span>Delete</span>
        <FaTrash className='text-danger' />
      </div>
    </div>
  )
}

export default TaskMore
