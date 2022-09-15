import React, { useContext, useState } from 'react'
import { Context } from './context/Context'
import TaskItem from './smallComponents/TaskItem'
import CompletedTask from './smallComponents/CompletedTask'

const Tasks = () => {
  const { activeBoard, taskBoards, setModal } = useContext(Context)

  const activeBoardItem = taskBoards.filter((board) => board.id === activeBoard)

  // filter/map out tasks
  let taskList
  if (activeBoard) {
    taskList = activeBoardItem[0].tasks
      .filter((task) => !task.completed)
      .map((task) => {
        return (
          <TaskItem
            task={task}
            key={task.id}
            id={task.id}
            title={task.task}
            description={task.description}
            doing={task.doing}
            completed={task.completed}
          />
        )
      })
  }

  // filter/map out completed tasks
  let completedTasks
  if (activeBoard) {
    completedTasks = activeBoardItem[0].tasks
      .filter((task) => task.completed)
      .map((task) => {
        return <CompletedTask key={task.id} task={task} />
      })
  }

  console.log(completedTasks)

  return (
    <div className='tasks--container  flex'>
      {/* left : todo list */}
      <div className=' p-14'>
        <div className='flex items-center space-x-5'>
          <div className='dot bg-danger'></div>
          <h3 className='h4'>
            TO DO ( {activeBoard ? taskList.length : '0'} )
          </h3>
        </div>
        {/* map through tasks */}
        <div className='tasks--grid'>
          {activeBoard && taskList.length > 0 ? (
            taskList
          ) : (
            <p className='empty-list mt-5'>Nothing To Do...</p>
          )}
        </div>
      </div>

      {/* right : completed */}
      <div className='completed--sidebar '>
        <div>
          <div className='flex items-center space-x-5'>
            <div className='dot bg-primary'></div>
            <h3 className='h4'>
              COMPLETED ( {activeBoard ? completedTasks.length : '0'} )
            </h3>
          </div>
          {/* map completed tasks board */}
          <div className=''>{activeBoard && completedTasks}</div>
        </div>

        {activeBoard && completedTasks.length > 0 && taskList.length === 0 ? (
          <button className='btn-2 w-full' onClick={() => setModal('-board')}>
            Finish Board!
          </button>
        ) : (
          <button className='btn-disabled w-full py-[10px]'>
            Finish Board!
          </button>
        )}
      </div>
    </div>
  )
}

export default Tasks
