import React, { useContext, useState } from 'react'
import { Context } from './context/Context'
import BoardItem from './smallComponents/BoardItem'

const SideBar = () => {
  const { setModal, taskBoards } = useContext(Context)

  const mapBoards = taskBoards.map((board) => {
    return <BoardItem key={board.id} id={board.id} subject={board.subject} />
  })

  return (
    <div className='sidebar--container p-4 space-y-8 flex flex-col'>
      <h1 className='logo'>skotcha</h1>
      <h3 className='font-bold text-gray-4 '>Tasks Boards (0)</h3>

      {/* task boards list */}
      <ul className='taskBoardsList--container'>
        {taskBoards.length > 0 ? (
          mapBoards
        ) : (
          <li className='empty-list'>no tasks</li>
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
