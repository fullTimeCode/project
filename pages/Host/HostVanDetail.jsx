
import React, { useState, useEffect } from 'react'
import { useParams, Link, Outlet } from 'react-router-dom'

const HostVanDetail = () => {
  const { id } = useParams()
  
  const [currentVan, setCurrentVan] = useState({})
  useEffect(() => {
    fetch(`/api/host/vans/${id}`)
      .then(resp => resp.json())
      .then(data => setCurrentVan(data.vans[0]))
    
  }, [])
  
  return (
    <main className='current-host-van-container'>
      <Link to="/host/vans" className='back-link' > <span>&#x2190;</span><span>back to all vans</span></Link>
      <header className="current-host-van-header">
        <div className="current-host-van-image">
          <img src={currentVan.imageUrl} alt="" />
        </div>
        <div className="current-host-van-info">
          <p className="van-type"> {currentVan.type} </p>
          <h3 className="van-name"> {currentVan.name} </h3>
          <p className="van-price"> ${currentVan.price}<span>/day</span></p>
        </div>   
      </header>
      <div className="current-host-van-links">
            <Link to="/host/vans" className="current-host-van-link">Details</Link>
            <Link to="/host/vans" className="current-host-van-link">Pricing</Link>
            <Link to="/host/vans" className="current-host-van-link">Photos</Link>
      </div>
      <div className="current-host-van-full-detail">
        <p className="">
          <strong>Name</strong>: {currentVan.name }
        </p>
        <p className="">
          <strong>Category</strong>: {currentVan.type}
        </p>
        <p className="">
          <strong>Description</strong>: {currentVan.description}
        </p>
        <p className="">
          <strong>Visibility</strong>: Public
        </p>
      </div>

    
    </main>
  )
}

export default HostVanDetail