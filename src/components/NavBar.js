import React from 'react'
import { NavLink } from 'react-router-dom';


const NavBar = () => {
    return (
        <div className="navMenu">
        <ul> 
            <NavLink to="/" exact >
            <li>Home</li>  
            </NavLink>
            <NavLink to="/about" exact >
            <li>About</li>
            </NavLink>
            <NavLink to="/motivation"exact>
            <li>Motivation</li>
            </NavLink>
            <NavLink to="/boards" exact >
                <li> Boards</li>
            </NavLink>
        </ul>            
        </div>
    )
}
export default NavBar;