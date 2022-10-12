import React, { useRef } from 'react';
import { post } from '../plugins/http';

const CarForm = () => {
  const carRefs = {
    modelRef: useRef(),
    colorRef: useRef(),
    yearRef: useRef(),
    gasConsRef: useRef(),
    fuelTypeRef: useRef(),
  }

  const confirmData = async () => {
    const carData = {
      model: carRefs.modelRef.current.value,
      color: carRefs.colorRef.current.value,
      year: carRefs.yearRef.current.value,
      gasolineConsumption: carRefs.gasConsRef.current.value,
      fuelType: carRefs.fuelTypeRef.current.value
    };
    const data = await post('addCar', carData);
    console.log('carData--', data);

    carRefs.modelRef.current.value = '';
    carRefs.colorRef.current.value = '';
    carRefs.yearRef.current.value = '';
    carRefs.gasConsRef.current.value = '';
    carRefs.fuelTypeRef.current.value = '';
  }

  return (
    <div className='container fd-column'>
      <input ref={carRefs.modelRef} type="text" placeholder='car model' />
      <input ref={carRefs.colorRef} type="text" placeholder='color' />
      <input ref={carRefs.yearRef} type="number" placeholder='year' />
      <input ref={carRefs.gasConsRef} type="number" placeholder='gasoline consumption' />
      <input ref={carRefs.fuelTypeRef} type="text" placeholder='fuel type' />

      <button onClick={confirmData}>add car</button>
    </div>
  )
}

export default CarForm;
