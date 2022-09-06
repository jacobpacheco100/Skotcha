import React from 'react'
import { Link } from 'react-router-dom'

const Hero = () => {
  return (
    <div className='container text-center w-full space-y-10 mt-32'>
      <h1 className='h1 max-w-[615px] mx-auto'>
        Manage a complex array of tasks, one at a time.
      </h1>
      <Link to='/dashboard' className='btn-2 inline-block'>
        Start Tasking!
      </Link>
    </div>
  )
}

export default Hero
