import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import logo from '../images/spacestation.png'


function NavBar() {

    const [nav,setnav] = useState(false);

    const changeBackground = () => {
        if (window.scrollY >= 0) {
            setnav(true);
        }
        else{
            setnav(false);
        }
    }
    window.addEventListener('scroll', changeBackground);

    return(
        <nav className={nav ? "nav active" : "nav"}>
            <NavLink to='/' className='logo'>
                <img src={logo} alt=''/>
            </NavLink>
            <input className="menu-btn" type='checkbox' id='menu-btn'/>
            <label className='menu-icon' for='menu-btn'>
                <span className='nav-icon'></span>
            </label>
            <ul className='menu'>
                <li><NavLink to= '/about'>About</NavLink></li>
                <li><NavLink to= '/funfacts'>Fun Facts</NavLink></li>
                <li><NavLink to= '/tracker'>ISS Live Tracker</NavLink></li>
                <li><NavLink to= '/videos'>Videos</NavLink></li>
            </ul>
        </nav>
    )
}

export default NavBar;