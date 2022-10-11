import React, { useContext, useEffect, useState } from 'react';
import './styles.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { get, post } from "./plugins/http";
import MoviesPage from './pages/movies-page.jsx';
import ReservationPage from './pages/reservation-page';
import UserPage from './pages/user-page';


function App() {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    get('indexInfo').then(res => {
      setMovies(res.movies);
      console.log('res', res);
    })
  }, [])

  return (
    <>
      <h3>Movies sits reservation</h3>
      <div className='main'>

        <BrowserRouter>
          <Routes>
            <Route path='/' element={<MoviesPage />} />
            <Route path='/reservate/:id' element={<ReservationPage />} />
            <Route path='/user' element={<UserPage />} />
          </Routes>

        </BrowserRouter>
      </div>
    </>
  );
}

export default App;
