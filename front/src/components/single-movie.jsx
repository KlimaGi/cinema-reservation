import React from 'react';
import { useNavigate } from 'react-router-dom';

const SingleMovie = ({ movie }) => {
  const nav = useNavigate();
  const movieReservation = () => {
    nav(`/reservate/${movie.id}`)
  }

  return (
    <div onClick={movieReservation} className='movie-container'>
      <div className='img-div'>
        <img className='img' src={movie.img} alt="" />
        <h3>{movie.title}</h3>
      </div>
      <p>seats {movie.seatsReservated}/40</p>
    </div>
  )
}

export default SingleMovie
