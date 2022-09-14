import React, { useContext, useEffect, useState } from 'react'
import { Context } from '../context/Context'
import { FiMoreHorizontal } from 'react-icons/fi'

import TaskMore from './TaskMore'

const Task = ({ title, description }) => {
  const [isMore, setIsMore] = useState(false)
  const { activeBoard, taskBoards } = useContext(Context)

  useEffect(() => {
    setIsMore(false)
  }, [activeBoard, taskBoards])

  return (
    <div className='task--item'>
      <div className='task--item-content'>
        <h1 className='task--item-title'>{title}</h1>
        <p className='task--item-description'>{description}</p>
      </div>
      <div className='task--item-options'>
        <input type='checkbox' />
        <div className='relative'>
          <FiMoreHorizontal
            className='more'
            onClick={() => setIsMore((prev) => !prev)}
          />
          {isMore && <TaskMore />}
        </div>
      </div>
    </div>
  )
}

export default Task
