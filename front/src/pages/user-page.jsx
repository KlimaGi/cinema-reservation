import React, { useRef } from 'react';
import { post } from '../plugins/http';

const UserPage = () => {
  const modelRef = useRef();
  const colorRef = useRef();
  const yearRef = useRef();
  const gasConsRef = useRef();
  const fuelTypeRef = useRef();

  const confirmData = async () => {
    const carData = {
      model: modelRef.current.value,
      color: colorRef.current.value,
      year: yearRef.current.value,
      gasolineConsumption: gasConsRef.current.value,
      fuelType: fuelTypeRef.current.value
    };
    const data = await post('carData', carData);
    console.log('carData', data);

    modelRef.current.value = '';
    colorRef.current.value = '';
    yearRef.current.value = '';
    gasConsRef.current.value = '';
    fuelTypeRef.current.value = '';
  }

  return (
    <div className='container fd-column'>
      <input ref={modelRef} type="text" placeholder='car model' />
      <input ref={colorRef} type="text" placeholder='color' />
      <input ref={yearRef} type="text" placeholder='year' />
      <input ref={gasConsRef} type="text" placeholder='gasoline consumption' />
      <input ref={fuelTypeRef} type="text" placeholder='fuel type' />

      <button onClick={confirmData}>add car</button>
    </div>
  )
}

export default UserPage;
