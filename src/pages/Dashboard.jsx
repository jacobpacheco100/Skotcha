import React, { useState } from 'react'
import SideBar from '../components/dashboard/SideBar'
import TopBar from '../components/dashboard/TopBar'
import Tasks from '../components/dashboard/Tasks'

// modals ( + board / task & -board)
import AddBoard from '../components/dashboard/modals/AddBoard'
import AddTask from '../components/dashboard/modals/AddTask'
import DeleteBoard from '../components/dashboard/modals/DeleteBoard'

// context api
import { ModalContext } from '../components/dashboard/context/ModalContext'

const Dashboard = () => {
  const [modal, setModal] = useState()
  console.log(modal)

  const showModal = () => {
    if (modal === '+board') {
      return <AddBoard />
    } else if (modal === '+task') {
      return <AddTask />
    } else if (modal === '-board') {
      return <DeleteBoard />
    } else {
      return null
    }
  }

  // const showModal = () => {}
  return (
    <div className='dashboard--container'>
      <SideBar setModal={setModal} />

      <div className='workspace--container'>
        <TopBar />
        <Tasks />
      </div>

      {/* modals */}

      <ModalContext.Provider value={{ setModal }}>
        {showModal()}
      </ModalContext.Provider>
    </div>
  )
}

export default Dashboard
