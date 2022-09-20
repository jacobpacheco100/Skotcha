import React from 'react'
import { MdPersonOff } from 'react-icons/md'

import dashboard from '../../img/ss2.png'
import tasks from '../../img/ss3.png'
import completed from '../../img/ss4.png'

const How = () => {
  return (
    <>
      <div className='container mt-52 flex flex-col items-start justify-center space-y-20 '>
        <img
          className='h-[379px] w-full rounded-xl ring-1 ring-gray-2 object-cover object-left'
          src={dashboard}
          alt=''
        />

        <article className='flex justify-between w-full space-x-5'>
          <div className='text-center mx-auto  lg:text-left lg:mx-0'>
            <h3 className='h3'>How it Works</h3>
            <h2 className='h2'>Minial User Friendly Design</h2>
            <p className='text max-w-[492px]'>
              Skotcha offers a simple and minimalistic work enviroment. The
              process is simple! just create a board for a spesific category of
              tasks, and add tasks to that board. You can, complete, edit, mark
              as “doing”, or delete that task. Once all your tasks are marked as
              complete, you can finally clear the board.
            </p>
          </div>
          <div className='hidden lg:flex space-x-5 self-center'>
            <img
              src={tasks}
              className='w-[221px] h-[212px] bg-gray-2 rounded-xl ring-1 ring-gray-2'
            />

            <img
              src={completed}
              className='w-[221px] h-[212px] bg-gray-2 rounded-xl ring-1 ring-gray-2'
            />
          </div>
        </article>
      </div>
      {/* steps */}
      <section className='container mt-10 mb-20 flex flex-col lg:flex-row items-center justify-center space-y-8 lg:mt-20 lg:space-y-0 lg:space-x-5'>
        <span className='btn-1 lg:w-auto'>Create Board</span>
        <span className='btn-1 lg:w-auto'>+ Add Task</span>
        <span className='btn-1 lg:w-auto'>Mark Complete</span>
        <span className='btn-1 lg:w-auto'>- Clear Board</span>
      </section>
      {/* no user login */}
      <section className='container text-center'>
        <div className='text-6xl text-primary p-10 bg-gray-1 inline-block rounded-full mt-20'>
          <MdPersonOff />
        </div>
        <h3 className='h3 mt-10'>Quick and Easy</h3>
        <h2 className='h2'>No Need To Sign Up</h2>
        <p className='text max-w-[492px] mx-auto'>
          Simplicity is Skotchas main priority, So theres no need to sign up,
          instead we save your tasks to your local storage.
        </p>
      </section>
    </>
  )
}

export default How
