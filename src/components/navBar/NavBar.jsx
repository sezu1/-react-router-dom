import React from 'react';
import { NavLink } from 'react-router-dom';

export function NavBar() {
    return (
        <ul className='nav_bar'>
            <li>
                <NavLink to="/">Home</NavLink>
            </li>

            <li>
                <NavLink to="/contact">Contact page</NavLink>
            </li>

            <li>
                <NavLink to="/login">Login page</NavLink>
            </li>

            <li>
                <NavLink to="/portfolio">Portfolio page</NavLink>
            </li>
        </ul>
    );
}

