// src/Menu.js
import React from 'react';
import './menu.css';


const Menu = () => {
  const menuItems = [
    {
      id: 1,
      name: 'Margherita Pizza',
      description: 'Classic pizza with fresh mozzarella, tomatoes, and basil.',
      price: '$12.00',
    },
    {
      id: 2,
      name: 'Caesar Salad',
      description: 'Crisp romaine, parmesan cheese, croutons, and Caesar dressing.',
      price: '$9.00',
    },
    {
      id: 3,
      name: 'Spaghetti Carbonara',
      description: 'Pasta with pancetta, egg, cheese, and black pepper.',
      price: '$14.00',
    },
    {
      id: 4,
      name: 'Tiramisu',
      description: 'Coffee-flavored Italian dessert.',
      price: '$6.00',
    },
  ];

  return (
    <div>
      <h1>Restaurant Menu</h1>
      <ul>
        {menuItems.map(item => (
          <li key={item.id}>
            <h2>{item.name}</h2>
            <p>{item.description}</p>
            <p>{item.price}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Menu;
