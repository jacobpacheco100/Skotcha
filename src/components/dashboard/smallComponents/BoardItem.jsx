import React, { useContext, useState } from 'react'
import { Context } from '../context/Context'

const BoardItem = ({ subject, id }) => {
  const { activeBoard, setActiveBoard } = useContext(Context)

  const activeHandler = () => {
    setActiveBoard(id)
  }
  return (
    <div
      onClick={activeHandler}
      className={` ${
        activeBoard === id ? 'taskBoardItem--active' : 'taskBoardItem'
      }`}
    >
      {subject}
    </div>
  )
}

export default BoardItem
