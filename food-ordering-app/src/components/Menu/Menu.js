import React, { useContext } from 'react';
import { menuItems } from '../../data/sampleData';
import MenuItem from './MenuItem';
import { CartContext } from '../../store/CartContext';
import './Menu.css';

const Menu = () => {
  const { filter, search } = useContext(CartContext);

  const filteredItems = menuItems.filter(item => {
    return (
      (filter ? item.tags.includes(filter) : true) &&
      (search ? item.name.toLowerCase().includes(search.toLowerCase()) : true)
    );
  });

  return (
    <div className="menu">
      {filteredItems.length > 0 ? (
        filteredItems.map(item => (
          <MenuItem key={item.id} item={item} />
        ))
      ) : (
        <p>No items found</p>
      )}
    </div>
  );
};

export default Menu;
