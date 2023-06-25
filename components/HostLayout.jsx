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
                <NavLink style={({isActive}) => isActive ? activeStyles: null }  to="." end >Host</NavLink>
                <NavLink style={({ isActive }) => isActive ? activeStyles : null} to="income">Income</NavLink>
                <NavLink style={({isActive}) => isActive ? activeStyles: null }  to="vans">Vans</NavLink>
                <NavLink style={({ isActive }) => isActive ? activeStyles : null} to="reviews">Reviews</NavLink>
                
            </nav>
        </header>
        <Outlet  />
      </main>
  )
}

export default HostLayout