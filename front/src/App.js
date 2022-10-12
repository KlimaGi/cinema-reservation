import React, { useEffect, useState } from 'react';
import './styles.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import MainContext from './context/main-context';
import { get, post } from "./plugins/http";
import IndexPage from './pages/index-page.jsx';
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
        <MainContext.Provider value={{ movies, setMovies }}>
          <BrowserRouter>
            <Routes>
              <Route path='/' element={<IndexPage />} />
              <Route path='/reservate/:id' element={<ReservationPage />} />
              <Route path='/user' element={<UserPage />} />
            </Routes>

          </BrowserRouter>

        </MainContext.Provider>

      </div>
    </>
  );
}

export default App;
