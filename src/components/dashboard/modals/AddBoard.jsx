import React from 'react'

const AddBoard = () => {
  return (
    <>
      <div className='modal--core'>
        <h4 className='h2'>+ New Task Board</h4>
        <form className='mt-10 space-y-5'>
          <div>
            <label className='label'>Title</label>
            <input className='input' type='text' />
          </div>
          <button className='btn-2 w-full'>+ Create Board</button>
        </form>
      </div>
      <div className='modal--bg'></div>
    </>
  )
}

export default AddBoard
