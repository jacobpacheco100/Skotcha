import React, { useState } from 'react'
import { HiMenuAlt3 } from 'react-icons/hi'
import { Link } from 'react-router-dom'

const Navbar = ({ about, how, contact }) => {
  const [isMenu, setIsMenu] = useState(false)

  return (
    <>
      <div className='container flex justify-between items-center h-20'>
        {/* logo */}
        <h1 className='logo'>skotcha</h1>
        {/* nav links */}
        <div className=' hidden md:block font-medium space-x-7'>
          <a className='nav--link' onClick={about}>
            About
          </a>
          <a className='nav--link' onClick={how}>
            How it Works
          </a>
          <a className='nav--link' onClick={contact}>
            Contact
          </a>
          <Link to='/dashboard' className='btn-1 bg-gray-1'>
            My Tasks
          </Link>
        </div>
        <HiMenuAlt3
          className={`text-4xl md:hidden z-30 ${isMenu && 'fixed right-5'}`}
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
          <a href='#' onClick={about}>
            About
          </a>
          <a href='#' onClick={how}>
            How it Works
          </a>
          <a href='#' onClick={contact}>
            Contact
          </a>
          <span></span>
          <Link to='/dashboard' className='btn-2 font-medium text-lg'>
            My Tasks
          </Link>
        </div>
      </div>

      {isMenu && (
        <div className='w-screen h-screen bg-dark opacity-70 top-0 z-10 fixed'></div>
      )}
    </>
  )
}

export default Navbar
