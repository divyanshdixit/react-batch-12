import React from 'react';
import { Link, NavLink, Outlet } from 'react-router-dom';


const Products = () => {
  return (
    <div>
        Products main page 

        <ul>
            <li> <Link to="featured"> Featured </Link>  </li>
            <li> <Link to="new"> New </Link>  </li>
        </ul>

        {/* it helps in showing children component */}
        <Outlet/>
    </div>
  )
}

export default Products