import React, { useContext } from 'react';
import MainContext from '../context/main-context';
import SingleMovie from '../components/single-movie';

const IndexPage = () => {
  const { movies } = useContext(MainContext);

  return (
    <div className='container'>
      {
        movies.map((movie, index) => (
          <SingleMovie movie={movie} key={index} />
        ))
      }

    </div>
  )
}

export default IndexPage;
