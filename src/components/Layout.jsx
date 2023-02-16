import React from 'react'
import { NavLink, Outlet } from 'react-router-dom'

const Layout = () => {
  return (
    <>
    <div>
        <NavLink to='/' style={({isActive}) => {return { background: isActive ? 'green' : ''}}}> Home </NavLink>
        <NavLink to='about'> About </NavLink>
        <NavLink to='/contact'> Contact </NavLink>
        <NavLink to='/post'> Post </NavLink>
        <NavLink to='/trello'> 
          <NavLink to='board'> TrelloBoard </NavLink>
        </NavLink>
        
    </div>

    <section>
        <Outlet/>
    </section>
    </>
  )
}

export default Layout