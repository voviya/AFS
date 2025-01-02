import React from 'react';
import '../../assets/css/Navbar.css';
import {Link} from 'react-router-dom';

var Navbar=()=>{
    return (
        <header>
            <nav>
                <ul>
                    <li><Link to='/'>Home</Link></li>
                    <li><Link to='/About'>About</Link></li>
                    <li><Link to='/Gallery'>Gallery</Link></li>
                    <li><Link to='/UseEffect'>UseEffect</Link></li>
                    <li><Link to='/UseRef'>UseRef</Link></li>
                    <li><Link to='/UseContext'>UseContext</Link></li>
                    <li><Link to='/UseMemo'>UseMemo</Link></li>
                    <li><Link to='/Contact'>Contact</Link></li>
                </ul>
            </nav>
        </header>
        )
}
export default Navbar;