import React from 'react';
import SingleMovie from '../components/single-movie';

const Movies = () => {
  const movies = [
    { id: 1, title: 'movie-1', seats: 15 },
    { id: 2, title: 'movie-2', seats: 2 },
    { id: 3, title: 'movie-3', seats: 4 },
    { id: 4, title: 'movie-4', seats: 5 },
    { id: 5, title: 'movie-5', seats: 10 },
  ]

  return (
    <div className='container'>
      {
        movies.map(({ id, title, seats }, index) => (
          <SingleMovie key={index} title={title} seatsReservated={seats} id={id} />
        ))
      }

    </div>
  )
}

export default Movies
