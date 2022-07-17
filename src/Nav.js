import React from 'react';
import './App.css';

function Nav() {
  return (
    <nav>
      <h3>Logo</h3>
        <ul className='nav-links'>
        <li><a href="/featured-page">Home</a></li>
          <li><a href="/about">About</a></li>
          <li>Shop</li>
        </ul>
    </nav>
  );
}

export default Nav;
