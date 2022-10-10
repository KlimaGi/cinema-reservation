import React from 'react';

const ContainerItem = ({ item, xy, setSelectedBox, selectedBox }) => {

  const selectedItem = xy === selectedBox
    ? "container-item selected"
    : "container-item";


  return (
    <div
      className={selectedItem}
      onClick={() => setSelectedBox(xy)}
      selectedBox={selectedBox}
      style={{ backgroundColor: item.color }}
    >
      {xy}
    </div>
  );
}

export default ContainerItem;
