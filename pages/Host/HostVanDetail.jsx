
import React, { useState, useEffect } from 'react'
import { useParams, NavLink, Outlet } from 'react-router-dom'

const HostVanDetail = () => {
  const { id } = useParams()

  const activeStyles = {
    fontWeight: "bold",
    borderBottom: "2px solid #161616",
    color: "#161616"
  }
  
  const [currentVan, setCurrentVan] = useState({})
  useEffect(() => {
    fetch(`/api/host/vans/${id}`)
      .then(resp => resp.json())
      .then(data => setCurrentVan(data.vans[0]))
    
  }, [])
  
  return (
    <main className='current-host-van-container'>
      {/* to=“..”  # one level up by default to parent route. Adding
      relative=“path” changes to path from default of route  and now it will go one level up in path ( from host/vans/1 to host/van ) and not to the parent route 😀 */}

      <NavLink to=".." relative='path' className='back-link' > <span>&#x2190;</span><span>back to all vans</span></NavLink>
      
   

      <header className="current-host-van-header">
        <div className="current-host-van-image">
          <img src={currentVan.imageUrl} alt="" />
        </div>
        <div className="current-host-van-info">
          <p className="current-host-van-type"> {currentVan.type} </p>
          <h3 className="current-host-van-name"> {currentVan.name} </h3>
          <p className="current-host-van-price"> ${currentVan.price}<span>/day</span></p>
        </div>   
      </header>
      <nav className="current-host-van-nav">
            <NavLink style={({ isActive }) => isActive ? activeStyles : null} to="."
          end className="current-host-van-link">Details</NavLink>
            <NavLink style={({isActive}) => isActive ? activeStyles: null}  to="pricing" className="current-host-van-link">Pricing</NavLink>
            <NavLink style={({isActive}) => isActive ? activeStyles: null}  to="photos" className="current-host-van-link">Photos</NavLink>
      </nav>
      <>
        <Outlet  /> 
      </>
      
  </main>
  )
}

export default HostVanDetail