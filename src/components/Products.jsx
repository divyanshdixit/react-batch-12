import React from 'react'
import { NavLink, Outlet } from 'react-router-dom';

const Products = () => {
  return (
    <div>Products main page
        <ul> 
            <li> <NavLink to='featured'> Featured Products </NavLink></li>
            <li> <NavLink to='new'> New Products </NavLink></li>
        </ul>
    <div> RenderProdCategory </div>
{/* it helps in showing children component of parent route */}
        <Outlet/>
    </div>
  )
}

export default Products