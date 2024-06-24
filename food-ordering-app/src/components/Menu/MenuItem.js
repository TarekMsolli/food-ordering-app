import React, { useContext } from 'react';
import './MenuItem.css';
import { CartContext } from '../../store/CartContext';

const MenuItem = ({ item }) => {
  const { addItemToCart } = useContext(CartContext);

  return (
    <div className="menu-item">
      <img src={item.imageUrl} alt={item.name} />
      <h2>{item.name}</h2>
      <p>{item.description}</p>
      <p>${item.price.toFixed(2)}</p>
      <button onClick={() => addItemToCart(item)}>Add to Cart</button>
    </div>
  );
};

export default MenuItem;
