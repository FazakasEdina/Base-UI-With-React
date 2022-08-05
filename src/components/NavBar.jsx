import React from 'react';
import { Link } from 'react-router-dom';
import { HashLink } from 'react-router-hash-link';

export default function NavBar() {
  return (
    <>
    <div className='header'>
        <img src='wine-tasting.png' alt='wine tasting'/>
        <p>
            Company name
        </p>
    </div>
    <div className='nav-bar'>
        <nav>
            <Link to="/contact">
                Contact
            </Link>
            <Link to="/products">
                Products
            </Link>
            <HashLink smooth to="/#about-us">
                About
            </HashLink>
            <Link to="/">
                Home
            </Link>
        </nav>
    </div>
    </>
    );
}