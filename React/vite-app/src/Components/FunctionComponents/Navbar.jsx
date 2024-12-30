import React from 'react';
import '../../assets/css/Navbar.css';
import {Link} from 'react-router-dom';

var Navbar=()=>
{
    return (
        <header>
        <nav>
        <ul>
            <li> <Link to="/"/> Home  </li>
            <li> <Link to="/about"/>About </li>
            <li><Link to="/contact">Contact</Link></li>
            <li><Link to="/gallery"/>Gallery</li>
        </ul>
        </nav>
        </header>
    )
}
export default Navbar;