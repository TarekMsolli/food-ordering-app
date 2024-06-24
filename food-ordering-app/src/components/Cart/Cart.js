import React, { useContext } from 'react';
import { CartContext } from '../../store/CartContext';

const Cart = () => {
  const { cartItems, removeItemFromCart, updateItemQuantity, totalPrice, deliveryFee } = useContext(CartContext);

  const handleQuantityChange = (itemId, event) => {
    const newQuantity = parseInt(event.target.value, 10);
    if (newQuantity > 0) {
      updateItemQuantity(itemId, newQuantity);
    }
  };

  return (
    <div>
      {cartItems.length === 0 ? (
        <p>Your cart is empty</p>
      ) : (
        <table>
          <thead>
            <tr>
              <th>Item</th>
              <th>Price</th>
              <th>Quantity</th>
              <th>Subtotal</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {cartItems.map(item => (
              <tr key={item.id}>
                <td>{item.name}</td>
                <td>${item.price.toFixed(2)}</td>
                <td>
                  <input
                    type="number"
                    value={item.quantity}
                    onChange={(e) => handleQuantityChange(item.id, e)}
                    min="1"
                  />
                </td>
                <td>${(item.price * item.quantity).toFixed(2)}</td>
                <td>
                  <button onClick={() => removeItemFromCart(item.id)}>Remove</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
      <div>
        <h3>Total: ${totalPrice.toFixed(2)}</h3>
        <h4>Delivery Fee: ${deliveryFee.toFixed(2)}</h4>
        <h2>Grand Total: ${(totalPrice + deliveryFee).toFixed(2)}</h2>
      </div>
    </div>
  );
};

export default Cart;
