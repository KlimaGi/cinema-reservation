import React from 'react';
import './styles.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import MoviesPage from './pages/movies-page.jsx';
import ReservationPage from './pages/reservation-page';

function App() {

  return (
    <>
      <h3>Movies sits reservation</h3>
      <div className='main'>

        <BrowserRouter>
          <Routes>
            <Route path='/' element={<MoviesPage />} />
            <Route path='/reservate/:id' element={<ReservationPage />} />
          </Routes>

        </BrowserRouter>
      </div>
    </>
  );
}

export default App;
