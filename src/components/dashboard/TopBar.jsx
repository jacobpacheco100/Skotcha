import React, { useContext, useState } from 'react'
import { Context } from './context/Context'
import { FiMoreHorizontal } from 'react-icons/fi'

import BoardMore from './smallComponents/BoardMore'

const TopBar = () => {
  const { activeBoard, taskBoards } = useContext(Context)

  const active = taskBoards.filter((board) => board.id === activeBoard)
  let boardName
  if (activeBoard) {
    boardName = active[0].subject
  }
  const [isMore, setIsMore] = useState(false)

  return (
    <div className='topbar--container flex items-center justify-between px-5'>
      <div>
        {activeBoard ? (
          <div className='flex items-center relative'>
            <h2 className='board-name'>{boardName}</h2>
            <FiMoreHorizontal
              className='more ml-3'
              onClick={() => setIsMore((prev) => !prev)}
            />
            {isMore && <BoardMore />}
          </div>
        ) : (
          <span className='empty-list'>no taskboards...</span>
        )}
      </div>
      <button className={`${activeBoard ? 'btn-abled' : 'btn-disabled'}`}>
        + Add New Task
      </button>
    </div>
  )
}

export default TopBar
