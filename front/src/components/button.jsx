import React from 'react'

const Button = ({ reserve, cancelReserve, reservationStatus }) => {

  return (
    <div className='side-bar'>
      {reservationStatus ?
        <div>
          <button className='button' onClick={cancelReserve}>Delete reservation</button>
        </div>
        :
        <div>
          <button className='button' onClick={reserve}>Make reservation</button>
        </div>
      }

    </div>
  )
}

export default Button;
