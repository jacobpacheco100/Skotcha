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
  const [taskBoards, setTaskBoards] = useState([
    {
      id: Math.random(),
      subject: 'school',
      tasks: [
        {
          id: Math.random(),
          task: 'Algebra',
          description:
            'finish pages 306, 307, 308 ( all even numbered questions )',
          doing: false,
          completed: false,
        },
        {
          id: Math.random(),
          task: 'English',
          description: 'Turn in reading log',
          doing: false,
          completed: false,
        },
        {
          id: Math.random(),
          task: 'PE Homework',
          description: 'Sign the sylabus and bring uniform',
          doing: false,
          completed: false,
        },
        {
          id: Math.random(),
          task: 'Biology Quiz',
          description: 'Study for tomorrow bio quiz ( flash cards are online )',
          doing: false,
          completed: false,
        },
        {
          id: Math.random(),
          task: 'Shool supplies',
          description: '',
          doing: false,
          completed: false,
        },
        {
          id: Math.random(),
          task: 'new schedual',
          description: '',
          doing: false,
          completed: false,
        },
        {
          id: Math.random(),
          task: 'join an after club',
          description: '',
          doing: false,
          completed: false,
        },
      ],
    },
  ])
  // determines the currently clicked board
  const [activeBoard, setActiveBoard] = useState(
    taskBoards.length > 0 ? taskBoards[0].id : ''
  )

  // determines the task selected for editing
  const [activeTask, setActiveTask] = useState('')

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
