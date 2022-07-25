import React from 'react';
import './App.css';
import './Nav.css';

import {useNavigate} from "react-router-dom";

function Nav(props) {

  let navigate = useNavigate();

  return (
    <nav>
        <img src="img/link.png" alt="Logo Link" className = "link_icon"/>
        <ul className='nav-links'>
            <li><a onClick={() => navigate("/featured-page")} class="button" unselectable="on">Home</a></li>
            <li><a onClick={() => navigate("/manage-clubs")} class="button" unselectable="on">Manage Clubs</a></li>
            <li><a onClick={() => navigate("/asb")} class="button" unselectable="on">ASB</a></li>
            <li><a onClick={() => navigate("/about")} class="button" unselectable="on">About</a></li>
            <li><a onClick={() => navigate("/login")} class="button" unselectable="on">Login</a></li>
        </ul>
    </nav>  
  );
}

export default Nav;
