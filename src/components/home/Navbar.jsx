import React, { useState } from 'react'
import { HiMenuAlt3 } from 'react-icons/hi'

const Navbar = () => {
  const [isMenu, setIsMenu] = useState(false)

  return (
    <>
      <div className='container flex justify-between items-center h-20'>
        {/* logo */}
        <h1 className='logo'>skotcha</h1>
        {/* nav links */}
        <div className=' hidden md:block font-medium space-x-7'>
          <a href='#'>How it Works</a>
          <a href='#'>About</a>
          <a href='#'>Contact</a>
          <button className='button-1 bg-gray-1'>My Tasks</button>
        </div>
        <HiMenuAlt3
          className='text-4xl md:hidden z-30'
          onClick={() => setIsMenu((prev) => !prev)}
        />
      </div>

      {/* menu ( mobile ) */}
      <div
        className={`w-[70%] h-screen fixed bg-gray-1 top-0 right-0 z-20 translate-x-[100%] ease-in-out duration-300 ${
          isMenu && 'translate-x-[0%]'
        }`}
      >
        <div className='flex flex-col items-center justify-between space-y-9 px-10 mt-28 text-xl font-bold'>
          <a href='#'>How it Works</a>
          <a href='#'>About</a>
          <a href='#'>Contact</a>
          <span></span>
          <button className='button-1 bg-primary font-medium text-lg'>
            My Tasks
          </button>
        </div>
      </div>

      {isMenu && (
        <div className='w-screen h-screen bg-dark opacity-70 z-10 fixed'></div>
      )}
    </>
  )
}

export default Navbar
