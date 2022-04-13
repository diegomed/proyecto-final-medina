import React from 'react';
import './NavBar.css';

function NavBar(props) {
    return (
        <div>
            <ul className='nav'>
                <a href="#">Superheroes</a>
                <a href="#">Drama</a>
                <a href="#">Accion</a>
            </ul>
        </div>
    );
}

export default NavBar;