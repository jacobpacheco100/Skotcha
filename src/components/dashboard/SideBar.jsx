import React, { useContext, useState } from 'react'
import { Context } from './context/Context'
import BoardItem from './smallComponents/BoardItem'
import { Link } from 'react-router-dom'

const SideBar = () => {
  const { setModal, taskBoards } = useContext(Context)

  const mapBoards = taskBoards.map((board) => {
    return (
      <BoardItem
        key={board.id}
        id={board.id}
        subject={board.subject}
        board={board}
      />
    )
  })

  return (
    <div className='sidebar--container p-4 space-y-8 flex flex-col'>
      <Link to='/'>
        <h1 className='logo'>skotcha</h1>
      </Link>
      <h3 className='font-bold text-gray-4 '>
        Tasks Boards ( {taskBoards.length} )
      </h3>

      {/* task boards list */}
      <ul className='taskBoardsList--container'>
        {taskBoards.length > 0 ? (
          mapBoards
        ) : (
          <li className='empty-list'>No Task Boards...</li>
        )}
      </ul>
      <button
        onClick={() => setModal('+board')}
        className='btn-add-board w-auto'
      >
        + Add Board
      </button>
    </div>
  )
}

export default SideBar
