import React, { useContext } from 'react';
import { useParams } from 'react-router-dom';
import MainContext from '../context/main-context';
import Container from '../components/container';

const ReservationPage = () => {

  const { movies } = useContext(MainContext);
  let { id } = useParams();
  console.log('id', id);

  return (

    <div className="main fd-column">
      <h3> {movies[id].title}</h3>

      <Container
        boxes={movies[id].seats}
      />

    </div>

  )
}

export default ReservationPage;
