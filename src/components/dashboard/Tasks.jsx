import React, { useContext, useState } from 'react'
import { Context } from './context/Context'
import Task from './smallComponents/Task'

const Tasks = () => {
  const { activeBoard, taskBoards } = useContext(Context)

  const active = taskBoards.filter((board) => board.id === activeBoard)

  let taskList

  if (activeBoard) {
    taskList = active[0].tasks.map((task) => {
      return (
        <Task key={task.id} title={task.task} description={task.description} />
      )
    })
    console.log(taskList)
  }

  return (
    <div className='tasks--container  flex'>
      {/* left : todo list */}
      <div className='grow p-14'>
        <div className='flex items-center space-x-5'>
          <div className='dot bg-danger'></div>
          <h3 className='h4'>TO DO (0)</h3>

          {/* map through board */}
          <ul>{activeBoard && taskList}</ul>
        </div>
      </div>

      {/* right : completed */}
      <div className='completed--sidebar hidden'>
        <div className='flex items-center space-x-5'>
          <div className='dot bg-primary'></div>
          <h3 className='h4'>COMPLETED (0)</h3>
        </div>
      </div>
    </div>
  )
}

export default Tasks
