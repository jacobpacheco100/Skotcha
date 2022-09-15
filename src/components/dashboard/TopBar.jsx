import React, { useContext, useEffect, useState } from 'react'
import { Context } from './context/Context'
import { FiMoreHorizontal } from 'react-icons/fi'

import BoardMore from './smallComponents/BoardMore'

const TopBar = () => {
  const { activeBoard, taskBoards, setModal } = useContext(Context)

  // returns active board object (inside) array
  const active = taskBoards.filter((board) => board.id === activeBoard)

  // return active board subject ( name )
  let boardName
  if (activeBoard) {
    boardName = active[0].subject
  }

  // handles options popup
  const [isMore, setIsMore] = useState(false)
  useEffect(() => {
    setIsMore(false)
  }, [activeBoard, taskBoards])

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
          <span className='empty-list'>No Task Boards...</span>
        )}
      </div>
      <button
        className={`${activeBoard ? 'btn-abled' : 'btn-disabled py-[7px]'}`}
        onClick={() => setModal('+task')}
      >
        + Add New Task
      </button>
    </div>
  )
}

export default TopBar
