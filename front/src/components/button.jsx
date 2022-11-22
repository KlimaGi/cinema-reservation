import React from 'react'

const Button = ({ func, text }) => {

  return (
    <div className='side-bar'>
      <button
        className='button'
        onClick={func}>
        {text}
      </button>

    </div>
  )
}

export default Button;
