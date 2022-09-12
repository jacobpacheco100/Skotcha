import React from 'react'

const DeleteBoard = () => {
  return (
    <>
      <div className='modal--core--delete'>
        <h4 className='h2 text-center'>WARNING:</h4>
        <p className='text text-center'>
          You are about to remove this task board from your dashboard
        </p>
        <button className='btn-danger w-full'>Delete Task Board</button>
      </div>
      <div className='modal--bg'></div>
    </>
  )
}

export default DeleteBoard
