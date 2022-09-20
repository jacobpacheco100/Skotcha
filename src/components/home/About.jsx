import React from 'react'
import { useRef } from 'react'

import emptyDashboard from '../../img/ss1.png'

const About = ({ how }) => {
  return (
    <div className='container mt-52 flex flex-col items-center justify-center space-y-10 lg:flex-row lg:space-x-10 lg:space-y-0'>
      <img
        src={emptyDashboard}
        alt=''
        className='h-[379px] w-full max-w-[492px] bg-gray-2 rounded-xl ring-1 ring-gray-2 object-cover object-left'
      />

      <article>
        <h3 className='h3'>About</h3>
        <h2 className='h2'>What is Skotcha?</h2>
        <p className='text max-w-[492px]'>
          Skotcha is an advanced online task managing application. No sign in
          required, instead all your data is saved to you local storage. With
          Skotcha you can effortlessy and efficiently manage a complex array of
          tasks and organize your work.
        </p>
        <button onClick={how} className='btn-1 '>
          Learn More
        </button>
      </article>
    </div>
  )
}

export default About
