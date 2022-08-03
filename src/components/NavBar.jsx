import React from 'react';

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
            <a href="/">
                Contact
            </a>
            <a href="/">
                Products
            </a>
            <a href="/">
                About
            </a>
            <a href="/">
                Home
            </a>
        </nav>
    </div>
    </>
    );
}