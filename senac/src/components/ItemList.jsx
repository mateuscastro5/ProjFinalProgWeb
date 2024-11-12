import React from 'react';
import Item from './Item';

function ItemList({ items, onInteract }) {
  return (
    <div>
      {items.map((item) => (
        <Item key={item.id} item={item} onInteract={onInteract} />
      ))}
    </div>
  );
}

export default ItemList;
