import React from 'react';
import './App.css';
import './Nav.css';
import link from './img/link.png';
function Nav() {
  return (
    <nav>
        <img src={link} alt="Logo Link" className = "link_icon"/>
        <ul className='nav-links'>
            <li><a href="/featured-page">Home</a></li>
            <li><a href="/manage-clubs" class="button">Manage Clubs</a></li>
            <li><a href="/asb" class="button">ASB</a></li>
            <li><a href="/about" class="button">About</a></li>
            <li><a href="/login" class="button">Login</a></li>
        </ul>
    </nav>  
  );
}

export default Nav;
