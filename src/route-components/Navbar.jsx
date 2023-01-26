import React from 'react'
import { Link, NavLink } from 'react-router-dom';

const Navbar = () => {
  return (
    <> 
        <nav>
            <ul>
                <li> <NavLink to="/"> Home </NavLink> </li>
                <li> <NavLink to="/about"> About </NavLink> </li>
                <li> <NavLink to="/contact"> Contact </NavLink> </li>
                <li> <NavLink to="/services/phone"> Services </NavLink> </li>
                <li> <NavLink to="/services/name-plate-for-home"> name-plate-for-home </NavLink> </li>
                

            </ul>
        </nav>
    </>
  )
}

export default Navbar