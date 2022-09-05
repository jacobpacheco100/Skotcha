import React from 'react'

const How = () => {
  return (
    <>
      <div className='container mt-52 flex flex-col items-start justify-center space-y-10 md:space-y-20 '>
        <div className='h-[379px] w-full  bg-gray-2 rounded-xl'></div>
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
            <div className='w-[221px] h-[212px] bg-gray-2 rounded-xl'></div>
            <div className='w-[221px] h-[212px] bg-gray-2 rounded-xl'></div>
          </div>
        </article>
      </div>
      <section className='container mt-20 lg:mt-32 mb-52 flex flex-col lg:flex-row items-center justify-center space-y-8 lg:space-y-0 lg:space-x-5'>
        <span className='button-1 bg-gray-2 w-[30%] lg:w-auto'>
          Create Board
        </span>
        <span className='button-1 bg-gray-2 w-[30%] lg:w-auto'>+ Add Task</span>
        <span className='button-1 bg-gray-2 w-[30%] lg:w-auto'>
          Mark Complete
        </span>
        <span className='button-1 bg-gray-2 w-[30%] lg:w-auto'>
          - Clear Board
        </span>
      </section>
    </>
  )
}

export default How
