import React, { useState } from 'react'
import SideBar from '../components/dashboard/SideBar'
import TopBar from '../components/dashboard/TopBar'
import Tasks from '../components/dashboard/Tasks'

// modals ( + board / task & -board)
import AddBoard from '../components/dashboard/modals/AddBoard'
import AddTask from '../components/dashboard/modals/AddTask'
import DeleteBoard from '../components/dashboard/modals/DeleteBoard'
import EditBoard from '../components/dashboard/modals/EditBoard'

// context api
import { Context } from '../components/dashboard/context/Context'

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
    } else {
      return null
    }
  }
  // handles which modal is displayed
  const [modal, setModal] = useState()
  // state containing all boards and tasks within them
  const [taskBoards, setTaskBoards] = useState([
    {
      id: Math.random(),
      subject: 'reading log',
      tasks: [
        {
          id: Math.random(),
          task: 'read a book',
          description: 'Create a project folder in the Developer directory ',
          doing: false,
          completed: false,
        },
        {
          id: Math.random(),
          task: 'exercise',
          description: 'do 100 jumping jacks',
          doing: false,
          completed: false,
        },
        {
          id: Math.random(),
          task: 'exercise',
          description: 'do 100 jumping jacks',
          doing: false,
          completed: false,
        },
      ],
    },
    {
      id: Math.random(),
      subject: 'school work',
      tasks: [
        {
          id: Math.random(),
          task: 'Finish Project',
          description: 'Build powerpoint on solar system',
          doing: false,
          completed: false,
        },
        {
          id: Math.random(),
          task: 'Finish math homework',
          description: 'kill myself',
          doing: false,
          completed: false,
        },
      ],
    },
  ])
  // determines the currently clicked board
  const [activeBoard, setActiveBoard] = useState('')

  return (
    <main className='dashboard--container'>
      {/* context api */}
      <Context.Provider
        value={{
          setModal,
          taskBoards,
          setTaskBoards,
          activeBoard,
          setActiveBoard,
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
