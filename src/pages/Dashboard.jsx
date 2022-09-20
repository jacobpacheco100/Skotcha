import React, { useState } from 'react'

// main components
import SideBar from '../components/dashboard/SideBar'
import TopBar from '../components/dashboard/TopBar'
import Tasks from '../components/dashboard/Tasks'

// modals ( + board / task & -board)
import AddBoard from '../components/dashboard/modals/AddBoard'
import AddTask from '../components/dashboard/modals/AddTask'
import DeleteBoard from '../components/dashboard/modals/DeleteBoard'
import EditBoard from '../components/dashboard/modals/EditBoard'
import EditTask from '../components/dashboard/modals/EditTask'

// context api
import { Context } from '../components/dashboard/context/Context'

// icon
import { BsGear } from 'react-icons/bs'

const Dashboard = () => {
  // on button clicks, modal will equal a string corosponding to that button ( + Add Board = +board)
  const showModal = () => {
    if (modal === '+board') {
      return <AddBoard />
    } else if (modal === '+task') {
      return <AddTask />
    } else if (modal === '-board') {
      return <DeleteBoard />
    } else if (modal === 'e-board') {
      return <EditBoard />
    } else if (modal === 'e-task') {
      return <EditTask />
    } else {
      return null
    }
  }
  // handles which modal is displayed
  const [modal, setModal] = useState()
  // state containing all boards and tasks within them
  const [taskBoards, setTaskBoards] = useState([])
  // determines the currently clicked board
  const [activeBoard, setActiveBoard] = useState(
    taskBoards.length > 0 ? taskBoards[0].id : ''
  )

  // determines the task selected for editing
  const [activeTask, setActiveTask] = useState('')

  return (
    <main className='dashboard--container'>
      {/* hide if mobile */}
      <div className='h-screen w-screen bg-gray-1 fixed z-40 flex items-center sm:hidden'>
        <div className='w-[80%] max-w-[300px] text-center mx-auto flex flex-col justify-center items-center space-y-5'>
          <BsGear className='text-7xl' />
          <p className='h4'>
            Sorry! Taskboard on mobile devices is still in development
          </p>
        </div>
      </div>
      {/* context api */}
      <Context.Provider
        value={{
          setModal,
          taskBoards,
          setTaskBoards,
          activeBoard,
          setActiveBoard,
          activeTask,
          setActiveTask,
        }}
      >
        <SideBar setModal={setModal} />
        <section className='workspace--container'>
          <TopBar />
          <Tasks />
        </section>

        {/* modals */}

        {showModal()}
      </Context.Provider>
    </main>
  )
}

export default Dashboard
