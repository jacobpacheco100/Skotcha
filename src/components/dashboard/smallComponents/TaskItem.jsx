import React, { useContext, useEffect, useState } from 'react'
import { Context } from '../context/Context'
import { FiMoreHorizontal } from 'react-icons/fi'

// icons ( checkmark )
import { BsCheckLg } from 'react-icons/bs'

import TaskMore from './TaskMore'

const TaskItem = ({ task, title, description, doing }) => {
  const { activeBoard, taskBoards, setTaskBoards, setActiveTask, activeTask } =
    useContext(Context)
  const [isMore, setIsMore] = useState(false)

  useEffect(() => {
    setIsMore(false)
  }, [activeBoard, taskBoards])

  // ========================================================================================

  const completeTask = () => {
    //   grabs the active board object
    const activeBoardItem = taskBoards.filter(
      (board) => board.id === activeBoard
    )

    //   variables based off the active board object (activeBoardItem)
    let activeBoardTasks
    let activeBoardSubject
    if (activeBoard) {
      activeBoardSubject = activeBoardItem[0].subject
      activeBoardTasks = activeBoardItem[0].tasks
    }

    //   filters boards and tasks no being edited
    const filterOldBoards = taskBoards.filter(
      (board) => board.id !== activeBoard
    )
    const filterOldTasks = activeBoardTasks.filter(
      (item) => item.task !== task.task
    )

    console.log(activeBoardTasks)
    console.log(activeTask)
    setTaskBoards([
      {
        id: activeBoard,
        subject: activeBoardSubject,
        tasks: [
          {
            id: activeTask,
            task: task.task,
            description: task.description,
            doing: false,
            completed: true,
          },
          ...filterOldTasks,
        ],
      },
      ...filterOldBoards,
    ])
  }

  // ========================================================================================

  return (
    <div className={doing ? 'task--item-doing' : 'task--item'}>
      <div className='flex flex-col justify-center'>
        <h1 className='task--item-title'>{title}</h1>
        {description && <p className='task--item-description'>{description}</p>}
      </div>
      <div
        className={
          description
            ? 'flex flex-col justify-between items-end pl-2'
            : 'flex flex-row-reverse items-center justify-between w-[60px]'
        }
      >
        <div className='checkbox' onClick={completeTask}>
          <BsCheckLg className='text-sm' />
        </div>

        <div className='relative'>
          <FiMoreHorizontal
            className='more'
            onClick={() => setIsMore((prev) => !prev)}
          />
          {isMore && <TaskMore task={task} setIsMore={setIsMore} />}
        </div>
      </div>
    </div>
  )
}

export default TaskItem
