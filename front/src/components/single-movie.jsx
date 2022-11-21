import React from 'react';
import { useNavigate } from 'react-router-dom';

const SingleMovie = ({ movie }) => {
  const nav = useNavigate();
  const movieReservation = () => {
    nav(`/reservate/${movie.id}`)
  }

  const countSeats = movie.seats.reduce((acc, curr) => acc + Number(curr), 0);

  return (
    <div
      onClick={movieReservation}
      className='movie-container'>

      <div className='img-div'>
        <img className='img' src={movie.img} alt="" />
      </div>
      <h3>{movie.title}</h3>
      <p>Seats: {countSeats}/{movie.seats.length}</p>
    </div>
  )
}

export default SingleMovie
