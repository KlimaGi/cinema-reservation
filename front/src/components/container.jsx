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

  const cancelReserve = async () => {
    const data = await get(`cancelReserve/${selectedBox}/${id}`);
    setMovies(data.movies);
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

      <div className='d-flex js-con-center'>

        <Button
          func={reserve}
          text='Make reservation'
        />
        <Button
          func={cancelReserve}
          text='Delete reservation'
        />
      </div>
    </div>
  )
}

export default Container;
