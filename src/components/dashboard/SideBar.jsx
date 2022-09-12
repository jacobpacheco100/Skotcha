import React from 'react'

const SideBar = ({ setModal }) => {
  return (
    <div className='sidebar--container p-4 space-y-8 flex flex-col'>
      <h1 className='logo'>skotcha</h1>
      <h3 className='font-bold text-gray-4 '>Tasks Boards (0)</h3>
      <ul className='taskBoardsList--container'>
        <li className='empty-list'>no task boards</li>
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
