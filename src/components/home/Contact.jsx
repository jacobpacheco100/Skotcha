import React from 'react'
import { TbSend } from 'react-icons/tb'

const Contact = () => {
  return (
    <section className='container mt-48'>
      <div className='text-center'>
        <h3 className='h3'>Questions?</h3>
        <h2 className='h2'>We’re Always Available!</h2>
      </div>
      <form className='bg-gray-1 mt-10 p-7 mx-auto max-w-[526px] rounded-lg'>
        <label htmlFor='name' className='label'>
          Full Name
        </label>
        <input type='text' id='name' className='input' />

        <label htmlFor='email' className='label'>
          Email Adress
        </label>
        <input type='email' id='email' className='input' />

        <label htmlFor='message' className='label'>
          Message
        </label>
        <textarea id='message' className='input h-28'></textarea>
        <button className='flex items-center justify-center btn-2 w-full'>
          Send <TbSend className='ml-2' />
        </button>
      </form>
    </section>
  )
}

export default Contact
