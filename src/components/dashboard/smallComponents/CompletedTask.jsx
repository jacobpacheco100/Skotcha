import React from 'react'

const CompletedTask = ({ task }) => {
  return (
    <div className='task--completed'>
      <h1 className='font-bold text-gray-4 line-through text-lg capitalize'>
        {task.task}
      </h1>
    </div>
  )
}

export default CompletedTask
