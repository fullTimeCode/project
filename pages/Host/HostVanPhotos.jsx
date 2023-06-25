import React from 'react'
import { useOutletContext } from 'react-router-dom'

const HostVanPhotos = () => {
     const { currentVan } = useOutletContext()
  return (
      <section>
          <img src={ currentVan.imageUrl} alt={currentVan.name + " photo"} />
    </section>
  )
}

export default HostVanPhotos