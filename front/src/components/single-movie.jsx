import React from 'react';
import { useNavigate } from 'react-router-dom';

const SingleMovie = ({ id, title, seatsReservated }) => {
  const nav = useNavigate();
  const movieReservation = () => {
    nav(`/reservate/${id}`)
  }

  return (
    <div onClick={movieReservation} className='movie-container'>
      <div>
        <h3>{title}</h3>
      </div>
      <p>seats {seatsReservated}/40</p>
    </div>
  )
}

export default SingleMovie
