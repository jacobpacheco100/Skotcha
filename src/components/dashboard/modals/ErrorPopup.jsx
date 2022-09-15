import React from 'react'
import { RiErrorWarningFill } from 'react-icons/ri'

const ErrorPopup = ({ message }) => {
  return (
    <div className='error--container'>
      <RiErrorWarningFill className='text-xl' />
      <p>{message}</p>
    </div>
  )
}

export default ErrorPopup
