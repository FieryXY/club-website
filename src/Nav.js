import React from 'react';
import './App.css';
import './Nav.css';
import link from './img/link.png';
function Nav() {
  return (
    <nav>
        <img src={link} alt="Logo Link" className = "link_icon"/>
        <ul className='nav-links'>
            <li><a href="/manage-clubs" className="button">Manage Clubs</a></li>
            <li><a href="/asb" className="button">ASB</a></li>
            <li><a href="/login" className="button">Login</a></li>
            <li><a href="/club-search" className="button">Club Search</a></li>

        </ul>
    </nav>  
  );
}

export default Nav;
