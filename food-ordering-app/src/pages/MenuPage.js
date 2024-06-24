import React, { useContext } from 'react';
import Menu from '../components/Menu/Menu';
import './MenuPage.css';
import { CartContext } from '../store/CartContext';

const MenuPage = () => {
  const { filter, setFilter, search, setSearch } = useContext(CartContext);

  return (
    <div className="menu-page">
      <h1>Menu</h1>
      <div className="filter-search">
        <input 
          type="text" 
          placeholder="Search..." 
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />
        <select value={filter} onChange={(e) => setFilter(e.target.value)}>
          <option value="">All</option>
          <option value="fast food">Fast Food</option>
          <option value="burger">Burger</option>
        </select>
      </div>
      <Menu />
    </div>
  );
};

export default MenuPage;
