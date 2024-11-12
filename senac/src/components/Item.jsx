import React from 'react';

function Item({ item, onInteract }) {
  return (
    <div>
      <h3>{item.name}</h3>
      <p>{item.description}</p>
      <button onClick={() => onInteract(item.id)}>Interagir</button>
    </div>
  );
}

export default Item;
