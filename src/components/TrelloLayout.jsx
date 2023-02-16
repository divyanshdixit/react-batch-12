import React from 'react'
import { NavLink, Outlet } from 'react-router-dom'

const TrelloLayout = () => {
  return (
    <>
      <h1>See the trello functionalities </h1>
      <Outlet/>
    </>
  )
}

export default TrelloLayout