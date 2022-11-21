import React from 'react';

const ContainerItem = ({ item, itemIndex, setSelectedBox, selectedBox }) => {

  const selectedItem = itemIndex === selectedBox
    ? "container-item selected"
    : "container-item";


  return (
    <div
      className={selectedItem}
      onClick={() => setSelectedBox(itemIndex)}
      style={{ backgroundColor: item === true ? 'powderblue' : '' }}
    >
      {itemIndex}
    </div>
  );
}

export default ContainerItem;
