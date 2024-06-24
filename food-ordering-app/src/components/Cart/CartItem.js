import React from 'react';

const CartItem = ({ item }) => {
  return (
    <div>
      <h2>{item.name}</h2>
      <p>Quantity: {item.quantity}</p>
      <p>Total: ${(item.price * item.quantity).toFixed(2)}</p>
      <button>Remove</button>
    </div>
  );
};

export default CartItem;
