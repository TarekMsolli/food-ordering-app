import React, { createContext, useState, useEffect } from 'react';

export const CartContext = createContext();

export const CartProvider = ({ children }) => {
  const [cartItems, setCartItems] = useState([]);
  const [filter, setFilter] = useState('');
  const [search, setSearch] = useState('');
  const [totalPrice, setTotalPrice] = useState(0);
  const deliveryFee = totalPrice > 50 ? 0 : 5;

  useEffect(() => {
    const total = cartItems.reduce((acc, item) => acc + item.price * item.quantity, 0);
    setTotalPrice(total);
  }, [cartItems]);

  const addItemToCart = (item) => {
    setCartItems((prevItems) => {
      const itemExists = prevItems.find(cartItem => cartItem.id === item.id);
      if (itemExists) {
        return prevItems.map(cartItem =>
          cartItem.id === item.id
            ? { ...cartItem, quantity: cartItem.quantity + 1 }
            : cartItem
        );
      }
      return [...prevItems, { ...item, quantity: 1 }];
    });
  };

  const removeItemFromCart = (itemId) => {
    setCartItems(prevItems =>
      prevItems.filter(item => item.id !== itemId)
    );
  };

  const updateItemQuantity = (itemId, quantity) => {
    setCartItems(prevItems =>
      prevItems.map(item =>
        item.id === itemId ? { ...item, quantity } : item
      )
    );
  };

  return (
    <CartContext.Provider value={{ cartItems, addItemToCart, removeItemFromCart, updateItemQuantity, filter, setFilter, search, setSearch, totalPrice, deliveryFee }}>
      {children}
    </CartContext.Provider>
  );
};
