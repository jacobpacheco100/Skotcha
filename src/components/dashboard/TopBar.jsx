import React from 'react'

const TopBar = () => {
  return (
    <div className='topbar--container flex items-center justify-between px-5'>
      <div className='empty-list'>no task boards...</div>
      <button className='btn-disabled '>+ Add New Task</button>
    </div>
  )
}

export default TopBar
