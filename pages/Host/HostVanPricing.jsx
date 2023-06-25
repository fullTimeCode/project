import React from 'react'
import { useOutletContext } from 'react-router-dom'

const HostVanPricing = () => {
     const { currentVan } = useOutletContext()
  return (
      <section>
          <p className="current-host-van-price"> ${currentVan.price}<span>/day</span></p>
    </section>
  )
}

export default HostVanPricing