import React from 'react'
import { NavLink, Outlet } from 'react-router-dom'
import { useAuth } from './auth';

const Layout = () => {
  const auth = useAuth();
  console.log(auth)

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
        <NavLink to='products'> Products </NavLink>
        <NavLink to='profile'> Profile </NavLink>
        {
          !auth.user && (
            <NavLink to='login'> Login </NavLink>
          )
        }
        
    </div>

    <section>
        <Outlet/>
    </section>
    </>
  )
}

export default Layout