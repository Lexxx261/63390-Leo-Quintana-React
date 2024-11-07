import React from 'react';
import '../App.css';

const ItemListContainer = ({ greeting }) => {
  return (
    <div className="item-list-container">
      <h2 className="item-list-title">{greeting}</h2>
    </div>
  );
};

export default ItemListContainer;