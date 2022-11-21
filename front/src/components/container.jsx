import React, { useState, useContext } from 'react';
import { useParams } from 'react-router-dom';
import MainContext from '../context/main-context';
import ContainerItem from './container-item';
import Button from './button';
import { get } from '../plugins/http';

const Container = ({ boxes }) => {
  const [selectedBox, setSelectedBox] = useState(0);
  let { id } = useParams();
  const { setMovies } = useContext(MainContext);


  const reserve = async () => {
    const data = await get(`reserve/${selectedBox}/${id}`);
    console.log('data-selected', data);
    setMovies(data.movies);
  }

  function cancelReserve() {
    //todo: cancel reserve req to back
    // const boxesUpdate = [...movies[id].seats];
    // const selected = boxesUpdate.find(x => x === selectedBox);
    // selected.color = '';
    // setBoxes(boxesUpdate);
    console.log('cancel reserve');
  }

  return (
    <div>

      <div className='container'>
        {boxes.map((box, index) => (
          <ContainerItem
            key={index + "" + box}
            itemIndex={index}
            item={box}
            setSelectedBox={setSelectedBox}
            selectedBox={selectedBox}
          />))
        }
      </div>

      <Button
        reserve={reserve}
        cancelReserve={cancelReserve}
      // reservationStatus={reservationStatus}
      />
    </div>
  )
}

export default Container;
