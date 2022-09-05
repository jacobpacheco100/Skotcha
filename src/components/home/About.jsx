import React from 'react'

const About = () => {
  return (
    <div className='container mt-52 flex flex-col items-center justify-center space-y-10 lg:flex-row lg:space-x-10 lg:space-y-0'>
      <div className='h-[379px] w-full max-w-[492px] bg-gray-2 rounded-xl'></div>
      <article>
        <h3 className='h3'>About</h3>
        <h2 className='h2'>What is Skotcha?</h2>
        <p className='text max-w-[492px]'>
          Skotcha is an advanced online task managing application. No sign in
          required, instead all your data is saved to you local storage. With
          Skotcha you can effortlessy and efficiently manage a complex array of
          tasks and organize your work.
        </p>
        <button className='button-1 bg-gray-1'>Learn More</button>
      </article>
    </div>
  )
}

export default About
