import React, { useContext } from 'react'
import { Context } from '../context/Context'
import { IoMdClose } from 'react-icons/io'

const DeleteBoard = () => {
  const { setModal, taskBoards, setTaskBoards, setActiveBoard, activeBoard } =
    useContext(Context)

  const deleteBoard = () => {
    setTaskBoards(taskBoards.filter((board) => board.id !== activeBoard))
    setActiveBoard('')
    setModal('')
  }
  console.log(taskBoards)
  return (
    <>
      <div className='modal--core--delete'>
        <IoMdClose onClick={() => setModal('')} className='modal--close' />
        <h4 className='h2 text-center'>WARNING:</h4>
        <p className='text text-center'>
          You are about to remove this task board from your dashboard
        </p>
        <button onClick={deleteBoard} className='btn-danger w-full'>
          Delete Task Board
        </button>
      </div>
      <div onClick={() => setModal('')} className='modal--bg'></div>
    </>
  )
}

export default DeleteBoard
