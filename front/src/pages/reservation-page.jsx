import React, { useContext, useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import MainContext from '../context/main-context';
import Container from '../components/container';
import Button from '../components/button';

const ReservationPage = () => {
  const items = [
    {
      xy: 'c1', color: '',
    }, {
      xy: 'c2', color: 'powderblue',
    }, {
      xy: 'c3', color: 'powderblue',
    }, {
      xy: 'c4', color: '',
    }, {
      xy: 'c5', color: '',
    }, {
      xy: 'c6', color: '',
    }, {
      xy: 'c7', color: '',
    }, {
      xy: 'c8', color: '',
    }, {
      xy: 'b1', color: '',
    }, {
      xy: 'b2', color: '',
    }, {
      xy: 'b3', color: '',
    }, {
      xy: 'b4', color: '',
    }, {
      xy: 'b5', color: '',
    }, {
      xy: 'b6', color: '',
    }, {
      xy: 'b7', color: 'powderblue',
    }, {
      xy: 'b8', color: 'powderblue',
    }, {
      xy: 'a1', color: '',
    }, {
      xy: 'a2', color: '',
    }, {
      xy: 'a3', color: '',
    }, {
      xy: 'a4', color: '',
    }, {
      xy: 'a5', color: '',
    }, {
      xy: 'a6', color: '',
    }, {
      xy: 'a7', color: '',
    }, {
      xy: 'a8', color: '',
    },
  ];

  const { movies } = useContext(MainContext);
  let { id } = useParams();

  const [boxes, setBoxes] = useState([]);
  const [selectedBox, setSelectedBox] = useState('00');
  let reservationStatus = (boxes.find(x => x.xy === selectedBox))?.color;

  useEffect(() => {
    // let arr = [...items];
    let arr = items.map(item => item);
    setBoxes(arr)
  }, []);

  function reserve() {
    const boxesUpdate = [...boxes];
    const selected = boxesUpdate.find(x => x.xy === selectedBox);
    selected.color = 'powderblue';
    setBoxes(boxesUpdate);
  }

  function cancelReserve() {
    const boxesUpdate = [...boxes];
    const selected = boxesUpdate.find(x => x.xy === selectedBox);
    selected.color = '';
    setBoxes(boxesUpdate);
  }


  return (

    <div className="main fd-column">
      <h3> {movies[id].title}</h3>

      <Container boxes={boxes} setSelectedBox={setSelectedBox} selectedBox={selectedBox} />

      <Button
        reserve={reserve}
        cancelReserve={cancelReserve}
        reservationStatus={reservationStatus}
      />
    </div>

  )
}

export default ReservationPage;
