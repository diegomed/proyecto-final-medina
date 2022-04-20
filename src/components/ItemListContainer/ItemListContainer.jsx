import React from 'react';
import './ItemListContainer.css'

function ItemListContainer({ greeting }) {
  return (
    <div className='list-item-container'>
        <p>{ greeting }</p>
    </div>
  )
}

export default ItemListContainer