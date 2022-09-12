import React, { useContext, useState } from 'react'
import { Context } from './context/Context'

const Tasks = () => {
  const { activeBoard, taskBoards } = useContext(Context)

  const active = taskBoards.filter((board) => board.id === activeBoard)
  /* active returns : 
  [
    {
      id: 0.619421836386278,
      subject: 'reading log',
      tasks: {
        task: 'read a book',
        description: 'read 200 pages a day',
      },
    },
  ]
  */

  // works
  console.log(active)

  // works
  console.log(active[0])

  // does not work ???( below )
  // console.log(active[0].tasks)

  return (
    <div className='tasks--container  flex'>
      {/* left : todo list */}
      <div className='grow p-14'>
        <div className='flex items-center space-x-5'>
          <div className='dot bg-danger'></div>
          <h3 className='h4'>TO DO (0)</h3>

          {/* map through board */}
          <ul></ul>
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
