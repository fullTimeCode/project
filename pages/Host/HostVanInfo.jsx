import React from 'react'
import { useOutletContext } from 'react-router-dom'


const HostVanInfo = () => {
    const { currentVan } = useOutletContext()
  return (
    <section className="current-host-van-full-detail">
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
         
      </section> 
  )
}

export default HostVanInfo