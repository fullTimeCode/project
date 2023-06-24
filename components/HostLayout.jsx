import React from 'react'
import { NavLink, Outlet } from "react-router-dom";

const HostLayout = () => {
  const activeStyles = {
    fontWeight: "bold",
    textDecoration: "underline",
    color: "#161616"
  }
  return (
      <main className="host-layout">
        <header >
            <nav>
                <NavLink style={({isActive}) => isActive ? activeStyles: null }  to="/host" end >Host</NavLink>
                <NavLink style={({isActive}) => isActive ? activeStyles: null }  to="/host/income">Income</NavLink>
                <NavLink style={({ isActive }) => isActive ? activeStyles : null} to="/host/reviews">Reviews</NavLink>
                <NavLink style={({isActive}) => isActive ? activeStyles: null }  to="/host/vans">Vans</NavLink>
            </nav>
        </header>
        <h1> Host </h1>
        <Outlet  />
      </main>
  )
}

export default HostLayout