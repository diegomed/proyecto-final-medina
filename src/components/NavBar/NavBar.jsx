import React from 'react';
import CartWidget from '../CartWidget/CartWidget';
import './NavBar.css';

function NavBar(props) {
    return (
        <div className='nav-container'>
            <img
                src='omg-logo.png'
                alt="OMG Comics"
            />
            <ul className='nav'>
                <li>Accion</li>
                <li>Drama</li>
                <li>Superheroes</li>
            </ul>
            <CartWidget/>
        </div>
    );
}

export default NavBar;